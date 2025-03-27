<?php

namespace Spatie\MediaLibraryPro\Rules\Concerns;

use Spatie\MediaLibraryPro\Rules\UploadedMediaRules;

trait ValidatesMedia
{
    protected function validateSingleMedia(): UploadedMediaRules
    {
        return (new UploadedMediaRules)->maxItems(1);
    }

    protected function validateMultipleMedia(): UploadedMediaRules
    {
        return new UploadedMediaRules;
    }
}
