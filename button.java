$("#button").click( function() {
    var user_input = $("#input").val();
    if(user_input === "blue"){
        $("p").html("you guessed correct!");
    }
    else{
        $("p").html("WRONG!");
    }
});
