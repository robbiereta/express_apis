'use strict'

const Node = require('../Node');

class DoctoRelacionado extends Node {

  /**
   *
   * @returns {string}
   */
  get nodeName () {
    return 'pago20:DoctoRelacionado';
  }

  /**
   *
   * @returns {string}
   */
  get parentNodeName () {
    return 'pago20:Pago';
  }

  // /**
  //  *
  //  * @returns {string}
  //  */
  // get wrapperNodeName () {
  //   return 'pago20:Pagos';
  // }

  /**
   *
   * @returns {boolean}
   */
  get multiple () {
    return true;
  }
}

module.exports = DoctoRelacionado
