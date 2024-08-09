'use strict'

const Node = require('../Node')

class Remolques extends Node {
  /**
   *
   * @returns {string}
   */
  get nodeName() {
    return 'cartaporte30:Remolque'
  }

  /**
  *
  * @returns {string}
  */
  get parentNodeName() {
    return 'cartaporte30:Remolques'
  }
  
  /**
  *
  * @returns {boolean}
  */
  get multiple() {
    return true;
  }


}

module.exports = Remolques