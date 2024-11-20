---
title: Upgrading
weight: 10
---

## Upgrading

This file contains instructions on how to upgrade to another major version of the package.

## From v4/v5 to v6
- The directive `@mediaLibraryStyles` now also includes the default CSS. If you only want to include the CSS in an other way you should use `@mediaLibraryIcons` instead.

## From v3 to v4

The main change in v4 is that we upgraded the required version of Media Library from v10 to v11. Under the hood spatie/image v3 is used instead of v2.

In the latest version of spatie/image some of the manipulations methods have been renamed. If you're using any of these methods in your code, you'll need to update them. Take a look at the [defining conversions page](/docs/laravel-medialibrary/v11/converting-images/defining-conversions) to learn more.

## From v2 to v3

The main change in v3 is that we now use Livewire 3.0 instead of Livewire 2.0. If you're using the JavaScript component, then there are no breaking changes.

### Update the Livewire version requirement to v3:

```
-        "livewire/livewire": "^2.0",
+        "livewire/livewire": "^v3.0",
```

### Add the Blade directives to your views

```blade
- <livewire:styles />
- <livewire:scripts />
- <script src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js" defer></script>
+ @mediaLibraryStyles

<!-- Before </body> -->
+ @mediaLibraryScripts
```

### Update usage of the `WithMedia` trait:

```php
- use Spatie\MediaLibraryPro\Http\Livewire\Concerns\WithMedia;
+ use Spatie\MediaLibraryPro\Livewire\Concerns\WithMedia;
```

### `clearMedia` has been removed

The `->clearMedia()` method has been removed from the trait. Since you can now use model binding you can set your collection back to an empty array if you need to clear your media.

```php
public function submit()
{
    // submit the form

-    $this->clearMedia();
+    $this->media = []; 
}
```

### Make sure you're setting your media properties to a default empty array

```php
-    public $media;
+    public $media = [];
```

### The `$mediaComponentNames` property has been removed in favour of Livewire model binding.

```php
- public $mediaComponentNames = ['images', 'downloads'];

public $images = [];

public $downloads = [];
```

### Use the Livewire components directly instead of the Blade components

We now have 1 Livewire component that can handle both Attachment and Collection use cases, use this Livewire component directly instead of using the provided Blade component.

If you're not using Livewire yourself, you can still use the Blade components like before.

#### Attachment

```blade
- <x-media-library-attachment name="media" rules="mimes:png,jpeg,pdf"/>
 + <livewire:media-library wire:model="media" rules="mimes:png,jpeg,pdf" />
```

#### Collection

```blade
- <x-media-library-collection name="images" :model="$formSubmission" />
+ <livewire:media-library collection="images" :model="$formSubmission" wire:model="images" />
```

## From v1 to v2

No changes to the public API were made. Support for PHP 7 and Laravel 8 was dropped.

You should be able to upgrade without making any changes.
