'use strict'

const Node = require('../../Node');

class RetencionP extends Node {

    /**
     *
     * @returns {string}
     */
    get nodeName() {
        return 'pago20:RetencionP';
    }

    /**
     *
     * @returns {string}
     */
    get parentNodeName() {
        return 'pago20:RetencionesP';
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

module.exports = RetencionP



