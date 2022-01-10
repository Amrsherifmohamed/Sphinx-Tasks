window.addEventListener("resize", resize);
resize();

function resize() {
    let outer = document.getElementById('outer'),
        wrapper = document.getElementById('contant'),
        maxWidth = outer.clientWidth,
        maxHeight = outer.clientHeight;
    let scale,
        width = window.innerWidth,
        height = window.innerHeight,
        isMax = width >= maxWidth && height >= maxHeight;

    scale = Math.min(width / maxWidth, height / maxHeight);
    outer.style.transform = isMax ? '' : 'scale(' + scale + ')';
    wrapper.style.width = isMax ? '' : maxWidth * scale;
    wrapper.style.height = isMax ? '' : maxHeight * scale;
}
// ---------------------------------------------------------------------
let first_span_a = document.querySelector(".quation_a");
second_span_b = document.querySelector(".quation_b");

first_span_a.onclick = function() {
    first_span_a.classList.add("active");
    second_span_b.classList.remove("active");
}
second_span_b.onclick = function() {
    second_span_b.classList.add("active");
    first_span_a.classList.remove("active");
}

let first_span_a_chooes = document.querySelector(".first_span_a1");
first_span_P_chooes = document.querySelector(".first_span_b1");
second_span_a_choose = document.querySelector(".first_span_a12");



first_span_a_chooes.onclick = function() {
    if (first_span_a.classList.contains("active")) {
        document.getElementById("theImage1").style.visibility = "visible";
        document.getElementById('audiocorrect').play();
        document.querySelector(".shift").style.visibility = "visible";
        document.querySelector(".shift").textContent = " a ";
        document.querySelector(".text_1").style.pointerEvents = 'none';
        first_span_a.classList.remove("active");
    } else if (!first_span_a.classList.contains("active") && !second_span_b.classList.contains("active")) {

    } else {
        document.getElementById('audioincorrect').play();
        document.querySelector(".shift").textContent = "P";
        document.querySelector(".shift").style.visibility = "visible";
        document.querySelector("#theImage1_1").style.visibility = "visible";
        second_span_b.classList.remove("active");
        setTimeout(() => {
            document.querySelector("#theImage1_1").style.visibility = "hidden";
            document.querySelector(".shift").style.visibility = "hidden";
            document.querySelector(".shift").textContent = " q ";
        }, 800);
    }
}

first_span_P_chooes.onclick = function() {
    if (second_span_b.classList.contains("active")) {
        document.getElementById("theImage2").style.visibility = "visible";
        document.getElementById('audiocorrect').play();
        document.querySelector(".shift2").style.visibility = "visible";
        document.querySelector(".shift2").textContent = "P";
        document.querySelector(".text1_span").style.pointerEvents = 'none';
        second_span_b.classList.remove("active");
    } else if (!first_span_a.classList.contains("active") && !second_span_b.classList.contains("active")) {

    } else {
        document.getElementById('audioincorrect').play();
        document.querySelector(".shift2").style.visibility = "visible";
        document.querySelector(".shift2").textContent = "a";
        document.querySelector("#theImage1_2").style.visibility = "visible";
        first_span_a.classList.remove("active");
        setTimeout(() => {
            document.querySelector("#theImage1_2").style.visibility = "hidden";
            document.querySelector(".shift2").style.visibility = "hidden";
            document.querySelector(".shift2").textContent = " q ";
        }, 800);
    }
}

second_span_a_choose.onclick = function() {
    if (first_span_a.classList.contains("active")) {
        document.getElementById("theImage3").style.visibility = "visible";
        document.getElementById('audiocorrect').play();
        document.querySelector(".shift3").style.visibility = "visible";
        document.querySelector(".shift3").textContent = " a ";
        document.querySelector(".text_span").style.pointerEvents = 'none';
        first_span_a.classList.remove("active");
    } else if (!first_span_a.classList.contains("active") && !second_span_b.classList.contains("active")) {

    } else {
        document.getElementById('audioincorrect').play();
        document.querySelector(".shift3").style.visibility = "visible";
        document.querySelector(".shift3").textContent = " P ";
        document.querySelector("#theImage1_3").style.visibility = "visible";
        second_span_b.classList.remove("active");
        setTimeout(() => {
            document.querySelector("#theImage1_3").style.visibility = "hidden";
            document.querySelector(".shift3").style.visibility = "hidden";
            document.querySelector(".shift3").textContent = " q ";
        }, 800);
    }
}

function showresult() {
    document.querySelector(".shift").style.visibility = "visible";
    document.querySelector(".shift").textContent = " a ";
    document.querySelector(".shift2").style.visibility = "visible";
    document.querySelector(".shift2").textContent = " P ";
    document.querySelector(".shift3").style.visibility = "visible";
    document.querySelector(".shift3").textContent = " a ";
    document.getElementById("theImage1").style.visibility = "visible";
    document.getElementById("theImage2").style.visibility = "visible";
    document.getElementById("theImage3").style.visibility = "visible";
    document.querySelector(".questionContainer").style.pointerEvents = 'none';
    document.querySelector(".questionContainer").style.opacity = "0.3";
    first_span_a.classList.remove("active");
    second_span_b.classList.remove("active");
}

function reset() {
    document.getElementById("theImage1").style.visibility = "hidden";
    document.getElementById("theImage2").style.visibility = "hidden";
    document.getElementById("theImage3").style.visibility = "hidden";
    document.querySelector(".shift").style.visibility = "hidden";
    document.querySelector(".shift").textContent = "q";
    document.querySelector(".shift2").style.visibility = "hidden";
    document.querySelector(".shift2").textContent = "q";
    document.querySelector(".shift3").style.visibility = "hidden";
    document.querySelector(".shift3").textContent = " q ";
    document.querySelector(".questionContainer").style.pointerEvents = 'auto';
    document.querySelector(".questionContainer").style.removeProperty("opacity");
    document.querySelector(".text_1").style.pointerEvents = 'auto';
    document.querySelector(".text_span").style.pointerEvents = 'auto';
    document.querySelector(".text1_span").style.pointerEvents = 'auto';

}

function close_dummt() {
    document.querySelector("#footer_up").style.pointerEvents = 'none';
    document.querySelector("#footer_up").style.opacity = "0.3";
    document.querySelector("#resourse").style.pointerEvents = 'none';
    document.querySelector("#resourse").style.opacity = "0.3";
    document.querySelector("#resourse2").style.pointerEvents = 'none';
    document.querySelector("#resourse2").style.opacity = "0.3";
}

function remove_opacity_clicke() {
    document.querySelector("#footer_up").style.pointerEvents = 'auto';
    document.querySelector("#footer_up").style.removeProperty("opacity");
    document.querySelector("#resourse").style.pointerEvents = 'auto';
    document.querySelector("#resourse").style.removeProperty("opacity");
    document.querySelector("#resourse2").style.pointerEvents = 'auto';
    document.querySelector("#resourse2").style.removeProperty("opacity");
}


var resouce = document.getElementById("resourse");
var resouce2 = document.getElementById("resourse2");
var icon_close = document.getElementById("resourse_icon");
var icon_close2 = document.getElementById("resourse_icon2");
resouce.addEventListener('click', function() {
    icon_close.style.display = "block";
    close_dummt();
})

var clos = document.querySelector("#close");
clos.onclick = function() {
    icon_close.style.display = "none"
    remove_opacity_clicke();
}

resouce2.addEventListener('click', function() {
    icon_close2.style.display = "block";
    close_dummt();
})

var clos2 = document.querySelector("#close2");
clos2.onclick = function() {
    icon_close2.style.display = "none"
    remove_opacity_clicke();
}