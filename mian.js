$(document).ready(function(){
    $("#iconburg").click(function(){
        $("#navbaar").toggle();
    });

    $("#showCertificate").click(function(){
        $("#TheCertificates").toggle();
        var buttonText = $("#showandhide").text();
        if ($("#TheCertificates").is(":visible")) {
            $("#showandhide").text("Hide Certificates");
        } else {
            $("#showandhide").text("Show Certificates");
        }
    });

    $("#showSkills").click(function(){
        $("#sec5").toggle();
        var buttonTexte = $("#showandhide").text();
        if ($("#sec5").is(":visible")) {
            $("#showethide").text("Hide Skills");
        } else {
            $("#showethide").text("Show Skills");
        }
    });
});
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

$(document).ready(function(){
    $(".contactme").click(function(){
        $("#success-message").text("Message sent successfully !");
    });
});

