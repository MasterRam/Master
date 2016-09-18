var module = angular.module('myApp', []);

module.directive('draggable', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element[0].addEventListener('dragstart', scope.handleDragStart, false);
            element[0].addEventListener('dragend', scope.handleDragEnd, false);
        }
    }
});

module.directive('droppable', function () {
    return {
        scope: {
            droppable: '='
        },
        restrict: 'E',
        link: function (scope, element, attrs) {
            var handleDrop = function (e) {
                e.preventDefault();
                e.stopPropagation();
                var dataText = JSON.parse(e.dataTransfer.getData('object'));
                scope.$apply(function () {
                    scope.droppable.childElements.push(dataText);
                });
            };
            var handleDragOver = function (e) {
                e.preventDefault(); // Necessary. Allows us to drop.
                e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
                if (!(e.currentTarget.attributes['class'].nodeValue.indexOf('thick-Border') >= 0))
                    e.currentTarget.attributes['class'].nodeValue = 'thick-Border ' + e.currentTarget.attributes['class'].nodeValue;
                return false;
            };
            var handleDragLeave = function (e) {
                //e.preventDefault(); // Necessary. Allows us to drop.
                //e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
                if (e.currentTarget.attributes['class'].nodeValue.indexOf('thick-Border') >= 0)
                    e.currentTarget.attributes['class'].nodeValue = e.currentTarget.attributes['class'].nodeValue.replace('thick-Border', '');
                return false;
            };

            element[0].addEventListener('drop', handleDrop, false);
            element[0].addEventListener('dragover', handleDragOver, false);
            element[0].addEventListener('mouseleave', handleDragLeave, false);
        }
    }
}).directive('bindData', function ($compile) {
    return {

        scope: {
            bindData: '='
        },
        restrict: 'E',
        controller: function ($scope, $element) {
            if (!$scope.model)
                $scope.model = {};
            $scope.model[$element[0].getAttribute('bind-data')] = $scope.bindData;
             $scope.selectObject = function (object) {
                $scope.$broadcast('selectObject',object);
                $scope.$emit('selectObject',object);
                
            };
        },
        // template: function (elem, attr) {


        //     return 'customer-' + attr.type + '.html';
        // },
        link: function (scope, element, attrs) {
           
            function randomString(length, chars) {
                var mask = '';
                if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
                if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                if (chars.indexOf('#') > -1) mask += '0123456789';
                if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
                var result = '';
                for (var i = length; i > 0; --i) result += mask[Math.round(Math.random() * (mask.length - 1))];
                return result;
            }
            scope.model = {};
            var templates = {
                "Form": "    <md-content layout-padding>\
                            <form name=\"projectForm \" flex>\
                             <select ng-model=\"model['ITEM'].layout\">\
            <option><em>None</em></md-option>\
            <option ng-value=\"row\">row</md-option>\
            <option ng-value=\"column\">column</md-option>\
          </select>\
                             <droppable flex layout=\"column\" ng-click=\"selectObject(model['ITEM'])\" droppable=\"model['ITEM']\">\
                             Form {{model['ITEM'].layout}}\
                             <!-- {{model['ITEM']}} -->\
                           <div layout=\"{{model['ITEM'].layout}}\">\
                            <div id=\"ID\" flex ng-repeat=\"data_ID in model['ITEM'].childElements track by $index\">\
                             <bind-data bind-data=\"data_ID\"></bind-data>\
                                            </div>\
                           </div>\
                                            </droppable>\
                            </form>\
                            </md-content>",
                "Section": " <md-content layout-padding>\
                            <section flex name=\"projectForm \">\
                            <select ng-model=\"model['ITEM'].layout\">\
            <option><em>None</em></md-option>\
            <option ng-value=\"row\">row</md-option>\
            <option ng-value=\"column\">column</md-option>\
          </select>\
                             <droppable  flex layout=\"column\" ng-click=\"selectObject(model['ITEM'])\" droppable=\"model['ITEM']\">\
                             Section\
                             <!-- {{model['ITEM']}} -->\
                              <div layout=\"{{model['ITEM'].layout}}\">\
                            <div id=\"ID\" flex ng-repeat=\"data_ID in model['ITEM'].childElements track by $index\">\
                             <bind-data bind-data=\"data_ID\"></bind-data>\
                                            </div>\
                                            </div>\
                                            </droppable>\
                            </section>\
                            </md-content>",
                "Header": "<md-toolbar class=\"md-theme-light md-accent\">\
            <h2 class=\"md-toolbar-tools md-accent\">\
            <span>Inset</span>\
            </h2>\
        </md-toolbar>",
                "ActionBar": "",
                "Submit": "",
                "Back": "",
                "Grid": "<table><thead><td>Column1</td><td>Column2</td><td>Column3</td></thead><tr><td>Column1Value</td><td>Column2Value</td><td>Column3Value</td></tr><tbody></tbody><table>",
                "Text": "<md-input-container><input type='text' name=\"ID\"><i class=\"material-icons\">close</i></md-input-container>",
            };
            scope.model[element[0].getAttribute('bind-data')] = scope.bindData;
            if (angular.isDefined(scope.bindData) && angular.isArray(scope.bindData.childElements)) {
                var tempTemplate = templates[scope.bindData.type].replace(/ID/g, scope.$parent.$index + randomString(3, 'aA')).replace(/ITEM/g, element[0].getAttribute('bind-data'));
                element.append(tempTemplate);
                $compile(element.contents())(scope)
            }

        }
    }
});
function MainController($scope) {
    var data = {
        "Form": {
            type: "Form",
            childElements: []
        },
        "Header": {
            type: "Header",
            childElements: []
        },
        "Section": {
            type: "Section",
            childElements: []
        },
        "ActionBar": {
            type: "ActionBar",
            childElements: []
        },
        "Submit": {
            type: "Submit",
            childElements: []
        },
        "Back": {
            type: "Back",
            childElements: []
        },
        "Grid": {
            type: "Grid",
            childElements: []
        },
        "Text": {
            type: "Text",
            childElements: []
        },
    };
    $scope.showProperty = false;
    $scope.drag_types = [
        { name: "Form" },
        { name: "Header" },
        { name: "Section" },
        { name: "ActionBar" },
        { name: "Submit" },
        { name: "Back" },
        { name: "Grid" },
        { name: "Text" },
    ];
    $scope.body = {
        type: "Grid",
        childElements: [],
        layout:"column"
    };
    $scope.$on('selectObject', function (args) {
        $scope.selectedObject = args;
        $scope.showProperty = true;
    })

    $scope.return = function () {
        $scope.showProperty = !$scope.showProperty;
    };
    $scope.handleDragStart = function (e) {
        e.currentTarget.attributes['drag-type'].value
        this.style.opacity = '0.4';
        e.dataTransfer.setData('object', JSON.stringify(data[e.currentTarget.attributes['drag-type'].value]));
    };

    $scope.handleDragEnd = function (e) {
        this.style.opacity = '1.0';
    };

    $scope.handleDrop = function (e) {
        e.preventDefault();
        e.stopPropagation();
        var dataText = JSON.parse(e.dataTransfer.getData('object'));
        $scope.$apply(function () {
            scope.model.childElements.push(dataText);
        });
        console.log($scope.items);
    };

    $scope.handleDragOver = function (e) {
        e.preventDefault(); // Necessary. Allows us to drop.
        e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
        return false;
    };

    $scope.sayHi = function () {
        alert('Hi!');
    };

}