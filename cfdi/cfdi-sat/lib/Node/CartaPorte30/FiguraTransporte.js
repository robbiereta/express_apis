'use strict'

const Node = require('../Node')

class FiguraTransporte extends Node {
  /**
   *
   * @returns {string}
   */
  get nodeName() {
    return 'cartaporte30:TiposFigura'
  }

  /**
   *
   * @returns {string}
   */
  get parentNodeName() {
    return 'cartaporte30:FiguraTransporte'
  }

  /**
   *
   * @returns {boolean}
   */
  get multiple() {
    return true;
  }



}

module.exports = FiguraTransporte