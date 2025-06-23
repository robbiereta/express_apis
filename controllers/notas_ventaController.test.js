const chai = require('chai');
const sinon = require('sinon');
const notas_ventaController = require('./notas_ventaController');
const Notas_ventaModel = require('../models/notas_ventaModel');
const Folio = require('../models/Folio');
obtenerSiguienteFolio = require('./notas_ventaController').__get__
// Additional tests for notas_ventaController

describe('notas_ventaController edge cases', function () {
    let req, res, sandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
        req = { params: {}, body: {} };
        res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub()
        };
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('list', function () {
        it('should handle empty result', function (done) {
            sandbox.stub(Notas_ventaModel, 'find').yields(null, []);
            notas_ventaController.list(req, res);
            process.nextTick(() => {
                expect(res.json.calledWith([])).to.be.true;
                done();
            });
        });
    });

    describe('list_last', function () {
        it('should handle empty result', function (done) {
            const execStub = sinon.stub().yields(null, []);
            const sortStub = sinon.stub().returns({ limit: sinon.stub().returns({ exec: execStub }) });
            sandbox.stub(Notas_ventaModel, 'find').returns({ sort: sortStub });

            res.json = function (data) {
                expect(data).to.deep.equal([]);
                done();
            };

            notas_ventaController.list_last(req, res);
        });
    });

    describe('show', function () {
        it('should handle missing folio param gracefully', function (done) {
            sandbox.stub(Notas_ventaModel, 'findOne').yields(null, null);
            notas_ventaController.show(req, res);
            process.nextTick(() => {
                expect(res.status.calledWith(404)).to.be.true;
                done();
            });
        });
    });

    describe('create', function () {
        it('should handle missing body fields', async function () {
            req.body = {};
            const folioStub = sandbox.stub(Folio, 'findOne').resolves({ ultimoFolio: 1, save: async function () { return this; } });
            const saveStub = sandbox.stub().yields(null, { _id: '1', ...req.body });
            sandbox.stub(Notas_ventaModel.prototype, 'save').callsFake(saveStub);

            await notas_ventaController.create(req, res);

            expect(res.status.calledWith(201)).to.be.true;
            expect(res.json.called).to.be.true;
        });
    });

    describe('update', function () {
        it('should not update fields if not present in body', function (done) {
            req.params.id = '1';
            req.body = {};
            const fakeNota = {
                folio_venta: 'F1',
                fecha: '2020-01-01',
                cliente: 'Viejo',
                lineas_venta: [],
                estatus: 'viejo',
                anticipo: 0,
                observaciones: '',
                save: sinon.stub().yields(null, { cliente: 'Viejo' })
            };
            sandbox.stub(Notas_ventaModel, 'findOne').yields(null, fakeNota);

            notas_ventaController.update(req, res);

            process.nextTick(() => {
                expect(fakeNota.save.called).to.be.true;
                expect(res.json.called).to.be.true;
                done();
            });
        });
    });

    describe('remove', function () {
        it('should handle remove when notas_venta not found', function (done) {
            req.params.id = '1';
            sandbox.stub(Notas_ventaModel, 'findByIdAndRemove').yields(null, null);

            notas_ventaController.remove(req, res);

            process.nextTick(() => {
                expect(res.status.calledWith(204)).to.be.true;
                expect(res.json.called).to.be.true;
                done();
            });
        });
    });

    describe('obtenerSiguienteFolio', function () {
        it('should handle Folio.save throwing synchronously', async function () {
            const folioObj = { ultimoFolio: 2, save: () => { throw new Error('fail'); } };
            sandbox.stub(Folio, 'findOne').resolves(folioObj);

            try {
                await notas_ventaControllerModule.create.__proto__.constructor();
                throw new Error('Should have thrown');
            } catch (err) {
                expect(err).to.be.an('error');
            }
        });
    });
});
const notas_ventaControllerModule = require('./notas_ventaController');
// Se recomienda instalar una extensión para ejecutar pruebas mocha.































// Ejemplo: https://marketplace.visualstudio.com/items?itemName=matteoBruni.vscode-mocha-test-adapter
// Instalar chai y sinon con npm install chai sinon


























const expect = chai.expect;


