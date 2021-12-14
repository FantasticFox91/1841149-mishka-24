const mainNavigation = document.querySelector(".main-nav");
const burgerBtn = document.querySelector(".main-nav__toggle");
const checkClass = (element, clas) => element.classList.contains(clas);
const toggleClass= (element, clas) => element.classList.toggle(clas);

mainNavigation.classList.add("main-nav--close");

burgerBtn.addEventListener("click", () =>
checkClass(mainNavigation,"main-nav--close") ? toggleClass(mainNavigation,"main-nav--open") : toggleClass(mainNavigation,"main-nav--close"));


/*
Функция для проверки на перполнение контентом, взята с прошлого курса
function getTextNodesIn(elem, opt_fnFilter) {
  var textNodes = [];
  if (elem) {
    for (var nodes = elem.childNodes, i = nodes.length; i--;) {
      var node = nodes[i],
        nodeType = node.nodeType;
      if (nodeType == 3) {
        if (!opt_fnFilter || opt_fnFilter(node, elem)) {
          if (node.data.trim() !== '') {
            textNodes.push(node.data.trim() !== '' ? node : '');

          }
        }
      } else if (nodeType == 1 || nodeType == 9 || nodeType == 11) {
        textNodes = textNodes.concat(getTextNodesIn(node, opt_fnFilter));
      }
    }
  }
  return textNodes;
}

getTextNodesIn(document.body).forEach((item) => { item.textContent = "У меня есть несколько клиентов, которые записались ко мне на стрижку, не успев даже зайти в салон." })
*/
