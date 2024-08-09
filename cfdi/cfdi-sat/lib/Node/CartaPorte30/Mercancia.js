'use strict'

const Node = require('../Node')

class Mercancia extends Node {
  /**
   *
   * @returns {string}
   */
  get nodeName() {
    return 'cartaporte30:Mercancia'
  }

    /**
   *
   * @returns {string}
   */
     get parentNodeName() {
      return 'cartaporte30:Mercancias'
    }

  /**
 *
 * @returns {boolean}
 */
  get multiple() {
    return true;
  }


}

module.exports = Mercancia