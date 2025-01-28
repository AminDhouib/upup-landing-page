---
sidebar_position: 5
---

# Optional Props

These optional props are not required for the UpupUploader component to work.

| Prop | Example | Type | Status | Default Value |
| ---  | ------- | ---- | ------ | ------------- |
| [accept](#accept) | `accept="image/png"` | string | optional | `*` |
| [dark](#dark) | `dark={true}` | boolean | optional | `false` |
| [driveConfigs](#driveconfigs) | `driveConfigs={{ oneDrive: { onedrive_client_id: process.env.NEXT_PUBLIC_ONEDRIVE_CLIENT_ID! } }}` | object | optional | - |
| [limit](#limit) | `limit={5}` | number | optional | `1` |
| [maxFileSize](#maxfilesize) | `maxFileSize={{ size: 20, unit: "MB" }}` | object | optional | `{ size: 10, unit: "MB" }` |
| [mini](#mini) | `mini={true}` | boolean | optional | `false` |
| [uploadAdapters](#uploadadapters) | `uploadAdapters={[UploadAdapter.LINK]}` | UploadAdapter[] | optional | `[UploadAdapter.INTERNAL, UploadAdapter.LINK]` |

## `accept`

Specifies which file types the uploader will accept. Uses standard MIME type format. Defaults to accepting all files.

**Example patterns:**

- `image/*` - All images
- `application/pdf` - PDFs only
- `image/png, application/pdf` - PNGs and PDFs

## `dark`

Enables dark mode styling for the uploader component. Uses a dark background (#232323) and light text when enabled.

## `driveConfigs`

Configuration object for cloud drive integrations. Required if using Google Drive or OneDrive [upload adapters](#uploadadapters).

**Example configuration:**

```javascript
driveConfigs={{
  googleDrive: {
    google_api_key: process.env.GOOGLE_API_KEY,
    google_app_id: process.env.GOOGLE_APP_ID,
    google_client_id: process.env.GOOGLE_CLIENT_ID
  },
  oneDrive: {
    onedrive_client_id: process.env.ONEDRIVE_CLIENT_ID,
  }
}}
```

## `limit`

Maximum number of files allowed for upload. When using [`mini`](#mini) mode, this is automatically set to 1.

:::note
Files beyond the limit will trigger [`onWarn`](/docs/api-reference/upupuploader/event-handlers.md#onwarn) callback with a message:"Allowed limit has been surpassed!"
:::

## `maxFileSize`

Maximum allowed file size configuration. Files exceeding this size will be rejected and trigger [`onError`](/docs/api-reference/upupuploader/event-handlers.md#onerror).

**Supported units:** `"B"`, `"KB"`, `"MB"`, `"GB"`

## `mini`

Enables compact mode for the uploader component. When enabled:

- Limits file selection to 1 file (overrides [`limit`](#limit) prop)
- Uses smaller container dimensions
- Simplifies UI elements

## `uploadAdapters`

Array of enabled upload methods.

:::info
When using TypeScript, you must use the `UploadAdapter` enum value exported from the package to avoid type errors:

**Example:**

```javascript
import { UpupUploader, UploadAdapter } from "@bassem97/upup";

// Correct usage with enum
<UpupUploader
  uploadAdapters={[UploadAdapter.INTERNAL, UploadAdapter.GOOGLE_DRIVE]}
/>

// ❌ Incorrect string usage
<UpupUploader uploadAdapters={["INTERNAL", "GOOGLE_DRIVE"]} />
```

The component will validate against these enum values and throw an error if invalid values are passed.
:::

:::note
The order of the upload adapters in the array determines the display order in the UI
:::
