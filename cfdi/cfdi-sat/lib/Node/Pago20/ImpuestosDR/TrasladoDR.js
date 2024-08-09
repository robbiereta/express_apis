'use strict'

const Node = require('../../Node');

class TrasladoDR extends Node {

    /**
     *
     * @returns {string}
     */
    get nodeName() {
        return 'pago20:TrasladoDR';
    }

    /**
     *
     * @returns {string}
     */
    get parentNodeName() {
        return 'pago20:TrasladosDR';
    }

    /**
     *
     * @returns {string}
     */
    get wrapperNodeName() {
        return 'pago20:ImpuestosDR';
    }

    /**
     *
     * @returns {boolean}
     */
    get multiple() {
        return true;
    }
}

module.exports = TrasladoDR



