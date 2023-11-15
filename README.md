[![Netlify Status](https://api.netlify.com/api/v1/badges/aaf957fe-03db-4fa6-a3d5-9235c3ecc95a/deploy-status)](https://app.netlify.com/sites/miro-team-topologies/deploys)

# Hexi Kit plugin for Miro

This plugin provides you ready to use shapes to build

Based on some of the ideas in the book Team Topologies by Matthew Skelton [@matthewskelton](https://github.com/matthewskelton) and Manuel Pais [@manupaisable](https://github.com/manupaisable).
Trying to align with the templates available in [this repo](https://github.com/TeamTopologies/Team-Shape-Templates#available-team-shapes)




# How it works

You can try the official plugin directly from [Miro Marketplace](https://miro.com/marketplace/team-topologies/).

Setup the Team Topologies icon from your library

![Find the Team Topologies icon from your library](readme-img/001.import_from_library.gif)

Start to drag & drop the shapes you need

![Start Drag & Drop the needed shapes](readme-img/002.Start_drag_and_drop_new.gif)

Once you have added the required shapes onto your whiteboard, you can edit them as much as you want (since these are standard Miro shapes):
![Standard shapes are fully editable](readme-img/003.Standard_Miro_shapes_fully_editable.gif)

# How to build

You will need the `Webpack-cli` installed globally with npm ENV VAR set.

- Run `npm install`
- Run `npm run build` or `npm run watch` to compile the plugin

_development_

- Run serve the app `npx serve dist -p 8081`
- Run `ngrok` using `npx ngrok http 8081`
- Get the `https url` from _ngrok_ and paste it in `iframe URL` in your app settings.
  _run/release_
- upload HTML files and dist folder under a **HTTPS** server
- copy the index.html URL (HTTPS required) and paste it in `iframe URL` in your app settings.
