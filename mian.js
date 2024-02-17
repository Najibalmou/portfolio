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


let scrollBtn = document.getElementById('scrollBtn');

window.onscroll = function(){
    if(scrollY >= 490){
        scrollBtn.style.display = 'block';
    }
    else{
        scrollBtn.style.display = 'none';
    }
}
scrollBtn.onclick = function(){
    scroll({
        left:0,
        top:0,
        behavior:"smooth"
    })
}


function showHiddenTxt1() {
    $("#txt1").fadeIn(3000);
}
setTimeout(showHiddenTxt1, 2000);

function showHiddenTxt2() {
    $("#txt2").fadeIn(3000);
}
setTimeout(showHiddenTxt2, 3000);

function showHiddenTxt3() {
    $("#txt3").fadeIn(3000);
}
setTimeout(showHiddenTxt3, 4000);

function showHiddenTxt4() {
    $("#txt4").fadeIn(3000);
}
setTimeout(showHiddenTxt4, 5000);

function showHiddenTxt5() {
    $("#txt5").fadeIn(3000);
}
setTimeout(showHiddenTxt5, 6000);


function showHiddenText() {
    $("#hiddenName").fadeIn(3000);
}
setTimeout(showHiddenText, 7000);

function showHiddenText1() {
    $("#hiddentext1").fadeIn(3000);
}
setTimeout(showHiddenText1, 8000);

function showHiddenText2() {
    $("#hiddentext2").fadeIn(3000);
}
setTimeout(showHiddenText2, 9000);

function showHiddenBtn1() {
    $("#hiddenBtns").fadeIn(3000);
}
setTimeout(showHiddenBtn1, 10000);

function showHiddenIcons() {
    $("#hiddenicons").fadeIn(3000);
}
setTimeout(showHiddenIcons, 11000);

function showHiddenImg() {
    $("#hiddenImg").fadeIn(3000);
}
setTimeout(showHiddenImg, 12000);

function showHiddenAboutme() {
    $("#aboutme").fadeIn(3000);
}
setTimeout(showHiddenAboutme, 13000);



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




const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
  social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
  social_panel_container.classList.remove('visible')
});