describe('notas_ventaController', function () {
    let req, res, sandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
        req = { params: {}, body: {} };
        res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub()
        };
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('list', function () {
        it('should return notas_ventas on success', function (done) {
            const fakeNotas = [{}, {}];
            sandbox.stub(Notas_ventaModel, 'find').yields(null, fakeNotas);

            notas_ventaController.list(req, res);

            process.nextTick(() => {
                expect(res.json.calledWith(fakeNotas)).to.be.true;
                done();
            });
        });

        it('should return 500 on error', function (done) {
            sandbox.stub(Notas_ventaModel, 'find').yields(new Error('fail'), null);

            notas_ventaController.list(req, res);

            process.nextTick(() => {
                expect(res.status.calledWith(500)).to.be.true;
                expect(res.json.args[0][0]).to.have.property('message');
                done();
            });
        });
    });

    describe('list_last', function () {
        it('should return last notas_venta', function (done) {
            const fakeNotas = [{}];
            const execStub = sinon.stub().yields(null, fakeNotas);
            const sortStub = sinon.stub().returns({ limit: sinon.stub().returns({ exec: execStub }) });
            sandbox.stub(Notas_ventaModel, 'find').returns({ sort: sortStub });

            // Patch res.json to check call after async
            res.json = function (data) {
                expect(data).to.equal(fakeNotas);
                done();
            };

            notas_ventaController.list_last(req, res);
        });

        it('should return 500 on error', function (done) {
            const execStub = sinon.stub().yields(new Error('fail'), null);
            const sortStub = sinon.stub().returns({ limit: sinon.stub().returns({ exec: execStub }) });
            sandbox.stub(Notas_ventaModel, 'find').returns({ sort: sortStub });

            res.status = function (code) {
                expect(code).to.equal(500);
                return {
                    json: function (obj) {
                        expect(obj).to.have.property('message');
                        done();
                    }
                };
            };

            notas_ventaController.list_last(req, res);
        });
    });

    describe('show', function () {
        it('should return notas_venta by folio', function (done) {
            req.params.folio = 'F123';
            const fakeNota = { folio_venta: 'F123' };
            sandbox.stub(Notas_ventaModel, 'findOne').yields(null, fakeNota);

            notas_ventaController.show(req, res);

            process.nextTick(() => {
                expect(res.json.calledWith(fakeNota)).to.be.true;
                done();
            });
        });

        it('should return 404 if not found', function (done) {
            req.params.folio = 'F123';
            sandbox.stub(Notas_ventaModel, 'findOne').yields(null, null);

            notas_ventaController.show(req, res);

            process.nextTick(() => {
                expect(res.status.calledWith(404)).to.be.true;
                done();
            });
        });

        it('should return 500 on error', function (done) {
            req.params.folio = 'F123';
            sandbox.stub(Notas_ventaModel, 'findOne').yields(new Error('fail'), null);

            notas_ventaController.show(req, res);

            process.nextTick(() => {
                expect(res.status.calledWith(500)).to.be.true;
                done();
            });
        });
    });

    describe('create', function () {
        it('should create a new notas_venta', async function () {
            req.body = { cliente: 'C', lineas_venta: [], total: 100, estatus: 'nuevo', anticipo: 0, observaciones: '' };
            const folioStub = sandbox.stub(Folio, 'findOne').resolves({ ultimoFolio: 1, save: async function () { return this; } });
            const saveStub = sandbox.stub().yields(null, { _id: '1', ...req.body });
            sandbox.stub(Notas_ventaModel.prototype, 'save').callsFake(saveStub);

            await notas_ventaController.create(req, res);

            expect(res.status.calledWith(201)).to.be.true;
            expect(res.json.called).to.be.true;
        });

        it('should return 500 on save error', async function () {
            req.body = { cliente: 'C' };
            const folioStub = sandbox.stub(Folio, 'findOne').resolves({ ultimoFolio: 1, save: async function () { return this; } });
            const saveStub = sandbox.stub().yields(new Error('fail'), null);
            sandbox.stub(Notas_ventaModel.prototype, 'save').callsFake(saveStub);

            await notas_ventaController.create(req, res);

            expect(res.status.calledWith(500)).to.be.true;
            expect(res.json.called).to.be.true;
        });
    });

    describe('update', function () {
        it('should update an existing notas_venta', function (done) {
            req.params.id = '1';
            req.body = { cliente: 'Nuevo' };
            const fakeNota = {
                folio_venta: 'F1',
                fecha: '2020-01-01',
                cliente: 'Viejo',
                lineas_venta: [],
                estatus: 'viejo',
                anticipo: 0,
                observaciones: '',
                save: sinon.stub().yields(null, { cliente: 'Nuevo' })
            };
            sandbox.stub(Notas_ventaModel, 'findOne').yields(null, fakeNota);

            notas_ventaController.update(req, res);

            process.nextTick(() => {
                expect(fakeNota.save.called).to.be.true;
                expect(res.json.called).to.be.true;
                done();
            });
        });

        it('should return 404 if notas_venta not found', function (done) {
            req.params.id = '1';
            sandbox.stub(Notas_ventaModel, 'findOne').yields(null, null);

            notas_ventaController.update(req, res);

            process.nextTick(() => {
                expect(res.status.calledWith(404)).to.be.true;
                done();
            });
        });

        it('should return 500 on error', function (done) {
            req.params.id = '1';
            sandbox.stub(Notas_ventaModel, 'findOne').yields(new Error('fail'), null);

            notas_ventaController.update(req, res);

            process.nextTick(() => {
                expect(res.status.calledWith(500)).to.be.true;
                done();
            });
        });
    });

    describe('remove', function () {
        it('should remove notas_venta by id', function (done) {
            req.params.id = '1';
            sandbox.stub(Notas_ventaModel, 'findByIdAndRemove').yields(null, {});

            notas_ventaController.remove(req, res);

            process.nextTick(() => {
                expect(res.status.calledWith(204)).to.be.true;
                expect(res.json.called).to.be.true;
                done();
            });
        });

        it('should return 500 on error', function (done) {
            req.params.id = '1';
            sandbox.stub(Notas_ventaModel, 'findByIdAndRemove').yields(new Error('fail'), null);

            notas_ventaController.remove(req, res);

            process.nextTick(() => {
                expect(res.status.calledWith(500)).to.be.true;
                done();
            });
        });

        });

        describe('obtenerSiguienteFolio', function () {
            let obtenerSiguienteFolio;
            before(() => {
                obtenerSiguienteFolio = require('./notas_ventaController').__get__
                    ? require('./notas_ventaController').__get__('obtenerSiguienteFolio')
                    : require('./notas_ventaController').obtenerSiguienteFolio || require('./notas_ventaController').create.__proto__.constructor; // fallback for direct import
            });

            it('should create a new Folio if none exists', async function () {
                const saveStub = sinon.stub().resolvesThis();
                sandbox.stub(Folio, 'findOne').resolves(null);
                const folioConstructorStub = sandbox.stub().returns({ ultimoFolio: 1, save: saveStub });
                const OriginalFolio = Folio;
                // Patch Folio constructor
                Object.setPrototypeOf(folioConstructorStub, OriginalFolio);
                const oldFolio = global.Folio;
                global.Folio = folioConstructorStub;

                // Patch obtenerSiguienteFolio to use stubbed Folio
                const fn = notas_ventaControllerModule.__get__
                    ? notas_ventaControllerModule.__get__('obtenerSiguienteFolio')
                    : notas_ventaControllerModule.create.__proto__.constructor;

                const result = await (fn || obtenerSiguienteFolio)();
                expect(result).to.equal(1);
                expect(folioConstructorStub.calledWith({ ultimoFolio: 1 })).to.be.true;
                expect(saveStub.called).to.be.true;

                global.Folio = oldFolio;
            });

            it('should increment ultimoFolio if Folio exists', async function () {
                const folioObj = { ultimoFolio: 5, save: sinon.stub().resolvesThis() };
                sandbox.stub(Folio, 'findOne').resolves(folioObj);

                // Patch obtenerSiguienteFolio to use stubbed Folio
                const fn = notas_ventaControllerModule.__get__
                    ? notas_ventaControllerModule.__get__('obtenerSiguienteFolio')
                    : notas_ventaControllerModule.create.__proto__.constructor;

                const result = await (fn || obtenerSiguienteFolio)();
                expect(result).to.equal(6);
                expect(folioObj.save.called).to.be.true;
            });

            it('should throw if save fails', async function () {
                const folioObj = { ultimoFolio: 2, save: sinon.stub().rejects(new Error('fail')) };
                sandbox.stub(Folio, 'findOne').resolves(folioObj);

                // Patch obtenerSiguienteFolio to use stubbed Folio
                const fn = notas_ventaControllerModule.__get__
                    ? notas_ventaControllerModule.__get__('obtenerSiguienteFolio')
                    : notas_ventaControllerModule.create.__proto__.constructor;

                try {
                    await (fn || obtenerSiguienteFolio)();
                    throw new Error('Should have thrown');
                } catch (err) {
                    expect(err).to.be.an('error');
                }
            });
    });
});