let outer = document.getElementById('outer'),
    wrapper = document.getElementById('contant'),
    maxWidth = outer.clientWidth,
    maxHeight = outer.clientHeight;
window.addEventListener("resize", resize);
resize();

function resize() {
    let scale,
        width = window.innerWidth,
        height = window.innerHeight,
        isMax = width >= maxWidth && height >= maxHeight;

    scale = Math.min(width / maxWidth, height / maxHeight);
    outer.style.transform = isMax ? '' : 'scale(' + scale + ')';
    wrapper.style.width = isMax ? '' : maxWidth * scale;
    wrapper.style.height = isMax ? '' : maxHeight * scale;
}


// --------------------------------------------------------------------------------

let frist_span_scissors = document.querySelector(".question_1");
frist_span_eraser = document.querySelector(".question_2");
frist_span_ruler = document.querySelector(".question_3");
frist_span_bag = document.querySelector(".question_4");
frist_span_pencil_case = document.querySelector(".question_5");
frist_span_pencil = document.querySelector(".question_6");
frist_span_book = document.querySelector(".question_7");
frist_span_pen = document.querySelector(".question_8");


let div = document.getElementById('qunteinerspan')
descendents = div.getElementsByTagName('span');

function remove_classlist_active() {
    for (let i = 0; i < descendents.length; i++) {
        descendents[i].classList.remove("active");
    }
}

function same_probartiy_with_all_span(i) {
    document.getElementById('audiocorrect').play();
    descendents[i].style.visibility = "hidden";
    descendents[i].style.pointerEvents = 'none';
    descendents[i].classList.remove("active");
}

function fun_for_resource() {
    document.querySelector(".view_icon").style.opacity = "0.3";
    document.querySelector(".view_icon").style.pointerEvents = 'none';
    document.querySelector("#button_reply").style.opacity = "0.3";
    document.querySelector("#button_reply").style.pointerEvents = 'none';
    document.querySelector("#resourse").style.pointerEvents = 'none';
    document.querySelector("#resourse").style.opacity = "0.3";
    document.querySelector("#resourse2").style.pointerEvents = 'none';
    document.querySelector("#resourse2").style.opacity = "0.3";
}

function fun_for_close_icon() {
    document.querySelector(".view_icon").style.pointerEvents = 'auto';
    document.querySelector(".view_icon").style.removeProperty("opacity");
    document.querySelector("#button_reply").style.removeProperty("opacity");
    document.querySelector("#button_reply").style.pointerEvents = 'auto';
    document.querySelector("#resourse").style.pointerEvents = 'auto';
    document.querySelector("#resourse").style.removeProperty("opacity");
    document.querySelector("#resourse2").style.pointerEvents = 'auto';
    document.querySelector("#resourse2").style.removeProperty("opacity");
}
// ------------------------------------------------------------
frist_span_scissors.onclick = function() {

    remove_classlist_active();
    frist_span_scissors.classList.add("active");
}

frist_span_eraser.onclick = function() {

    remove_classlist_active();
    frist_span_eraser.classList.add("active");
}

frist_span_ruler.onclick = function() {
    remove_classlist_active();
    frist_span_ruler.classList.add("active");
}

frist_span_bag.onclick = function() {
    remove_classlist_active();
    frist_span_bag.classList.add("active");
}

frist_span_pencil_case.onclick = function() {
    remove_classlist_active();
    frist_span_pencil_case.classList.add("active");
}
frist_span_pencil.onclick = function() {
    remove_classlist_active();
    frist_span_pencil.classList.add("active");
}
frist_span_book.onclick = function() {
    remove_classlist_active();
    frist_span_book.classList.add("active");
}
frist_span_pen.onclick = function() {
    remove_classlist_active();
    frist_span_pen.classList.add("active");
}


let empty_space_first = document.querySelector(".first_space");
empty_space_seconde = document.querySelector(".second_space");
empty_space_only_one = document.querySelector(".first_space2");
empty_space_threed_column = document.querySelector(".first_space3");
empty_space_thredd_columan_second = document.querySelector(".second_space3");



