angular.module('MyApp.directives', [])
    .directive('slogan', function () {
        var directive = {};
        directive.restrict = "E";    
        directive.template = "<b>This is a gan</b>";
        return directive;
    })
    .directive('sloganatt', function () {
        var directive = {};
        directive.restrict = "A";
        directive.template = "<b>This is a gan. and this i s a demo !!</b>";
        return directive;
    })
    .directive('sloganclass', function () {
        var directive = {};
        directive.restrict = "A";
        directive.template = "<b>This is a class. and this i s a demo !!</b>";
        return directive;
    });