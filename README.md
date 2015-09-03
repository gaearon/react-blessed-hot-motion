# react-blessed-hot-motion

This is a demo of a custom [React Blessed](https://github.com/Yomguithereal/react-blessed/) console renderer (warning: very early preview, many things don’t work) using [React Motion](https://github.com/chenglou/react-motion) for animation, and Webpack for listening to code hot updates.

It also demonstrates the use of [React Transform Babel plugin](https://github.com/gaearon/babel-plugin-react-transform/) together with:

* [react-transform-webpack-hmr](https://github.com/gaearon/react-transform-webpack-hmr) for live editing React components;
* [react-transform-catch-errors](https://github.com/gaearon/react-transform-catch-errors) for catching errors inside `render()`.

![gif](http://i.imgur.com/2tdeBnm.gif)

If you still don’t believe it, yes, it’s a proper command line Node application (no DOM or JSDOM or anything—it uses [Blessed](https://github.com/chjj/blessed) under the hood) that is written with React and can use some tools and libraries from React ecosystem. And you can edit it live. And even catch errors inside `render()`:

![](https://camo.githubusercontent.com/1697c0611f83300b6225f9de007a45dd1d2d6f55/687474703a2f2f692e696d6775722e636f6d2f727339314c734e2e676966)

It is based on [@jlongster](jlongster.com)’s amazing [Backend with Webpack](https://github.com/jlongster/backend-with-webpack) example that shows how to integrate hot reloading into a Node (server) app.

Of course, it is only possible thanks to [Yomguithereal](https://github.com/Yomguithereal)’s work on [React Blessed](https://github.com/Yomguithereal/react-blessed/).

## Running

```
git clone https://github.com/gaearon/react-blessed-hot-motion.git
cd react-blessed-hot-motion
npm install
npm start
```

You may then edit files inside `src/components/*`. Not everything works, as [React Blessed](https://github.com/Yomguithereal/react-blessed/) is hardly feature complete, but you should be able to tweak colors and change text while the app is running.
