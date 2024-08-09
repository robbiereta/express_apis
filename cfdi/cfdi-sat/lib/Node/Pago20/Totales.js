'use strict'

const Node = require('../Node');

class Totales extends Node {

  /**
   *
   * @returns {string}
   */
  get nodeName () {
    return 'pago20:Totales';
  }

  /**
  //  *
  //  * @returns {string}
  //  */
  // get parentNodeName () {
  //   return 'pago20:Pagos';
  // }

//   /**
//    *
//    * @returns {string}
//    */
//   get wrapperNodeName () {
//     return 'pago20:Pagos';
//   }

  /**
   *
   * @returns {boolean}
   */
  get multiple () {
    return true;
  }
}

module.exports = Totales
