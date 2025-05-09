let opt1 = document.querySelector(".headoption1");

opt1.addEventListener("click", function(event){
    console.log("clicked");
    window.location.href="index.html";
    console.log(window);
    navTextcolor(opt1);

});

let opt2 = document.querySelector(".headoption2");

opt2.addEventListener("click", function(event){
    console.log("clicked");
    window.location.href="project.html";
    console.log(window);
    navTextcolor(opt2);

});

let opt3 = document.querySelector(".headoption3");

opt3.addEventListener("click", function(event){
    console.log("clicked");
    window.location.href="skill.html";
    console.log(window);
    navTextcolor(opt3);

});

let opt4 = document.querySelector(".headoption4");

opt4.addEventListener("click", function(event){
    console.log("clicked");
    window.location.href="about.html";
    console.log(window);
    navTextcolor(opt4);

});

let opt5 = document.querySelector(".headoption5");

opt5.addEventListener("click", function(event){
    console.log("clicked");
    window.location.href="contact.html";
    console.log(window);
    navTextcolor(opt5);

});

let opt6 = document.querySelector(".headoption6");

opt6.addEventListener("click", function(event){
    console.log("clicked");
    window.location.href="resume.html";
    console.log(window);
    navTextcolor(opt6);
});

function navTextcolor(opt){
    opt.id = "col";
}
