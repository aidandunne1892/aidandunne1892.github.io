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
