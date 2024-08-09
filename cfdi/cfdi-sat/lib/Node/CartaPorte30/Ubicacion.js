'use strict'

const Node = require('../Node')

class Ubicacion extends Node {
  /**
   *
   * @returns {string}
   */
  get nodeName() {
    return 'cartaporte30:Ubicacion'
  }

  /**
   *
   * @returns {string}
   */
  get parentNodeName() {
    return 'cartaporte30:Ubicaciones'
  }

  /**
 *
 * @returns {boolean}
 */
  get multiple() {
    return true;
  }


}

module.exports = Ubicacion