empty_space_first.onclick = function() {
    for (var i = 0; i < descendents.length; i++) {
        if (descendents[i].classList.contains("active") && descendents[i].dataset.answer === "correct") {
            document.querySelector(".mark_position_right1").style.visibility = "visible";
            document.querySelector(".text_complete").textContent = descendents[i].textContent;
            empty_space_first.style.pointerEvents = 'none';
            same_probartiy_with_all_span(i);
        } else if (!descendents[i].classList.contains("active")) {} else {
            document.getElementById('audioincorrect').play();
            descendents[i].classList.remove("active");
            document.querySelector(".mark_position1").style.visibility = "visible";
            document.querySelector(".text_complete").textContent = descendents[i].textContent;
            setTimeout(() => {
                document.querySelector(".mark_position1").style.visibility = "hidden";
                document.querySelector(".text_complete").textContent = "";
            }, 1000);
        }
    }
}


empty_space_seconde.onclick = function() {
    for (var i = 0; i < descendents.length; i++) {
        if (descendents[i].classList.contains("active") && descendents[i].dataset.answer === "correct") {
            document.querySelector(".mark_position_right2").style.visibility = "visible";
            document.querySelector(".text_complete2").textContent = descendents[i].textContent;
            empty_space_seconde.style.pointerEvents = 'none';
            same_probartiy_with_all_span(i);
        } else if (!descendents[i].classList.contains("active")) {} else {
            document.getElementById('audioincorrect').play();
            document.querySelector(".mark_position2").style.visibility = "visible";
            document.querySelector(".text_complete2").textContent = descendents[i].textContent;
            descendents[i].classList.remove("active");
            setTimeout(() => {
                document.querySelector(".mark_position2").style.visibility = "hidden";
                document.querySelector(".text_complete2").textContent = "";
            }, 1000);
        }
    }
}

empty_space_only_one.onclick = function() {
    for (var i = 0; i < descendents.length; i++) {
        if (descendents[i].classList.contains("active") && descendents[i].dataset.answer === "correct") {
            document.querySelector(".mark_position_right3").style.visibility = "visible";
            document.querySelector(".text_complete3").textContent = descendents[i].textContent;
            empty_space_only_one.style.pointerEvents = 'none';
            same_probartiy_with_all_span(i);
        } else if (!descendents[i].classList.contains("active")) {} else {
            document.getElementById('audioincorrect').play();
            document.querySelector(".mark_position3").style.visibility = "visible";
            document.querySelector(".text_complete3").textContent = descendents[i].textContent;
            descendents[i].classList.remove("active");
            setTimeout(() => {
                document.querySelector(".mark_position3").style.visibility = "hidden";
                document.querySelector(".text_complete3").textContent = "";
            }, 1000);
        }
    }
}


empty_space_threed_column.onclick = function() {
    for (var i = 0; i < descendents.length; i++) {
        if (descendents[i].classList.contains("active") && descendents[i].dataset.answer === "correct") {
            document.querySelector(".mark_position_right4").style.visibility = "visible";
            document.querySelector(".text_complete4").textContent = descendents[i].textContent;
            empty_space_threed_column.style.pointerEvents = 'none';
            same_probartiy_with_all_span(i);
        } else if (!descendents[i].classList.contains("active")) {} else {
            document.getElementById('audioincorrect').play();
            document.querySelector(".mark_position4").style.visibility = "visible";
            document.querySelector(".text_complete4").textContent = descendents[i].textContent;
            descendents[i].classList.remove("active");
            setTimeout(() => {
                document.querySelector(".mark_position4").style.visibility = "hidden";
                document.querySelector(".text_complete4").textContent = "";
            }, 1000);
        }
    }
}

