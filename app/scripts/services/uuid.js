'use strict';

angular.module('charttab').factory('uid', function () {
    return function () {

        var uid = function () {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        };

        return uid() + uid();

    };
});
