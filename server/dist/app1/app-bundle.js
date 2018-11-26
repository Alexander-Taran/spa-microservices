define('app1/app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.message = 'Hello World! app 1 here';
        }
        return App;
    }());
    exports.App = App;
});



define('text!app1/app.html',[],function(){return "<template>\n  <h1>${message}</h1>\n</template>\n";});
define('app1/main',["require", "exports", "../environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('app1/resources');
        aurelia.use.developmentLogging(environment_1.default.debug ? 'debug' : 'warn');
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        return aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});



define('app1/resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});



define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});



define('app1/resources',['app1/resources/index'],function(m){return m;});
//# sourceMappingURL=app1/app-bundle.js.map