empty_space_thredd_columan_second.onclick = function() {
    for (var i = 0; i < descendents.length; i++) {
        if (descendents[i].classList.contains("active") && descendents[i].dataset.answer === "correct") {
            document.querySelector(".mark_position_right5").style.visibility = "visible";
            document.querySelector(".text_complete5").textContent = descendents[i].textContent;
            empty_space_thredd_columan_second.style.pointerEvents = 'none';
            same_probartiy_with_all_span(i);
        } else if (!descendents[i].classList.contains("active")) {} else {
            document.getElementById('audioincorrect').play();
            document.querySelector(".mark_position5").style.visibility = "visible";
            document.querySelector(".text_complete5").textContent = descendents[i].textContent;
            descendents[i].classList.remove("active");
            setTimeout(() => {
                document.querySelector(".mark_position5").style.visibility = "hidden";
                document.querySelector(".text_complete5").textContent = "";
            }, 1000);
        }
    }
}


function reset() {
    empty_space_first.style.pointerEvents = 'auto';
    empty_space_seconde.style.pointerEvents = 'auto';
    empty_space_threed_column.style.pointerEvents = 'auto';
    empty_space_thredd_columan_second.style.pointerEvents = 'auto';
    empty_space_only_one.style.pointerEvents = 'auto';
    document.querySelector(".text_complete").textContent = "";
    document.querySelector(".text_complete2").textContent = "";
    document.querySelector(".text_complete3").textContent = "";
    document.querySelector(".text_complete4").textContent = "";
    document.querySelector(".text_complete5").textContent = "";
    document.querySelector(".mark_position_right1").style.visibility = "hidden";
    document.querySelector(".mark_position_right2").style.visibility = "hidden";
    document.querySelector(".mark_position_right3").style.visibility = "hidden";
    document.querySelector(".mark_position_right4").style.visibility = "hidden";
    document.querySelector(".mark_position_right5").style.visibility = "hidden";
    for (let i = 0; i < descendents.length; i++) {
        descendents[i].style.visibility = "visible";
        descendents[i].classList.remove("active");
        descendents[i].style.pointerEvents = 'auto';
        if (descendents[i].dataset.answer === "incorrect") {
            descendents[i].style.removeProperty("opacity");
            descendents[i].style.pointerEvents = 'auto';
        }
    }
    document.querySelector(".view_icon").style.removeProperty("opacity");
}


function showanser() {
    document.querySelector(".text_complete").textContent = document.querySelector(".question_2").textContent;
    document.querySelector(".text_complete2").textContent = document.querySelector(".question_3").textContent;
    document.querySelector(".text_complete3").textContent = document.querySelector(".question_6").textContent;
    document.querySelector(".text_complete4").textContent = document.querySelector(".question_7").textContent;
    document.querySelector(".text_complete5").textContent = document.querySelector(".question_8").textContent;
    document.querySelector(".mark_position_right1").style.visibility = "visible";
    document.querySelector(".mark_position_right2").style.visibility = "visible";
    document.querySelector(".mark_position_right3").style.visibility = "visible";
    document.querySelector(".mark_position_right4").style.visibility = "visible";
    document.querySelector(".mark_position_right5").style.visibility = "visible";
    for (let i = 0; i < descendents.length; i++) {
        if (descendents[i].dataset.answer === "correct") {
            descendents[i].style.visibility = "hidden";
            descendents[i].classList.remove("active");
        } else {
            descendents[i].style.opacity = "0.3";
            descendents[i].classList.remove("active");
            descendents[i].style.pointerEvents = 'none';
        }
    }
    document.querySelector(".view_icon").style.opacity = "0.3";
}

let resouce = document.getElementById("resourse");
resouce2 = document.getElementById("resourse2");
icon_close = document.getElementById("resourse_icon");
icon_close2 = document.getElementById("resourse_icon2");
resouce.addEventListener('click', function() {
    icon_close.style.display = "block";
    fun_for_resource();
})

var clos = document.querySelector("#close");
clos.onclick = function() {
    icon_close.style.display = "none"
    fun_for_close_icon();
}

resouce2.addEventListener('click', function() {
    icon_close2.style.display = "block";
    fun_for_resource();
})

var clos2 = document.querySelector("#close2");
clos2.onclick = function() {
    icon_close2.style.display = "none"
    fun_for_close_icon();
}