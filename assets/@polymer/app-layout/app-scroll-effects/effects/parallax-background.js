/// BareSpecifier=@polymer/app-layout/app-scroll-effects/effects/parallax-background
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
import '../app-scroll-effects-behavior.js';

import { registerEffect } from '../../helpers/helpers.js';
/**
 * Vertically translate the background based on a factor of the scroll position.
 */
registerEffect('parallax-background', {
  /**
   * @param {{scalar: string}} config
   * @this Polymer.AppLayout.ElementWithBackground
   */
  setUp: function setUp(config) {
    var fx = {};
    var scalar = parseFloat(config.scalar);
    fx.background = this._getDOMRef('background');
    fx.backgroundFrontLayer = this._getDOMRef('backgroundFrontLayer');
    fx.backgroundRearLayer = this._getDOMRef('backgroundRearLayer');
    fx.deltaBg = fx.backgroundFrontLayer.offsetHeight - fx.background.offsetHeight;
    if (fx.deltaBg === 0) {
      if (isNaN(scalar)) {
        scalar = 0.8;
      }
      fx.deltaBg = (this._dHeight || 0) * scalar;
    } else {
      if (isNaN(scalar)) {
        scalar = 1;
      }
      fx.deltaBg = fx.deltaBg * scalar;
    }
    this._fxParallaxBackground = fx;
  },
  /** @this Polymer.AppLayout.ElementWithBackground */
  run: function run(p, y) {
    var fx = this._fxParallaxBackground;
    this.transform('translate3d(0px, ' + fx.deltaBg * Math.min(1, p) + 'px, 0px)', fx.backgroundFrontLayer);
    if (fx.backgroundRearLayer) {
      this.transform('translate3d(0px, ' + fx.deltaBg * Math.min(1, p) + 'px, 0px)', fx.backgroundRearLayer);
    }
  },
  /** @this Polymer.AppLayout.ElementWithBackground */
  tearDown: function tearDown() {
    delete this._fxParallaxBackground;
  }
});