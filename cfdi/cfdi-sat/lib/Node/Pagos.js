'use strict'

const Node = require('./Node');

class Pagos extends Node {

  /**
   *
   * @returns {string}
   */
  get nodeName () {
    return 'pago20:Pagos';
  }

  /**
   *
   * @returns {boolean}
   */
  get multiple () {
    return false;
  }
}

module.exports = Pagos
