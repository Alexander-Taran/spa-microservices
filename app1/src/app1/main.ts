import {Aurelia} from 'aurelia-framework'
import environment from '../environment';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('app1/resources');

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  return aurelia.start().then(() => aurelia.setRoot());
}
