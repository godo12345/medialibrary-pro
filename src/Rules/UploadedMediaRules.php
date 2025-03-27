<?php

namespace Spatie\MediaLibraryPro\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Contracts\Validation\ValidatorAwareRule;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Lang;
use Illuminate\Validation\Validator;
use Spatie\MediaLibraryPro\Rules\GroupRules\MaxItemsRule;
use Spatie\MediaLibraryPro\Rules\GroupRules\MaxTotalSizeInKbRule;
use Spatie\MediaLibraryPro\Rules\GroupRules\MinItemsRule;
use Spatie\MediaLibraryPro\Rules\GroupRules\MinTotalSizeInKbRule;
use Spatie\MediaLibraryPro\Rules\ItemRules\AttributeRule;
use Spatie\MediaLibraryPro\Rules\ItemRules\DimensionsRule;
use Spatie\MediaLibraryPro\Rules\ItemRules\ExtensionRule;
use Spatie\MediaLibraryPro\Rules\ItemRules\HeightBetweenRule;
use Spatie\MediaLibraryPro\Rules\ItemRules\MaxItemSizeInKbRule;
use Spatie\MediaLibraryPro\Rules\ItemRules\MediaItemRule;
use Spatie\MediaLibraryPro\Rules\ItemRules\MimeTypeRule;
use Spatie\MediaLibraryPro\Rules\ItemRules\MinItemSizeInKbRule;
use Spatie\MediaLibraryPro\Rules\ItemRules\WidthBetweenRule;

class UploadedMediaRules implements ValidationRule, ValidatorAwareRule
{
    public array $groupRules = [];

    public array $itemRules = [];

    protected bool $required = false;

    public bool $implicit = true;

    protected Validator $validator;

    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (! $value && $this->required) {
            $fail(Lang::get('validation.required'));

            return;
        }

        foreach ($this->groupRules as $rule) {
            if (! $rule->passes($attribute, $value)) {
                $fail($rule->message());
            }
        }

        if (is_null($value)) {
            return;
        }

        foreach ($value as $mediaItem) {
            foreach ($this->itemRules as $rule) {
                $this->validateRule($rule, $attribute, $mediaItem, $fail);
            }
        }
    }

    public function setValidator(Validator $validator): static
    {
        $this->validator = $validator;

        return $this;
    }

    public function minItems(int $numberOfItems): self
    {
        if ($numberOfItems > 0) {
            $this->required = true;
        }

        $this->groupRules[] = new MinItemsRule($numberOfItems);

        return $this;
    }

    public function maxItems(int $numberOfItems): self
    {
        $this->groupRules[] = new MaxItemsRule($numberOfItems);

        return $this;
    }

    public function maxTotalSizeInKb(int $maxTotalSizeInKb): self
    {
        $this->groupRules[] = new MaxTotalSizeInKbRule($maxTotalSizeInKb);

        return $this;
    }

    public function minTotalSizeInKb(int $minTotalSizeInKb): self
    {
        $this->groupRules[] = new MinTotalSizeInKbRule($minTotalSizeInKb);

        return $this;
    }

    public function maxItemSizeInKb(int $maxSizeInKb): self
    {
        $this->itemRules[] = new MaxItemSizeInKbRule($maxSizeInKb);

        return $this;
    }

    public function minSizeInKb(int $minSizeInKb): self
    {
        $this->itemRules[] = new MinItemSizeInKbRule($minSizeInKb);

        return $this;
    }

    /** @var string|array */
    public function mime($mimes): self
    {
        $this->itemRules[] = new MimeTypeRule($mimes);

        return $this;
    }

    /**
     * @var string|array
     */
    public function extension($extensions): self
    {
        $this->itemRules[] = new ExtensionRule($extensions);

        return $this;
    }

    public function itemName($rules): self
    {
        return $this->attribute('name', $rules);
    }

    public function attribute(string $attribute, array|string $rules): self
    {
        $this->itemRules[] = new AttributeRule($attribute, $rules);

        return $this;
    }

    public function customProperty(string $customPropertyName, $rules): self
    {
        $customPropertyName = "custom_properties.{$customPropertyName}";

        $this->itemRules[] = new AttributeRule($customPropertyName, $rules);

        return $this;
    }

    public function dimensions(int $width, int $height): self
    {
        $this->itemRules[] = new DimensionsRule($width, $height);

        return $this;
    }

    public function width(int $width): self
    {
        $this->itemRules[] = new DimensionsRule($width, 0);

        return $this;
    }

    public function height(int $height): self
    {
        $this->itemRules[] = new DimensionsRule(0, $height);

        return $this;
    }

    public function widthBetween(int $minWidth, int $maxWidth): self
    {
        $this->itemRules[] = new WidthBetweenRule($minWidth, $maxWidth);

        return $this;
    }

    public function heightBetween(int $minHeight, int $maxHeight): self
    {
        $this->itemRules[] = new HeightBetweenRule($minHeight, $maxHeight);

        return $this;
    }

    public function customItemRules($rules)
    {
        $this->itemRules = array_merge($this->itemRules, Arr::wrap($rules));

        return $this;
    }

    public function customGroupRules($rules)
    {
        $this->groupRules = array_merge($this->groupRules, Arr::wrap($rules));

        return $this;
    }

    protected function validateRule(mixed $rule, string $attribute, mixed $mediaItem, Closure $fail): void
    {
        if ($rule instanceof AttributeRule) {
            $this->validateAttributeRule($rule, $attribute, $mediaItem, $fail);

        } elseif ($rule instanceof MediaItemRule) {
            $this->validateMediaItemRule($rule, $attribute, $mediaItem, $fail);

        } else {
            throw new \Exception('Unexpected validation rule: '.get_class($rule));
        }
    }

    protected function validateAttributeRule(AttributeRule $rule, string $attribute, mixed $mediaItem, Closure $fail): void
    {
        if ($rule->passes($attribute, Arr::get($mediaItem, $rule->attribute))) {
            return;
        }

        $this->validator->errors()->add('media.'.$mediaItem['uuid'].'.'.$rule->attribute, $rule->message());

        $fail($rule->message());
    }

    protected function validateMediaItemRule(MediaItemRule $rule, string $attribute, mixed $mediaItem, Closure $fail): void
    {
        if ($rule->passes($attribute, $mediaItem)) {
            return;
        }

        $this->validator->errors()->add('media.'.$mediaItem['uuid'], $rule->message());

        $fail($rule->message());
    }
}
