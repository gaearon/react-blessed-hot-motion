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
console.error = function () { };
console.info = function () { };
console.debug = function () { };
