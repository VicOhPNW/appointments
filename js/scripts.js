$(document).ready(function(){
  $("#appointment").submit(function(event){


    var confirmName = $("input#name").val();
    var confirmEmail = $("input#email").val();
    var confirmMeet = $("input#meet").val();
    var confirmDate = $("input#date").val();
    var confirmTime = $("input#time").val();

    $("nameSubmit").text(confirmName)
    $("nameSubmit").text(confirm)

$("#nameSubmit")modal("BOOKING CONFIRMED");
  event.preventDefault();
  });
});
