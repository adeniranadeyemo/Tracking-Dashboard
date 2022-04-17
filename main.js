function showDivDaily() {
  document.getElementById('ds').style.display = "block";
  document.getElementById('ws').style.display = "none";
  document.getElementById('ms').style.display = "none";
}

function showDivWeekly() {
  document.getElementById('ws').style.display = "block";
  document.getElementById('ms').style.display = "none";
}

function showDivMonthly() {
  document.getElementById('ms').style.display = "block";
}
