import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';

const req = require.context('../../src', true, /\.story\.js$/);
function loadStories() {
  req.keys().forEach(req)
}

setAddon(infoAddon);
configure(loadStories, module);
