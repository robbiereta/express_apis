'use strict'

const Node = require('../Node')

class CartaPorte30 extends Node {
  /**
   *
   * @returns {string}
   */
  get nodeName () {
    return 'cartaporte30:CartaPorte'
  }

  /**
   *
   * @returns {string}
   */
  get parentNodeName () {
    return 'cfdi:Complemento'
  }

  
}

module.exports = CartaPorte30