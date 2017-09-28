window.angular && (() => {

  let app = angular.module('ngStuff.tooltip', []);

  app.provider('ngsTooltip', [() => {
    console.info('Testing!!!');
  }]);

})();