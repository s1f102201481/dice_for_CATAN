window.onload = function() {
    dice_A = document.getElementById("dice_A");
}
window.onload = function() {
    dice_B = document.getElementById("dice_B");
}

let data = {
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
    '6': 0,
    '7': 0,
    '8': 0,
    '9': 0,
    '10': 0,
    '11': 0,
    '12': 0,
};

let n_list = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

function Throw() {
    let a = Math.floor(Math.random() * 6) + 1 ;
    let b = Math.floor(Math.random() * 6) + 1 ;

    dice_A.src = 'img/saikoro-illust' + String(a) + '.png';
    dice_B.src = 'img/saikoro-illust' + String(b) + '.png';

    result = document.getElementById("result");
    result.textContent = String(a+b);

    updateData(a+b);
}

function updateData(n) {
    data[String(n)] += 1;

    n_list.sort(function(a, b) {
        return data[b] - data[a];
    });

    for (let i = 0; i < 11; i++) {
        sum = document.getElementById("sortNumber" + String(i+1));
        sum.textContent = String(Math.floor(n_list[i])) + " : " + String(data[n_list[i]]);
    }
}