var lastClick = "X";

function tableClicked(id) {
  //alert(id);
  document.getElementById(id).innerHTML = lastClick;
  if (lastClick == "X") { lastClick = "O" } else { lastClick = "X" }
}