# Standard Notes Theme Template

This is a template repo for building a Standard Notes theme.

## Getting Started

Click on the `Use this template` button to create a new repo based on this template.

Then clone your new repo, install dependencies, and start the dev server:

```
# Install dependencies
pnpm install

# Start Dev Server
pnpm run dev
```

Use `http://localhost:8080/local.json` to install your theme extension in Standard Notes for testing. After you make a change the save the file, simply refresh Standard Notes to see the changes.

Now start modifying `src/theme.css` to create your theme!

## Extension JSON

When users install your extension, they will be using the `ext.json` file, which contains information about your extension. You will want to edit this file, changing the urls, identifier, name, description, and dock_icon.background_color:

```json
{
  "identifier": "dev.randombits.theme-template",
  "name": "Theme Template",
  "content_type": "SN|Theme",
  "area": "themes",
  "description": "Theme template for Standard Notes",
  "version": "$VERSION$",
  "url": "https://nienow.github.io/sn-theme-template/theme.css",
  "download_url": "https://nienow.github.io/sn-theme-template/latest.zip",
  "latest_url": "https://nienow.github.io/sn-theme-template/ext.json",
  "dock_icon": {
    "type": "circle",
    "background_color": "#995555"
  }
}
```

The version variable (`$VERSION$`) is written during build, and is copied from the version in your `package.json` file.

The build automatically creates a `latest.zip` distribution that is used by the desktop application.

The `dock_icon.background_color` variable controls the color of the circle icon in the theme selection menu.

## Github Workflow

There is a github workflow setup in `.github/workflows/node.js.yml`, which will automatically build and deploy your extension to github pages.

If you use this workflow, make sure you have your Workflow Permissions set to “Read and write permissions” (under Settings -> Actions -> General).