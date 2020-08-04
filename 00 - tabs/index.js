var tabButtons = document.querySelectorAll('button');
var tabPanels = document.querySelectorAll('.tabPanel');

function showPanel(panelIndex, colorCode) {
  tabButtons.forEach(function (item) {
    item.style.backgroundColor = '';
    item.style.color = '';
  });
  tabButtons[panelIndex].style.backgroundColor = colorCode;
  tabButtons[panelIndex].style.color = 'white';

  tabPanels.forEach(function (item) {
    item.style.display = 'none';
  });

  tabPanels[panelIndex].style.display = 'block';
  tabPanels[panelIndex].style.backgroundColor = colorCode;
} //fim
showPanel(0, '#f44336');
