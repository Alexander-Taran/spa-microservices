define('app2/main',["require", "exports", "vue"], function (require, exports, vue_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    debugger;
    var app = new vue_1.default({
        el: '#app',
        data: {
            message: 'Hello Vue!'
        }
    });
});



define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});



//# sourceMappingURL=app2/app-bundle.js.map