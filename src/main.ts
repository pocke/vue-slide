/// <reference path="../typings/bundle.d.ts" />

import html        from './index.html';
import * as Marked from 'marked';

import Vue = require('vue');

class Slide extends Vue {
  constructor(private markdown: string, el: string|HTMLElement) {
    super();

    this._init({
      el: el,
      template: html,
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

  markdowns(): string[][] {
    return this.markdown.split("\n---\n").map(s => s.split("\n--\n"));
  }
}

(<any>window).Slide = Slide;
