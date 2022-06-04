
const menuButton = document.querySelector('#MenuButton');
const menuList = document.querySelector('#MenuList');

const menuListItems = menuList.querySelectorAll('li a');

let menuItemActivo = menuListItems[0];
let visible = false;

menuButton.addEventListener('click', function () {
  if (visible) {
    menuList.classList.remove('show');
  } else {
    menuList.classList.add('show');
  }

  visible = !visible;
}, false);

menuListItems.forEach(function (menuItem) {
  menuItem.addEventListener('click', function () {
    visible = false;
    menuList.classList.remove('show');

    menuItemActivo.classList.remove('activo');
    menuItem.classList.add('activo');

    menuItemActivo = menuItem;
  }, false);
});

