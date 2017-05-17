(function() {
    function HomeCtrl() {
      this.test = "this is a test";
    }

    angular
        .module('listPop')
        .controller('HomeCtrl', [HomeCtrl]);
})();
