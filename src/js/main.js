require.config({
    baseUrl: "/js/",
    paths: {
        "jquery": "./lib/jquery-3.3.1.min",

        "index": "./app/index",
    }
})
require(["index"]);