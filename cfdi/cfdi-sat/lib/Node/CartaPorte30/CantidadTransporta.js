'use strict'

const Node = require('../Node')

class CantidadTransporta extends Node {
  /**
    *
    * @returns {string}
    */
  get nodeName() {
    return 'cartaporte30:CantidadTransporta'
  }

  /**
 *
 * @returns {string}
 */
  get parentNodeName() {
    return 'cartaporte30:Mercancia'
  }


  /**
  *
  * @returns {boolean}
  */
  get multiple() {
    return true;
  }

}

module.exports = CantidadTransporta