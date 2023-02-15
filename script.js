let change = document.getElementById('icon');
let images = ['fas fa-download', 'fa fa-spinner fa-pulse', 'fas fa-headphones']
setInterval(function () {
    for (var i = 1; i <= images.length; i++) {

        document.getElementById('icon').className.replace("fas fa-download")
            
    }
}, 800);

// setInterval(function myFunction() {
//     var element = document.getElementById("icon");
//     element.classList.add("fas fa-download");
// }, 800)

// function myFunction() {
//     var element = document.getElementsByTagNameNS("i");
//     element.classList.add("fas","fa-download");
// }

// document.getElementById('icon').setAttribute("class", "fas fa-download");

// var e = document.createAttribute("i");
// e.appendChild('<i class="fa fa-trash-o" aria-hidden="true"></i>');
// document.getElementById('h2').innerHTML = new HTML;

// document.querySelector("h2").innerHTML="Good Bye";
alert("hi");