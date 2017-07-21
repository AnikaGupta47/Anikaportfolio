var num= 0;
$("#button").click(function () {
num = num + parseInt( $('input[name=q1]:checked').val());
num = num + parseInt( $('input[name=q2]:checked').val());
num = num + parseInt( $('input[name=q3]:checked').val());
num = num + parseInt( $('input[name=q4]:checked').val());
num = num + parseInt( $('input[name=q5]:checked').val());
$("h3").append(num);
});
$("#reset").click( function() {
    $("h3").html("Your Score: ");
    num=0;
});
