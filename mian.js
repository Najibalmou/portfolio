$(document).ready(function(){
    $("#iconburg").click(function(){
        $("#navbaar").toggle();
        $(".home-sci").toggleClass("padding-top-150");
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


function zidmargin(){
    document.querySelector('home-sci');
    document.addEventListener()
}



$(document).ready(function(){
    $(".contactme").click(function(){
        // Vérifie si tous les champs d'entrée sont vides
        var inputsAreEmpty = true;
        $("input").each(function() {
            if ($(this).val() !== "") {
                inputsAreEmpty = false;
                return false;
            }
        });

        if (inputsAreEmpty) {
            $("#success-message").text("Enter your Informations !");
        } else {
            
            $("#success-message").text(""); 
            $("input").val("");

            setTimeout(function() {
                $("#success-message").text("Message sent Successfully !");
            }, 1500);
        }
    });
});


var cursor = document.getElementById('cursor');
document.addEventListener('mousemove' , function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
})
