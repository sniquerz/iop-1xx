// JavaScript Document

window.onload = init();

function init() {
  window.addEventListener('scroll', function(e) {
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 300,
      header = document.querySelector("header");
    if (distanceY > shrinkOn) {
      classie.add(header, "smaller");
    } else {
      if (classie.has(header, "smaller")) {
        classie.remove(header, "smaller");
      }
    }
  });

  $.ajax({
    method: 'GET',
    url: 'assets/data/menu.json',
    dataType: 'json',
    success: function (data) {
      console.log('calling the menuBuilder function');
      var menu = menuBuilder(data.menu);
      console.log('call to menuBuilder function completed');

      console.log(menu);
      //console.log('all good');
      //console.log(data.menu.length);
      //console.log(data.menu);

      //if (data.menu.length > 0) {

      //data.menu.forEach(function(data) {

      //console.log(data.MenuName);
      //console.log(data.MenuLink);

      //$('nav').append('<a href="' + data.MenuLink + '">' + data.MenuName + '</a>');
      //});
      //}
    },
    error: function() {
      console.log('all is not good');
    }
  });

}

function menuBuilder(obj) {

  var theMenu = '';

  if (obj.length > 0) {
    theMenu = theMenu + '<ul>';
    obj.forEach(function (item) {

      theMenu = theMenu + '<li><a href="#">' + item.MenuName + '</a>';

      if (item.Menus.length > 0) {
        theMenu = theMenu + menuBuilder(item.Menus);
      }
      theMenu = theMenu + '</li>';

    });

    theMenu = theMenu + '</ul>';

  } else {
    console.log('no data');
  }
    return theMenu;
  //console.log('menuBuilder function complete');
}
