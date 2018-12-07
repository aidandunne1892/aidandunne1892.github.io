function initMap() {
    var uluru = {lat: 53.334740, lng: -6.313730};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: uluru});
    var marker = new google.maps.Marker({position: uluru, map: map});
  }
  
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


$(document).ready(function(){
    $("#myBtn1").click(function(){
        $("#myModal").modal();
    });
});


function sendMessageFunction(event){ 
	event.preventDefault();
    alert("Thank you for your message, I aim to get back to you within two days!");
	$("#myModal").modal("hide");
};

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});

$(document).ready(function(){
    $('[data-toggle="popover1"]').popover();   
});

$(document).ready(function(){
    $('[data-toggle="popover2"]').popover();   
});


window.onload = function () {
    'use strict';
    
    var progreeBar = document.getElementsByClassName("progress");
        
        progreeBar[0].style.width = "77%";
        progreeBar[1].style.width = "74%";
        progreeBar[2].style.width = "76%";
        progreeBar[3].style.width = "71%";
        progreeBar[4].style.width = "61%";
        progreeBar[5].style.width = "65%";
        progreeBar[6].style.width = "60%";
        progreeBar[7].style.width = "70%";
        progreeBar[8].style.width = "70%";
        progreeBar[9].style.width = "76%";
    
};