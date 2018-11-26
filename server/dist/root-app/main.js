define('root-app/app',["exports"], function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports.App = void 0;

  var App = function App() {
    this.message = 'Hello World! Root app here';
  };

  _exports.App = App;
});
define('text!root-app/app.html',[],function(){return "<template>\n  <h1>${message}</h1>\n</template>\n";});
define('root-app/main',["exports", "../environment"], function (_exports, _environment) {
  "use strict";

  _exports.__esModule = true;
  _exports.configure = configure;
  _environment = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('root-app/resources');
    aurelia.use.developmentLogging(_environment.default.debug ? 'debug' : 'warn');

    if (_environment.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    return aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('root-app/resources/index',["exports"], function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports.configure = configure;

  function configure(config) {//config.globalResources([]);
  }
});
define('root-app/resources',['root-app/resources/index'],function(m){return m;});
//# sourceMappingURL=root-app/main.js.map