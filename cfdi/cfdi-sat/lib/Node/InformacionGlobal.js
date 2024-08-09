'use strict'

const Node = require('./Node')

class InformacionGlobal extends Node{
  /**
   *
   * @returns {string}
   */
  get nodeName () {
    return 'cfdi:InformacionGlobal'
  }
}

module.exports = InformacionGlobal