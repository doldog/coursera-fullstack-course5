(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://hidden-meadow-65385.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
