'use strict'

const Node = require('../Node');

class Pago extends Node {

  /**
   *
   * @returns {string}
   */
  get nodeName () {
    return 'pago20:Pago';
  }

  /**
   *
   * @returns {boolean}
   */
  get multiple () {
    return true;
  }
}

module.exports = Pago
