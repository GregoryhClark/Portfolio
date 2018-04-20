var modal1 = document.getElementById('project_1_modal');

var btn = document.getElementById("project_1_btn");

var span = document.getElementsByClassName("close_modal")[0];

btn.onclick = function() {
    modal1.style.display = "block";
}

span.onclick = function() {
    modal1.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal1 || event.target == modal2) {
        modal1.style.display = "none";
        modal2.style.display = "none";
    }
}

var modal2 = document.getElementById('project_2_modal');

var btn2 = document.getElementById("project_2_btn");

var span2 = document.getElementsByClassName("close_modal")[1];

btn2.onclick = function() {
    modal2.style.display = "block";
}

span2.onclick = function() {
    modal2.style.display = "none";
    
}

