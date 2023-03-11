let count = 1;
let countSmall = 0;
let marginLeft = 0;

document.getElementById('radio1').checked = true;

setInterval(function() {
    nextImage();
}, 5000);

function nextImage() {
    count++;

    if(count > 4) {
        count = 1;
    }

    document.getElementById('radio' + count).checked = true;
}

document.getElementById("arrowLeft").addEventListener("click", () => {
    previousGroup();
});

document.getElementById("arrowRigth").addEventListener("click", () => {
    nextGroup();
});

function nextGroup() {
    const groupImage = document.getElementsByClassName("first-group");

    if(countSmall == 3) return;
    
    if(countSmall > 4) countSmall = 1;

    countSmall++;
    marLeft = 1145 * countSmall;

    groupImage[0].style.marginLeft = `-${marLeft}px`;

}

function previousGroup() {
    const groupImage = document.getElementsByClassName("first-group");

    if(countSmall == 0) return;

    countSmall--;
    marLeft = marLeft - 1150;

    groupImage[0].style.marginLeft = `-${marLeft}px`;
}