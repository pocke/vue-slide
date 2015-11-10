/// <reference path="../typings/bundle.d.ts" />

import html        from './index.html';
import * as Marked from 'marked';

import Vue = require('vue');

class Slide extends Vue {
  private markdowns: string[][];

  private page: number;
  private section: number;

  constructor(private markdown: string, el: string|HTMLElement) {
    super();

    this.page = 0;
    this.section = 0;
    this._init({
      el: el,
      template: html,
      data: {
        markdown: markdown,
        page: this.page, // XXX
        section: this.section,
      },
      methods: {
        marked: this.marked,
        next: this.next,
        prev: this.prev,
      },
      computed: {
        markdowns: this._markdowns,
      },
    });
  }

  next(): void {
    if (this.section + 1 < this.markdowns[this.page].length) {
      this.section++;
      return;
    }

    if (this.page + 1 < this.markdowns.length) {
      this.page++;
      this.section = 0;
      return;
    }
  }

  prev(): void {
    if (this.section !== 0) {
      this.section--;
      return;
    }

    if (this.page !== 0) {
      this.page--;
      this.section = this.markdowns[this.page].length - 1;
      return;
    }
  }

  marked(md: string): string {
    return Marked(md);
  }

  _markdowns(): string[][] {
    return this.markdown.split("\n---\n").map(s => s.split("\n--\n"));
  }
}

(<any>window).Slide = Slide;
