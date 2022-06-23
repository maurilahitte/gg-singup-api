import { expect } from 'chai';
import { createRequest, createResponse } from 'node-mocks-http';
import sinon, { SinonMock } from 'sinon';
import { handlerHealthCheck } from './health.handlers';
import * as services from './health.services';

describe('Health Handlers', function () {
    describe('handlerHealthCheck', function () {
        let servicesMock: SinonMock;
        let responseMock: SinonMock;

        const req = createRequest();
        const res = createResponse();
        const next = sinon.stub();

        beforeEach(function () {
            servicesMock = sinon.mock(services);
            responseMock = sinon.mock(res);
        });

        afterEach(function () {
            sinon.restore();
        });

        it('Should response 200', function () {
            const serviceResponse = { status: 200 };

            servicesMock.expects('getHealthStatus').once().returns(serviceResponse);
            responseMock.expects('status').once().withArgs(200).returns(res);
            responseMock.expects('json').once();

            handlerHealthCheck(req, res, next);

            servicesMock.verify();
            responseMock.verify();
        });

        it('Should throw an exception and exit with next', function () {
            servicesMock.expects('getHealthStatus').once().throwsException('error');
            responseMock.expects('status').never();
            responseMock.expects('json').never();

            handlerHealthCheck(req, res, next);

            expect(next.calledOnce).to.be.true;
            servicesMock.verify();
            responseMock.verify();
        });
    });
});
