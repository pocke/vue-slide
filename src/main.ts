/// <reference path="../typings/bundle.d.ts" />

import html from './index.html';
import Vue = require('vue');

class Slide extends Vue {
  constructor(markdown: string) {
    super({
      el: html,
    });
  }
}
