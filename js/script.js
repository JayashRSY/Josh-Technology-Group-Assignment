/*MODAL*/

var modalBtn = document.querySelector('.book-btn');
var modalBg = document.querySelector('.modal-bg');
var modalCancel = document.querySelector('.modal-cancel');

modalBtn.addEventListener('click',function() {
    modalBg.classList.add('bg-active');
});
modalCancel.addEventListener('click',function() {
    modalBg.classList.remove('bg-active');
});

/*CAROUSEL*/

var left = 1;
var right = 3;
function show() {
    for(i=left;i<=right;i++) {
        document.getElementById("c"+i).style.display="inline-block";
    }
}

var c = 1;
function moveLeft() {
    if (c >= 4 && c <= 6) {
        for (i = 4; i <= 6; i++) {
            document.getElementById("c" + i).style.display = "none";
            c -= 1;
        }
        for (i = 1; i <= 3; i++) {
            document.getElementById("c" + i).style.display = "inline-block";
        }
        console.log(c);
    } else {
        return;
    }
}
function moveRight() {
    if (c >= 1 && c <= 3) {
        for (i = 1; i <= 3; i++) {
            document.getElementById("c" + i).style.display = "none";
            c += 1;
        }
        for (i = 4; i <= 6; i++) {
            document.getElementById("c" + i).style.display = "inline-block";
        }
        console.log(c);
    } else {
        return;
    }
}
