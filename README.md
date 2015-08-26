# react-blessed-hot-motion

This is a demo of a custom [React Blessed](https://github.com/Yomguithereal/react-blessed/) console renderer (warning: very early preview, many things don’t work) using [React Motion](https://github.com/chenglou/react-motion) for animation, and Webpack with [React Hot Loader](https://github.com/gaearon/react-hot-loader) for live editing.

![gif](http://i.imgur.com/2tdeBnm.gif)

If you still don’t believe it, yes, it’s a proper command line Node application (no DOM or JSDOM or anything—it uses [Blessed](https://github.com/chjj/blessed) under the hood) that is written with React and can use some tools and libraries from React ecosystem. And you can edit it live.

It is based on [@jlongster](jlongster.com)’s amazing [Backend with Webpack](https://github.com/jlongster/backend-with-webpack) example that shows how to integrate hot reloading into a Node (server) app.

## Running

```
git clone https://github.com/gaearon/react-blessed-hot-motion.git
cd react-blessed-hot-motion
npm install
npm start
```

You may then edit files inside `src/components/*`. Not everything works, as [react-blessed](https://github.com/Yomguithereal/react-blessed/) is hardly feature complete, but you should be able to tweak colors and change text while the app is running.
