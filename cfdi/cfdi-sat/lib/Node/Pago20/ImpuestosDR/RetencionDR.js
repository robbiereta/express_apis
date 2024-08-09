'use strict'

const Node = require('../../Node');

class RetencionDR extends Node {

    /**
     *
     * @returns {string}
     */
    get nodeName() {
        return 'pago20:RetencionDR';
    }

    /**
     *
     * @returns {string}
     */
    get parentNodeName() {
        return 'pago20:RetencionesDR';
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

module.exports = RetencionDR



