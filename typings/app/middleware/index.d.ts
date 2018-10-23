// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import Uniteresponse from '../../../app/middleware/uniteresponse';
import Verifyjwt from '../../../app/middleware/verifyjwt';

declare module 'egg' {
  interface IMiddleware {
    uniteresponse: typeof Uniteresponse;
    verifyjwt: typeof Verifyjwt;
  }
}
