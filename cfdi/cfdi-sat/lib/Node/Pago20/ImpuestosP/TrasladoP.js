'use strict'

const Node = require('../../Node');

class TrasladoP extends Node {

    /**
     *
     * @returns {string}
     */
    get nodeName() {
        return 'pago20:TrasladoP';
    }

    /**
     *
     * @returns {string}
     */
    get parentNodeName() {
        return 'pago20:TrasladosP';
    }

    // /**
    //  *
    //  * @returns {string}
    //  */
    // get wrapperNodeName() {
    //     return 'pago20:ImpuestosP';
    // }

    /**
     *
     * @returns {boolean}
     */
    get multiple() {
        return true;
    }
}

module.exports = TrasladoP



