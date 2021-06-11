function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " w3-red";
}

var data = {
  labels: ["week 24", "", "", "week 48", ""],
  datasets: [{
    label: "data",
    backgroundColor: "#91d50a",
    borderColor: "#91d50a",
    borderWidth: 2,
    hoverBackgroundColor: "#9f1897",
    hoverBorderColor: "#9f1897",
    data: [0.7, 9.1,0, 3.6, 16],
  }]
};

var options = {
  maintainAspectRatio: false,
  scales: {
    yAxes: [{
      stacked: true,
      gridLines: {
        display: true,
        color: "rgba(255,99,132,0.2)"
      }
    }],
    xAxes: [{
      gridLines: {
        display: false
      }
    }]
  }
};

Chart.Bar('chart', {
  options: options,
  data: data
});
 
function show(){
    document.querySelector(".dummy__popup").style.visibility="visible";
    document.querySelector("body").style.background="gray";

}
function hide(){
  document.querySelector(".dummy__popup").style.visibility="hidden";
  document.querySelector("body").style.background="transparent";

}
function hideShow(){
  if(document.querySelector(".side__navbar").style.display=="block"){
    document.querySelector(".side__navbar").style.display="none"
    document.querySelector(".side__navbar").style.left="-200px"
  }else{
    document.querySelector(".side__navbar").style.display="block"
    document.querySelector(".side__navbar").style.left="0"

  }
}