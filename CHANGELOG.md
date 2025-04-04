# Changelog

This file tracks versions in the [Composer releases](https://github.com/spatie/laravel-medialibrary-pro/releases), and will mostly include notable changes to the Blade components and backend of `laravel-media-library-pro`.

For the changelog for releases on the GitHub Package Registry, look in [CHANGELOG-JS.md](https://github.com/spatie/laravel-medialibrary-pro/blob/master/CHANGELOG-JS.md)

## 6.2.2 - 2025-03-10

### What's Changed

* Fix issue with validation breaking for nullable fields by @timvandijck in https://github.com/spatie/laravel-medialibrary-pro/pull/644
* Tailwind v4 compatability in `src/styles.css` by @andelwebsolutions in https://github.com/spatie/laravel-medialibrary-pro/pull/642

### New Contributors

* @andelwebsolutions made their first contribution in https://github.com/spatie/laravel-medialibrary-pro/pull/642

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/6.2.1...6.2.2

## 6.2.1 - 2025-02-26

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/6.2.0...6.2.1

## 6.2.0 - 2025-02-21

### What's Changed

* Update ValidatesMedia trait to work outside a Request object by @timvandijck in https://github.com/spatie/laravel-medialibrary-pro/pull/637
* Laravel 12 support by @timvandijck in https://github.com/spatie/laravel-medialibrary-pro/pull/638

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/v1.5.4...6.2.0

## 6.1.4 - 2025-01-24

### What's Changed

* Fix sorting in the React collection component. by @timvandijck in https://github.com/spatie/laravel-medialibrary-pro/pull/635
* Fix showing progress on drag and drop (Livewire/Blade). by @timvandijck in https://github.com/spatie/laravel-medialibrary-pro/pull/636

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/6.1.3...6.1.4

## 6.1.2 - 2024-12-17

### What's Changed

* Send CSRF and credentials by default in Vue components by @timvandijck in https://github.com/spatie/laravel-medialibrary-pro/pull/626

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/6.1.1...6.1.2

## 6.1.1 - 2024-12-09

### What's Changed

* Add CSRF tokens to Axios requests by @timvandijck in https://github.com/spatie/laravel-medialibrary-pro/pull/623

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/v1.5.1...6.1.1

## 6.1.0 - 2024-11-29

### What's Changed

* Update UPGRADING.md by @mbardelmeijer in https://github.com/spatie/laravel-medialibrary-pro/pull/602
* Check if Livewire is bound to the container by @qbixx in https://github.com/spatie/laravel-medialibrary-pro/pull/604
* Add SRI to sortable js script by @lsbuilder in https://github.com/spatie/laravel-medialibrary-pro/pull/605
* Fix tests on cli by @timvandijck in https://github.com/spatie/laravel-medialibrary-pro/pull/610
* Fix display of Livewire validation by @timvandijck in https://github.com/spatie/laravel-medialibrary-pro/pull/611
* Update Axios to 1.7 by @timvandijck in https://github.com/spatie/laravel-medialibrary-pro/pull/613
* Fix an issue with the name field not updating when replacing media. by @timvandijck in https://github.com/spatie/laravel-medialibrary-pro/pull/614
* Add PHP 8.4 to the testing matrix by @timvandijck in https://github.com/spatie/laravel-medialibrary-pro/pull/616

### New Contributors

* @qbixx made their first contribution in https://github.com/spatie/laravel-medialibrary-pro/pull/604

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/v1.4.0...6.1.0

## 6.0.2 - 2024-08-01

[Fix tests that fail in combination with the latest version of Media Library.](https://github.com/spatie/laravel-medialibrary-pro/commit/7a1f1d72d4b158c2bc0b8c51e7e2b00c376bbfd4)

[Load CSS route even without using the routes macro](https://github.com/spatie/laravel-medialibrary-pro/commit/da7a170d207b6622839004529b5c342fcb35013f)

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/6.0.1...6.0.2

## 6.0.1 - 2024-07-25

Fixes issue where upload errors were not cleared when uploading a new valid file.

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/6.0.0...6.0.1

## 6.0.0 - 2024-07-22

### What's Changed

* The `@mediaLibraryStyles` now also includes default CSS. You can use `@mediaLibraryIcons` if you only need the icons.
* Slovak and Czech translations by @fero8 in https://github.com/spatie/laravel-medialibrary-pro/pull/586

### New Contributors

* @fero8 made their first contribution in https://github.com/spatie/laravel-medialibrary-pro/pull/586

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/5.1.2...6.0.0

## 5.1.2 - 2024-05-16

- Fixes an issue when using the Livewire component after initial loading of the page

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/5.1.1...5.1.2

## 5.1.1 - 2024-03-18

Fix a state issue on the React collection component.

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/5.1.0...5.1.1

## 5.1.0 - 2024-03-13

- support L11

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/5.0.1...5.1.0

## 5.0.1 - 2024-02-20

### What's Changed

* Download URL tries to search uuid with null by @eqxDev in https://github.com/spatie/laravel-medialibrary-pro/pull/583

### New Contributors

* @eqxDev made their first contribution in https://github.com/spatie/laravel-medialibrary-pro/pull/583

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/5.0.0...5.0.1

## 5.0.0

- Fix issue where old files were not cleaned up properly
- Removed Dragula in favor of SortableJS
- Fix issue with the progress bar in the Livewire component
- Dropping support for Vue 2

## 4.0.0 - 2023-12-18

- added support for Media Library v11

## 3.0.3 - 2023-12-18

### What's Changed

* Fix implementation of multiple rules in Livewire Component by @lsbuilder in https://github.com/spatie/laravel-medialibrary-pro/pull/557

### New Contributors

* @lsbuilder made their first contribution in https://github.com/spatie/laravel-medialibrary-pro/pull/557

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/3.0.2...3.0.3

> > > > > > > main

## 3.0.1 - 2023-10-02

- Fix an issue with Livewire expecting rules to be an array

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/3.0.0...3.0.1

## 3.0.0 - 2023-09-20

### What's Changed

- Livewire v3 by @riasvdv in https://github.com/spatie/laravel-medialibrary-pro/pull/537

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/v1.2.5...3.0.0

## 2.7.3 - 2023-05-19

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/2.7.2...2.7.3

### What's Changed

- Move styles dependencies to devDependencies, projects should depend on their own postcss installation

## 2.7.2 - 2023-04-12

### What's Changed

- Fixed a typo in ES language by @robertosanval in https://github.com/spatie/laravel-medialibrary-pro/pull/520

### New Contributors

- @robertosanval made their first contribution in https://github.com/spatie/laravel-medialibrary-pro/pull/520

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/2.7.1...2.7.2

## 2.7.1 - 2023-03-27

### What's Changed

- Ensure the TemporaryUpload::$disk attribute is respected by @JapSeyz in https://github.com/spatie/laravel-medialibrary-pro/pull/518

### New Contributors

- @JapSeyz made their first contribution in https://github.com/spatie/laravel-medialibrary-pro/pull/518

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/2.7.0...2.7.1

## 2.7.0 - 2023-03-09

### What's Changed

- allow custom accept attr in blade and livewire by @abenerd in https://github.com/spatie/laravel-medialibrary-pro/pull/490

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/2.6.4...2.7.0

## 2.6.4 - 2023-02-15

- support Laravel 10

## 2.6.3 - 2023-01-09

### What's Changed

- Fixes `ViewMediaItem` for newly uploaded items by @mbardelmeijer in https://github.com/spatie/laravel-medialibrary-pro/pull/502

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/2.6.2...2.6.3

## 2.6.2 - 2023-01-09

### What's Changed

- Add missing `Carbon` import in `createdAt` method by @mbardelmeijer in https://github.com/spatie/laravel-medialibrary-pro/pull/501

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/2.6.1...2.6.2

## 2.6.1 - 2022-12-12

### What's Changed

- make temporary upload model prunable by @abenerd in https://github.com/spatie/laravel-medialibrary-pro/pull/496

### New Contributors

- @abenerd made their first contribution in https://github.com/spatie/laravel-medialibrary-pro/pull/496

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/2.6.0...2.6.1

## 2.6.0 - 2022-12-05

### What's Changed

- Update README.md by @drifteaur in https://github.com/spatie/laravel-medialibrary-pro/pull/480
- Add `createdAt` to the `ViewMediaItem` DTO by @mbardelmeijer in https://github.com/spatie/laravel-medialibrary-pro/pull/494

### New Contributors

- @drifteaur made their first contribution in https://github.com/spatie/laravel-medialibrary-pro/pull/480

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/2.5.6...2.6.0

## 2.5.6 - 2022-09-20

### What's Changed

- Fix temporary uploads when using custom model

## 2.5.5 - 2022-09-05

### What's Changed

- Support React 18

## 2.5.4 - 2022-07-29

### What's Changed

- Hide label name if file name is not editable by @ciungulete in https://github.com/spatie/laravel-medialibrary-pro/pull/461

### New Contributors

- @ciungulete made their first contribution in https://github.com/spatie/laravel-medialibrary-pro/pull/461

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/2.5.2...2.5.4

## 2.5.2 - 2022-07-07

### What's Changed

- Anonymous migrations by @sebastiandedeyne in https://github.com/spatie/laravel-medialibrary-pro/pull/452
- Don't take case into account when validation extensions by @sebastiandedeyne in https://github.com/spatie/laravel-medialibrary-pro/pull/453

### New Contributors

- @sebastiandedeyne made their first contribution in https://github.com/spatie/laravel-medialibrary-pro/pull/452

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/2.5.1...2.5.2

## 2.5.1 - 2022-05-25

## What's Changed

- Add customGroupRules() by @ziming in https://github.com/spatie/laravel-medialibrary-pro/pull/438

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/2.5.0...2.5.1

## 2.5.0 - 2022-05-09

## What's Changed

- Refactor to make multiple optional, but default to true by @levipeto in https://github.com/spatie/laravel-medialibrary-pro/pull/431

## New Contributors

- @levipeto made their first contribution in https://github.com/spatie/laravel-medialibrary-pro/pull/431

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/2.4.0...2.5.0

## 1.18.0 - 2022-04-29

## What's Changed

### Backported PRs:

- Use correct `TemporaryUploadPathGenerator` for temporary Livewire uploads by @AlexVanderbist in https://github.com/spatie/laravel-medialibrary-pro/pull/426
- Add support for all remote disks for Livewire uploads by @AlexVanderbist in https://github.com/spatie/laravel-medialibrary-pro/pull/427

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/1.17.13...1.18.0

## 2.4.0 - 2022-04-29

## What's Changed

- Use correct `TemporaryUploadPathGenerator` for temporary Livewire uploads by @AlexVanderbist in https://github.com/spatie/laravel-medialibrary-pro/pull/426
- Add support for all remote disks for Livewire uploads by @AlexVanderbist in https://github.com/spatie/laravel-medialibrary-pro/pull/427

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/2.3.0...2.4.0

## 2.3.0 - 2022-04-04

## What's Changed

- missing translation for go back link after error by @groenewege in https://github.com/spatie/laravel-medialibrary-pro/pull/370
- Issue 394: missing fields view by @SahinU88 in https://github.com/spatie/laravel-medialibrary-pro/pull/411

## New Contributors

- @SahinU88 made their first contribution in https://github.com/spatie/laravel-medialibrary-pro/pull/411

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/2.2.0...2.3.0

## 2.2.0 - 2022-03-30

- moved factories to src

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/2.1.12...2.2.0

## 2.1.12 - 2022-03-22

- make it easy to override responseFields in the upload controller

## 1.17.13 - 2022-03-22

- do not show original URL

## 1.17.12 - 2022-03-21

- improve security

## 1.17.11 - 2022-03-21

- backport security improvements from v2

## 2.1.11 - 2022-03-21

- remove stray ray call

## 2.1.10 - 2022-03-21

- security improvements

## 2.1.9 - 2022-03-21

- ensure that paths to temporary uploads are not guessable

## 2.1.8 - 2022-03-18

- fixed config variable name

## 2.1.7 - 2022-03-18

This release contains important security updates.

- improved documentation regarding security
- improved validation of uploads
- temporary uploads will use hard to guess URLs
- temporary uploads will be rate limiting by default

## 2.1.6 - 2022-03-02

## What's Changed

- Convert template literal class to vue style class by @dev-tukan in https://github.com/spatie/laravel-medialibrary-pro/pull/391

## New Contributors

- @dev-tukan made their first contribution in https://github.com/spatie/laravel-medialibrary-pro/pull/391

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/2.1.5...2.1.6

## 2.1.5 - 2022-02-27

## What's Changed

- add option to disable loading of dragula via cdn by @lukasleitsch in https://github.com/spatie/laravel-medialibrary-pro/pull/349

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/2.1.4...2.1.5

## 2.1.4 - 2022-02-23

## What's Changed

- Missing Arr import fix by @ziming in https://github.com/spatie/laravel-medialibrary-pro/pull/388

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/2.1.3...2.1.4

## 1.17.10 - 2022-02-23

## What's Changed

- Missing Arr import fix in v1 by @ziming in https://github.com/spatie/laravel-medialibrary-pro/pull/387

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/1.17.9...1.17.10

## 1.17.9 - 2022-02-23

## What's Changed

- customItemRules() method for v1 (the version I'm at) by @ziming in https://github.com/spatie/laravel-medialibrary-pro/pull/386

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/1.17.8...1.17.9

## 2.1.3 - 2022-02-23

## What's Changed

- add customItemRules method by @ziming in https://github.com/spatie/laravel-medialibrary-pro/pull/385

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/2.1.2...2.1.3

## 1.17.8 - 2022-02-22

## What's Changed

- Fix uuid unique error when converting temp upload media record to real media record in v1 by @ziming in https://github.com/spatie/laravel-medialibrary-pro/pull/382

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/1.17.7...1.17.8

## 1.2.5 - 2022-02-22

## What's Changed

- Fix uuid unique error when converting temp upload media record to real media record in v1 by @ziming in https://github.com/spatie/laravel-medialibrary-pro/pull/382

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/1.17.7...1.2.5

## 2.1.2 - 2022-02-21

## What's Changed

- Fix uuid Integrity constraint violation when moving from temp upload to actual media by @ziming in https://github.com/spatie/laravel-medialibrary-pro/pull/380

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/2.1.1...2.1.2

## 2.1.1 - 2022-02-21

## What's Changed

- Switch id to bigIncrements by @ziming in https://github.com/spatie/laravel-medialibrary-pro/pull/379

## New Contributors

- @ziming made their first contribution in https://github.com/spatie/laravel-medialibrary-pro/pull/379

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/2.1.0...2.1.1

## 1.17.7 - 2022-02-02

## What's Changed

- missing translation for go back link after error by @groenewege in https://github.com/spatie/laravel-medialibrary-pro/pull/371

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/1.17.6...1.17.7

## 1.17.6 - 2022-02-01

## What's Changed

- Add file size validation rule to `UploadRequest` by @pikant in https://github.com/spatie/laravel-medialibrary-pro/pull/356
- french translations V1 by @groenewege in https://github.com/spatie/laravel-medialibrary-pro/pull/369

## New Contributors

- @pikant made their first contribution in https://github.com/spatie/laravel-medialibrary-pro/pull/356

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/1.17.5...1.17.6

## 1.2.4 - 2022-02-01

## What's Changed

- Add file size validation rule to `UploadRequest` by @pikant in https://github.com/spatie/laravel-medialibrary-pro/pull/356
- french translations V1 by @groenewege in https://github.com/spatie/laravel-medialibrary-pro/pull/369

## New Contributors

- @pikant made their first contribution in https://github.com/spatie/laravel-medialibrary-pro/pull/356

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/1.17.5...1.2.4

## 2.1.0 - 2022-02-01

## What's Changed

- french translations by @groenewege in https://github.com/spatie/laravel-medialibrary-pro/pull/368

## New Contributors

- @groenewege made their first contribution in https://github.com/spatie/laravel-medialibrary-pro/pull/368

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/2.0.0...2.0.1

## 2.0.0 - 2022-01-28

This release adds support for Laravel 9

## What's Changed

- Add file size validation rule to `UploadRequest` by @pikant in https://github.com/spatie/laravel-medialibrary-pro/pull/356
- PHPUnit to Pest Converter by @freekmurze in https://github.com/spatie/laravel-medialibrary-pro/pull/364
- v2 by @freekmurze in https://github.com/spatie/laravel-medialibrary-pro/pull/365

## New Contributors

- @pikant made their first contribution in https://github.com/spatie/laravel-medialibrary-pro/pull/356

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/1.17.5...2.0.0

## 1.17.5 - 2021-12-14

## What's Changed

- Fix typo in NL translation by @mbardelmeijer in https://github.com/spatie/laravel-medialibrary-pro/pull/354

**Full Changelog**: https://github.com/spatie/laravel-medialibrary-pro/compare/1.17.4...1.17.5

## 1.17.4 - 2021-10-21

- scope livewire media component events to prevent unnecessary requests (#326)

## 1.17.3 - 2021-10-20

- Pass Axios instance in `beforeUpload`

## 1.17.2 - 2021-10-14

- Allow adding custom headers to file upload

## 1.17.1 - 2021-10-11

- bugfix: show count when deleting temporary uploads (#324)

# 1.17.0 - 2021-08-22

- add custom header support to pending media item (#300)

## 1.16.0 - 2021-08-16

- Add Hungarian translation (#297)

## 1.15.2 - 2021-08-05

- set TemporaryUpload Media UUID before uploading (#294)

## 1.15.1 - 2021-07-09

- use the configured media class in ViewMediaItem (#281)

## 1.15.0 - 2021-06-22

- add "width between" and "height between" rules (#276)

## 1.14.0 - 2021-06-17

- Make React subscribers reactive

## 1.13.10 - 2021-15-21

- consider database connection of media model in unique validation (#262)

## 1.13.8 - 2021-05-10

- fix overriding views

## 1.13.7 - 2021-05-06

- fix compatibility with PHP 7

## 1.13.6 - 2021-05-06

- enhanced german language validation file (#254)

## 1.13.5 - 2021-05-06

- handle file name in request item

## 1.13.4 2021-04-20

- add generated conversion default value for Livewire S3 uploads (#239)

## 1.13.1 - 2021-04-14

- Add missing translation for "Download" in JS components

## 1.13.0 - 2021-04-12

- add item rule for validating image dimensions (width, height, or both) (#232)

## 1.12.25 - 2021-04-09

- add Turkish translations (#226)

## 1.12.24 - 2021-04-08

- validation data problem (#224)

## 1.12.23 - 2021-04-08

- attempt at fixing validation problems (#223)

## 1.12.22 - 2021-03-22

- fix validation messages for max_items and min_items (#203)

## 1.12.21 - 2021-03-22

- (React/Vue) Add `fileTypeHelpText` prop to override accepted filetypes helper

## 1.12.20 - 2021-03-18

- fix for draggable rows in Vue 3 (#199)

## 1.12.19 - 2021-03-10

- fix for validation rules when minimum is set to zero (#192)

## 1.12.18 - 2021-02-28

- add translations

## 1.12.17 - 2021-02-24

- update js dependencies

## 1.12.16 - 2021-02-07

- add key tracking to uploader component (#172)

## 1.12.15 - 2021-02-03

- fix translation warnings in vue collection component

## 1.12.14 - 2020-01-31

- revert changes in 1.12.13

## 1.12.13 - 2020-01-26

- handle edge-case when uuid not set (#165)

## 1.12.12 - 2020-01-25

- properly add `withCredentials` prop

## 1.12.11 - 2020-01-25

- add `withCredentials` prop

## 1.12.10 - 2020-01-25

- add translation for `name`

## 1.12.9 - 2020-01-13

- remove stray console.log

## 1.12.8 - 2020-01-13

- fix icons in Vue 2

## 1.12.7 - 2020-01-09

- fix for Persisting Validation Messages (#150)

## 1.12.6 - 2020-12-29

- Vue2: fix icons

## 1.12.5 - 2020-12-28

- improve support for `generate_thumbnails_for_temporary_uploads` (fixes #125)

## 1.12.4 - 2020-12-23

- React: Properly use the initial value of `validationErrors`

## 1.12.3 - 2020-12-23

- use the `Media` model supplied by the config for updates

## 1.12.2 - 2020-12-15

- use the `Media` model supplied by the config for updates (#128)

## 1.12.1 - 2020-12-04

- use of Livewire upload disk storage (#118)

## 1.12.0 - 2020-12-03

- add PHP 8 support

## 1.11.2 - 2020-12-01

- add a :key to the Livewire attachment component (fixes #112)

## 1.11.1 - 2020-11-30

- use TemporaryUpload model from config (#111)

## 1.11.0 - 2020-11-30

- add support `generate_thumbnails_for_temporary_uploads`

## 1.10.1 - 2020-11-30

- fix JSON translations

## 1.10.0 - 2020-11-28

- add Russian translation

## 1.9.1 - 2020-11-28

- improve session affinity disablement

## 1.9.0 - 2020-11-28

- add German / Romanian translations
- fix `enable_temporary_uploads_session_affinity` config value

## 1.8.0 - 2020-11-27

- add Italian translation (#96)

## 1.7.1 - 2020-11-27

- temporaryUpload now uses the media model from config (#95)

## 1.7.0 - 2020-11-27

- add support for RTL

## 1.6.0 - 2020-11-26

- add support for `enable_temporary_uploads_session_affinity` config value.

## 1.5.2 - 2020-11-26

- enable `withCredentials` for all Axios calls

## 1.5.1 - 2020-11-25

- add dutch translations

## 1.5.0 - 2020-11-25

- add an `uploadDomain` prop to allow uploading files to a separate (sub)domain (JS components)

## 1.4.1 - 2020-11-25

- fix custom properties validation for livewire components

## 1.4.0 - 2020-11-25

- allow debounce value to be passed in `livewireCustomPropertyAttributes`

## 1.3.7 - 2020-11-23

- fix Vue attachment import bug

## 1.3.6 - 2020-11-22

- fix custom file names

## 1.3.5 - 2020-11-22

- fix custom properties (#75)

## 1.3.4 - 2020-11-21

- fix Vue 3 emits option (#68)
- fix Vue 2 dragula warning (#56)

## 1.3.3 - 2020-11-20

- revert changes in 1.3.1

## 1.3.2 - 2020-11-20

- maximize Livewire/Alpine compatibility (#69)

## 1.3.1 - 2020-11-20

- custom properties key fix (#66)

## 1.3.0 - 2020-11-19

- add support for usage inside of Livewire components

## 1.2.0 - 2020-11-19

- add `usingName`

## 1.1.0 - 2020-11-18

- add `usingFileName`

## 1.0.22 - 2020-11-18

- fix migration name in service provider (#59)

## 1.0.21 - 2020-11-18

- use `grid-template-areas` on attachment component

## 1.0.20 - 2020-11-17

- use `all:unset` to reset CSS on component level
- use `grid-template-areas` on component
- move SVG symbols outside component for React and Vue

## 1.0.19 - 2020-11-16

- add default exports to React UI components for Next.js dynamic imports
- add CommonJS build for React components
- fix adding same image twice (JS components)
- fix empty helper text when no validation rules are passed (JS components)

## 1.0.18 - 2020-11-16

- allow setting translations globally (JS components)

## 1.0.17 - 2020-11-16

- fix emits option in Vue 3 renderless component

## 1.0.16 - 2020-11-13

- fix translations in Vue attachment component

## 1.0.15 - 2020-11-13

- correct tag name

## 1.0.14 - 2020-11-13

- add publishable tags

## 1.0.13 - 2020-11-13

- update translations in Vue/React components

## 1.0.12 - 2020-11-13

- translate uploader strings

## 1.0.11 - 2020-11-13

- fix small issues with CSS

## 1.0.10 - 2020-11-13

- add support for translations in the frontend components

## 1.0.9 - 2020-11-13

- add support for translations in the Blade components

## 1.0.7 - 2020-11-12

- fix size in post s3 controller

## 1.0.7 - 2020-11-12

- fix size in post s3 endpoint

## 0.9.5 - 2020-11-04

- check if fileTypeRules is not empty (#35)

## 0.9.0 - 2020-10-27

- beta release
