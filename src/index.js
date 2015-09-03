import React from 'react';
import blessed from 'blessed';
import { render } from 'react-blessed';
import App from './components/App';

// Create our screen
const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'React Blessed Hot Motion'
});

// Let user quit the app
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

// Render React component into screen
render(<App />, screen);

// Don't overwrite the screen
console.log = function () { };
console.warn = function () { };
console.error = function () { }
console.info = function () { };
console.debug = function () { };

// Listen to SIGUSR2 indicating hot updates:
import './signal';

// This is dumb but I don't understand how else to prevent process from exiting.
// If it exits, it will get restarted by nodemon, but then hot reloading won't work.
setInterval(() => {}, 1000);
