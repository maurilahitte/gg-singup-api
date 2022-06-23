//Require the dev-dependencies
import * as DataAccess from '../users.data-access-layer';
import sinon, { match, SinonMock } from 'sinon';
import {
  createUser,
} from '../users.service';
import { User } from '../users.types';
import {expect} from 'chai';
import { Types } from 'mongoose';

describe('Testing user service', () => {
  let dataAccess: SinonMock;

  beforeEach(() => {
    dataAccess = sinon.mock(DataAccess);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('createUser', () => {
    it('should create a user', async () => {
      const user: Partial<User> = {
        email: 'hello@test.com',
        password: '12345abcdef',
      };
      dataAccess.expects('createUser').withArgs(match(user));
      
      await createUser(user);

      dataAccess.verify();
    });
  });

});
