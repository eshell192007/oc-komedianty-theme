var BuyPopUpHide, BuyPopUpShow;

console.log('foobar');

SocialShareKit.init();

BuyPopUpShow = function() {
  return $('.buy-popup').show();
};

BuyPopUpHide = function() {
  return $('.buy-popup').hide();
};

$(document).ready(function() {
  return BuyPopUpHide();
});

$('.buy-button').click(function(e) {
  e.preventDefault();
  e.stopPropagation();
  return BuyPopUpShow();
});

$(".mainMenu .mainMenu-item > a").click(function(e) {
  var mainMenuItem, mainMenuItems, mainMenuLink, sideMenu, sideMenus;
  mainMenuLink = $(this);
  mainMenuItem = mainMenuLink.parent();
  mainMenuItems = mainMenuItem.parent().children();
  sideMenu = mainMenuItem.children(".sideMenu");
  sideMenus = mainMenuItems.children(".sideMenu");
  if ($(window).width() <= 1440) {
    e.preventDefault();
    if (!sideMenu.is(':visible')) {
      sideMenus.hide();
      return sideMenu.show();
    } else {
      return sideMenu.hide();
    }
  }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7O0FBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaOztBQUVBLGNBQWMsQ0FBQyxJQUFmLENBQUE7O0FBeUNBLFlBQUEsR0FBZSxTQUFBO1NBQ1gsQ0FBQSxDQUFFLFlBQUYsQ0FBZSxDQUFDLElBQWhCLENBQUE7QUFEVzs7QUFHZixZQUFBLEdBQWUsU0FBQTtTQUNYLENBQUEsQ0FBRSxZQUFGLENBQWUsQ0FBQyxJQUFoQixDQUFBO0FBRFc7O0FBR2YsQ0FBQSxDQUFFLFFBQUYsQ0FBVyxDQUFDLEtBQVosQ0FBa0IsU0FBQTtTQUNkLFlBQUEsQ0FBQTtBQURjLENBQWxCOztBQUdBLENBQUEsQ0FBRSxhQUFGLENBQWdCLENBQUMsS0FBakIsQ0FBdUIsU0FBQyxDQUFEO0VBQ25CLENBQUMsQ0FBQyxjQUFGLENBQUE7RUFDQSxDQUFDLENBQUMsZUFBRixDQUFBO1NBRUEsWUFBQSxDQUFBO0FBSm1CLENBQXZCOztBQVdBLENBQUEsQ0FBRSw4QkFBRixDQUFpQyxDQUFDLEtBQWxDLENBQXdDLFNBQUMsQ0FBRDtBQUNwQyxNQUFBO0VBQUEsWUFBQSxHQUFlLENBQUEsQ0FBRSxJQUFGO0VBQ2YsWUFBQSxHQUFlLFlBQVksQ0FBQyxNQUFiLENBQUE7RUFDZixhQUFBLEdBQWdCLFlBQVksQ0FBQyxNQUFiLENBQUEsQ0FBcUIsQ0FBQyxRQUF0QixDQUFBO0VBQ2hCLFFBQUEsR0FBVyxZQUFZLENBQUMsUUFBYixDQUFzQixXQUF0QjtFQUNYLFNBQUEsR0FBWSxhQUFhLENBQUMsUUFBZCxDQUF1QixXQUF2QjtFQUtaLElBQUcsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLEtBQVYsQ0FBQSxDQUFBLElBQXFCLElBQXhCO0lBQ0ksQ0FBQyxDQUFDLGNBQUYsQ0FBQTtJQUNBLElBQUEsQ0FBTyxRQUFRLENBQUMsRUFBVCxDQUFZLFVBQVosQ0FBUDtNQUtJLFNBQVMsQ0FBQyxJQUFWLENBQUE7YUFDQSxRQUFRLENBQUMsSUFBVCxDQUFBLEVBTko7S0FBQSxNQUFBO2FBVUksUUFBUSxDQUFDLElBQVQsQ0FBQSxFQVZKO0tBRko7O0FBVm9DLENBQXhDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZyAnZm9vYmFyJ1xyXG5cclxuU29jaWFsU2hhcmVLaXQuaW5pdCgpO1xyXG5cclxuIyBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2hcclxuXHJcbiMgJCgnI3BsYXliaWxsIC5kYXRlLWJsb2NrIC5kYXRlJykuZml0VGV4dCgxLjIsIHsgbWluRm9udFNpemU6ICcyNXB4JywgbWF4Rm9udFNpemU6ICcxMDBweCcgfSlcclxuXHJcblxyXG4jICQoXCIjcGxheWJpbGwgLmNhbGVuZGFyIGFcIikuY2xpY2sgKGUpIC0+XHJcbiMgXHRlLnByZXZlbnREZWZhdWx0KClcclxuIyBcdHVubGVzcyAkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKSBpcyBcImFjdGl2ZVwiXHJcbiMgXHRcdCQoXCIjcGxheWJpbGwgLmNhbGVuZGFyIGFcIikucmVtb3ZlQ2xhc3MgXCJhY3RpdmVcIlxyXG4jIFx0XHQkKHRoaXMpLmFkZENsYXNzIFwiYWN0aXZlXCJcclxuIyBcdFx0dW5sZXNzICQoXCIjcGxheWJpbGwgLnBlcmZvcm1hbmNlXCIpLmF0dHIoXCJjbGFzc1wiKSBpcyBcImFjdGl2ZVwiXHJcbiMgXHRcdFx0JChcIiNwbGF5YmlsbCAucGVyZm9ybWFuY2VcIikuYWRkQ2xhc3MgXCJhY3RpdmVcIlxyXG4jIFx0XHRcdHVubGVzcyAkKCQodGhpcykuYXR0cihcImhyZWZcIikpLmF0dHIoXCJjbGFzc1wiKSBpcyBcImFjdGl2ZVwiXHJcbiMgXHRcdFx0XHQkKFwiI3BsYXliaWxsIC5wZXJmb3JtYW5jZVwiKS5yZW1vdmVDbGFzcyBcImFjdGl2ZVwiXHJcbiMgXHRcdFx0XHQkKCQodGhpcykuYXR0cihcImhyZWZcIikpLmFkZENsYXNzIFwiYWN0aXZlXCJcclxuIyBcdCMgZWxzZVxyXG4jIFx0IyBcdCQoJCh0aGlzKS5hdHRyKFwiaHJlZlwiKSkucmVtb3ZlQ2xhc3MgXCJhY3RpdmVcIlxyXG4jIFx0IyBcdCQodGhpcykucmVtb3ZlQ2xhc3MgXCJhY3RpdmVcIlxyXG4jIFx0IyBcdCQoXCIjcGxheWJpbGwgLnBlcmZvcm1hbmNlXCIpLnJlbW92ZUNsYXNzIFwiYWN0aXZlXCJcclxuXHJcblxyXG5cclxuIyAkKFwiLnNlY29uZGFyeS1uYXZpZ2F0aW9uIC5uYXYtbWVudS1pdGVtID4gYVwiKS5jbGljayAoZSkgLT5cclxuIyBcdGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuIyBcdGxpbmsgPSAkKHRoaXMpXHJcbiMgXHRpdGVtID0gbGluay5wYXJlbnQoKVxyXG4jIFx0ZGVzdCA9ICQobGluay5hdHRyKFwiaHJlZlwiKSlcclxuIyBcdCMgd2luZG93LmxvY2F0aW9uID0gbGluay5hdHRyKFwiaHJlZlwiKVxyXG5cclxuIyBcdHVubGVzcyBpdGVtLmF0dHIoXCJjbGFzc1wiKSBpcyBcImFjdGl2ZVwiXHJcbiMgXHRcdCQoXCIuc2Vjb25kYXJ5LW5hdmlnYXRpb24gLm5hdi1tZW51LWl0ZW1cIikucmVtb3ZlQ2xhc3MgXCJhY3RpdmVcIlxyXG4jIFx0XHRpdGVtLmFkZENsYXNzIFwiYWN0aXZlXCJcclxuIyBcdFx0dW5sZXNzICQoJy5jb250ZW50IC5zZWN0aW9uJykuYXR0cihcImNsYXNzXCIpIGlzIFwiYWN0aXZlXCJcclxuIyBcdFx0XHQkKCcuY29udGVudCAuc2VjdGlvbicpLmFkZENsYXNzIFwiYWN0aXZlXCJcclxuIyBcdFx0XHR1bmxlc3MgZGVzdC5hdHRyKFwiY2xhc3NcIikgaXMgXCJhY3RpdmVcIlxyXG4jIFx0XHRcdFx0JCgnLmNvbnRlbnQgLnNlY3Rpb24nKS5yZW1vdmVDbGFzcyBcImFjdGl2ZVwiXHJcbiMgXHRcdFx0XHRkZXN0LmFkZENsYXNzIFwiYWN0aXZlXCJcclxuXHJcbkJ1eVBvcFVwU2hvdyA9IC0+XHJcbiAgICAkKCcuYnV5LXBvcHVwJykuc2hvdygpXHJcblxyXG5CdXlQb3BVcEhpZGUgPSAtPlxyXG4gICAgJCgnLmJ1eS1wb3B1cCcpLmhpZGUoKVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkgLT5cclxuICAgIEJ1eVBvcFVwSGlkZSgpXHJcblxyXG4kKCcuYnV5LWJ1dHRvbicpLmNsaWNrIChlKSAtPlxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcblxyXG4gICAgQnV5UG9wVXBTaG93KClcclxuXHJcblxyXG4jIFNob3dTaWRlTWVudSA9IChlKSAtPlxyXG4jICAgICBlLnNob3dcclxuXHJcblxyXG4kKFwiLm1haW5NZW51IC5tYWluTWVudS1pdGVtID4gYVwiKS5jbGljayAoZSkgLT5cclxuICAgIG1haW5NZW51TGluayA9ICQodGhpcylcclxuICAgIG1haW5NZW51SXRlbSA9IG1haW5NZW51TGluay5wYXJlbnQoKVxyXG4gICAgbWFpbk1lbnVJdGVtcyA9IG1haW5NZW51SXRlbS5wYXJlbnQoKS5jaGlsZHJlbigpXHJcbiAgICBzaWRlTWVudSA9IG1haW5NZW51SXRlbS5jaGlsZHJlbihcIi5zaWRlTWVudVwiKVxyXG4gICAgc2lkZU1lbnVzID0gbWFpbk1lbnVJdGVtcy5jaGlsZHJlbihcIi5zaWRlTWVudVwiKVxyXG4gICAgIyBpdGVtLnBhcmVudCgpLmFkZENsYXNzKCdwYXJlbnQnKVxyXG4gICAgIyBkZXN0ID0gJChtYWluTWVudUxpbmsuYXR0cihcImhyZWZcIikpXHJcbiAgICAjIHdpbmRvdy5sb2NhdGlvbiA9IG1haW5NZW51TGluay5hdHRyKFwiaHJlZlwiKVxyXG5cclxuICAgIGlmICQod2luZG93KS53aWR0aCgpIDw9IDE0NDBcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICB1bmxlc3Mgc2lkZU1lbnUuaXMoJzp2aXNpYmxlJylcclxuICAgICAgICAgICAgIyBtYWluTWVudUl0ZW1zLnJlbW92ZUNsYXNzIFwiYWN0aXZlXCJcclxuICAgICAgICAgICAgIyBtYWluTWVudUl0ZW1zLnJlbW92ZUNsYXNzIFwiY2hpbGQtYWN0aXZlXCJcclxuICAgICAgICAgICAgIyBtYWluTWVudUl0ZW0uYWRkQ2xhc3MgXCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAjIG1haW5NZW51SXRlbS5hZGRDbGFzcyBcImNoaWxkLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgIHNpZGVNZW51cy5oaWRlKClcclxuICAgICAgICAgICAgc2lkZU1lbnUuc2hvdygpXHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAjIG1haW5NZW51SXRlbS5yZW1vdmVDbGFzcyBcImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICMgbWFpbk1lbnVJdGVtLnJlbW92ZUNsYXNzIFwiY2hpbGQtYWN0aXZlXCJcclxuICAgICAgICAgICAgc2lkZU1lbnUuaGlkZSgpIl19