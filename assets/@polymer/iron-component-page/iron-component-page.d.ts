/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   iron-component-page.js
 */

import {Polymer} from '@polymer/polymer/lib/legacy/polymer-fn.js';

import {html} from '@polymer/polymer/lib/utils/html-tag.js';

import {LegacyElementMixin} from '@polymer/polymer/lib/legacy/legacy-element-mixin.js';

interface IronComponentPageElement extends LegacyElementMixin, HTMLElement {

  /**
   * URL of the Polymer Analyzer descriptor to fetch and display.
   */
  descriptorUrl: string|null|undefined;

  /**
   * By default all routing is performed using the URL fragment
   * (e.g. `docs.html#/elements/my-element`).
   *
   * If your server supports it and you would like to use the real URL
   * path instead (e.g. `/api/docs/elements/my-element`), set this to
   * the base path where the page is mounted, omitting the trailing
   * slash (e.g. `/api/docs` or *empty string* for the root path).
   */
  baseHref: string|null|undefined;

  /**
   * Instead of displaying items relative to the top level of
   * `descriptor`, start from this namespace.
   */
  rootNamespace: string|null|undefined;

  /**
   * URL prefix for demo iframes.
   */
  demoSrcPrefix: string|null|undefined;
  _loading: boolean|null|undefined;
  _descriptorError: object|null|undefined;
  _descriptor: object|null|undefined;
  _path: string|null|undefined;
  _narrow: boolean|null|undefined;
  _title: string|null|undefined;
  _onViewChanged(): void;
  _onNavSelect(): void;
  _descriptorUrlChanged(): void;
  _descriptorChanged(descriptor: any): void;
  _titleChanged(title: any): void;
}

export {IronComponentPageElement};

declare global {

  interface HTMLElementTagNameMap {
    "iron-component-page": IronComponentPageElement;
  }
}
