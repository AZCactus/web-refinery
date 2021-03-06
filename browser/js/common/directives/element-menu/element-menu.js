app.directive('elementMenu', function () {
    return {
        transclude:true,
        restrict: 'E',
        templateUrl: 'js/common/directives/element-menu/element-menu.html',
        link: function(scope, element, attr){
          scope.click = function($event){
              var currentElement = $($event.currentTarget)
              if(currentElement.hasClass("activeCategory")){
                currentElement.removeClass("activeCategory")
              } else {
             $(".mySideNav").find("*").removeClass("activeCategory")
             $(".mySideNav").find(".collapse.in").collapse('hide')
             currentElement.addClass("activeCategory")
             }
             }
           }
          }
            }
      )
