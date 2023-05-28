function switchTabs(evt, tabName) {
    var i, tabContents, tabButtons;
    tabContents = document.getElementsByClassName("tabContents");
    for (i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
      }
    tabButtons = document.getElementsByClassName("tabButtons");
    for (i = 0; i < tabButtons.length; i++) {
            tabButtons[i].className = tabButtons[i].className.replace(" active", "");
        }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}