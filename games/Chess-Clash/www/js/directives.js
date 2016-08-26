var directives=angular.module('app.directives', [])

.directive('blankDirective', [function(){

}]).directive('focusMe', function($timeout, $parse) {
  return {
    link: function(scope, element, attrs) {
      if(element.hasClass('hour'))
          scope.hour=(attrs.focusMe);
     
      if(element.hasClass('minutes'))
          scope.minutes=(attrs.focusMe);
          
        element.bind('keyup', function() {
          element.css('border-color','').css('background-color','');
           if((element.hasClass('minutes')&&(JSON.parse(element.val())>JSON.parse( scope.minutes)))||(element.hasClass('hour'))&&((JSON.parse(element.val())>JSON.parse( scope.hour))))
                  element.css('border-color','#FF0000').css('background-color','rgba(255, 0, 0, 0.16)');
           else
                 element.css('border-color','').css('background-color','');
             
      })
    }
  };
});

  

