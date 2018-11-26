requirejs = {
    "baseUrl": "/dist/",
    "paths": {
        "root": "/dist/",
        // "vue":"libraries/vue"
        //"app-bundle": "../../server/scripts/app-bundle"
    },
    "packages": [],
    "stubModules": [
        "text"
    ],
    "shim": {},
    "bundles": {
        "libraries/vue":[
            "vue"
        ],
        "root-app/app-bundle": [
            "root-app/main"
        ],
        "app1/app-bundle": [
            "app1/main"
        ],
        "app2/app-bundle": [
            "app2/main"
        ]
    }
}