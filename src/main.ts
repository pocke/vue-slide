/// <reference path="../typings/bundle.d.ts" />

import html        from './index.html';
import * as Marked from 'marked';

import Vue = require('vue');

class Slide extends Vue {
  constructor(private markdown: string) {
    super();
    this._init({
      el: html,
      data: {
        markdown: markdown,
      },
      computed: {
        marked: this.marked,
      },
    });
  }

  marked(): string {
    return Marked(this.markdown);
  }
}
