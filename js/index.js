"use strict";

let data = {
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
    "7": 0,
    "8": 0,
    "9": 0,
    "10": 0,
    "11": 0,
    "12": 0,
    "count" : 0,
};
let n_list = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
let sortStyle = "Frequency";

function Throw() {
    let a = Math.floor(Math.random() * 6) + 1 ;
    let b = Math.floor(Math.random() * 6) + 1 ;

    const dice_A = document.getElementById("dice_A");
    const dice_B = document.getElementById("dice_B");
    dice_A.src = "img/saikoro-illust" + String(a) + ".png";
    dice_B.src = "img/saikoro-illust" + String(b) + ".png";

    const result = document.getElementById("result");
    result.textContent = String(a+b);

    data[String(a+b)] += 1;
    data['count'] += 1;
    updateData();
}

function updateData() {
    if (sortStyle == "Frequency") {
        n_list.sort(function(a, b) {
            return data[b] - data[a];
        });
    }
    for (let i = 0; i < 11; i++) {
        let sum = document.getElementById("sum" + String(i+1));
        let cnt = document.getElementById("cnt" + String(i+1));
        sum.textContent = n_list[i];
        cnt.textContent = data[n_list[i]];
    }
    const Count = document.getElementById("count");
    Count.textContent = data['count'];
}

function sortByFrequency() {
    sortStyle = "Frequency";
    n_list = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    n_list.sort(function(a, b) {
        return data[b] - data[a];
    });
    updateData();
}
function sortByNumber() {
    sortStyle = "Number";
    n_list = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    updateData();
}function sortByProbability() {
    sortStyle = "Probability";
    n_list = ["7", "6", "8", "5", "9", "4", "10", "3", "11", "2", "12"];
    updateData();
}