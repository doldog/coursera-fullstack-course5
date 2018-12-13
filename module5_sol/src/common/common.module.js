(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://shrouded-crag-39384.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
