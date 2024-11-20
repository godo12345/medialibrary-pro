---
title: Available props
weight: 4
---

These props are available on both the `attachment` and the `collection` component.

| prop name                     | Default value                                         | Description                                                                                                                                                                       |
| ----------------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name                          |                                                       |                                                                                                                                                                                   |
| initial-value                 | `[]`                                                  |                                                                                                                                                                                   |
| route-prefix                  | `"media-library-pro"`                                 |                                                                                                                                                                                   |
| upload-domain                 |                                                       | Use this if you're uploading your files to a separate (sub)domain, e.g. `files.mydomain.com` (leave out the trailing slash)                                                       |
| validation-rules              |                                                       | Refer to the ["validation rules"](#validation-rules) section                                                                                                                      |
| validation-errors             |                                                       | The standard Laravel validation error object                                                                                                                                      |
| multiple                      | `false` (always `true` in the `collection` component) | Only exists on the `attachment` components                                                                                                                                        |
| max-items                     | `1` when `multiple` = `false`, otherwise `undefined   |                                                                                                                                                                                   |
| vapor                         |                                                       | Set to true if you will deploy your application to Vapor. This enables uploading of the files to S3.                                                                              |
| vapor-signed-storage-url      | `"vapor/signed-storage-url"`                          |                                                                                                                                                                                   |
| max-size-for-preview-in-bytes | `5242880` (5 MB)                                      | When an image is added, the component will try to generate a local preview for it. This is done on the main thread, and can freeze the component and/or page for very large files |
| sortable                      | `true`                                                | Only exists on the `collection` components. Allows the user to drag images to change their order, this will be reflected by a zero-based `order` attribute in the value           |
| translations                  |                                                       | Refer to the ["Translations"](#translations) section                                                                                                                              |
| file-type-help-text           |                                                       | Override the automatically generated helptext from `validation-rules.accept`                                                                                                       |
| ref                           |                                                       | Used to set a reference to the MediaLibrary instance, so you can change the internal state of the component.                                                                      |
| before-upload                 |                                                       | A method that is run right before a temporary upload is started. You can throw an `Error` from this function with a custom validation message                                     |
| after-upload                  |                                                       | A method that is run right after a temporary upload has completed, `{ success: true, uuid }`                                                                                      |
| @changed                      |                                                       |                                                                                                                                                                                   |
| @is-ready-to-submit-change    |                                                       | Refer to [Checking the upload state](#checking-the-upload-state) section                                                                                                          |