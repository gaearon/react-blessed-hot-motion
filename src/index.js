import React from 'react';
import { render } from 'react-blessed';
import App from './components/App';

// Render app
const screen = render(<App />, {
  autoPadding: true,
  smartCSR: true,
  title: 'React Blessed Hot Motion'
});

// Let user quit the app
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

// Listen to SIGUSR2 indicating hot updates:
import './signal';

// This is dumb but I don't understand how else to prevent process from exiting.
// If it exits, it will get restarted by nodemon, but then hot reloading won't work.
setInterval(() => {}, 1000);
