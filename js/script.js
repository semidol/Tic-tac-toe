"use strict"

let field = {
  11: undefined,
  12: undefined,
  13: undefined,
  21: undefined,
  22: undefined,
  23: undefined,
  31: undefined,
  32: undefined,
  33: undefined,
}

let turn = 'x';
let isOver = false;

for (let elem of document.querySelectorAll('.row__cell')) {
  elem.addEventListener('click', motion);
}

function motion(event) {
  if (field[this.id] == undefined && isOver == false) {
    let elem = event.currentTarget;
    field[elem.id] = turn;

    draw(elem);
    check();

    if (turn == 'x') {
      turn = 'o';
    } else {
      turn = 'x';
    }
  }
}

function draw(elem) {
  elem.innerHTML = `<img class="img1" src="img/${turn}1.png" alt=""><img class="img2" src="img/${turn}2.png" alt="">`;
  elem.classList.add('active-before');
  setTimeout(() => elem.classList.add('active-after'), 180);
}

/*function check(elem) {
  if (elem.id == 11 && (field[11] == field[22] && field[11] == field[33] ||
                        field[11] == field[12] && field[11] == field[13] ||
                        field[11] == field[21] && field[11] == field[31]) ) {
    end();
  }
  if (elem.id == 12 && (field[11] == field[22] && field[11] == field[33] ||
                        field[12] == field[22] && field[12] == field[32]) ) {
    end();
  }
  if (elem.id == 13 && (field[13] == field[22] && field[13] == field[31] ||
                        field[13] == field[12] && field[13] == field[11] ||
                        field[13] == field[23] && field[13] == field[33]) ) {
    end();
  }
  if (elem.id == 21 && (field[21] == field[22] && field[21] == field[23] ||
                        field[21] == field[11] && field[21] == field[31]) ) {
    end();
  }
  if (elem.id == 22 && (field[11] == field[22] && field[11] == field[33] ||
                        field[22] == field[12] && field[22] == field[32] ||
                        field[22] == field[21] && field[22] == field[23]) ) {
    end();
  }
  if (elem.id == 23 && (field[23] == field[22] && field[23] == field[21] ||
                        field[23] == field[13] && field[23] == field[33]) ) {
    end();
  }
  if (elem.id == 31 && (field[31] == field[22] && field[31] == field[13] ||
                        field[31] == field[32] && field[31] == field[33] ||
                        field[31] == field[21] && field[31] == field[11]) ) {
    end();
  }
  if (elem.id == 32 && (field[32] == field[22] && field[32] == field[12] ||
                        field[32] == field[31] && field[32] == field[33]) ) {
    end();
  }
  if (elem.id == 33 && (field[11] == field[22] && field[11] == field[33] ||
                        field[33] == field[23] && field[33] == field[13] ||
                        field[33] == field[31] && field[33] == field[32]) ) {
    end();
  }
}*/

function check() {
  let elem = document.querySelector('.line');

  if (field[11] == field [12] && field[11] == field [13] && field[11] !== undefined) {
    line(elem, 1);
    return
  }

  if (field[21] == field [22] && field[21] == field [23] && field[21] !== undefined) {
    line(elem, 2);
    return
  }

  if (field[31] == field [32] && field[31] == field [33] && field[31] !== undefined) {
    line(elem, 3);
    return
  }

  if (field[11] == field [21] && field[11] == field [31] && field[11] !== undefined) {
    line(elem, 4);
    return
  }

  if (field[12] == field [22] && field[12] == field [32] && field[12] !== undefined) {
    line(elem, 5);
    return
  }

  if (field[13] == field [23] && field[13] == field [33] && field[13] !== undefined) {
    line(elem, 6);
    return
  }

  if (field[11] == field [22] && field[11] == field [33] && field[11] !== undefined) {
    line(elem, 7);
    document.querySelector('.line-wrap').style.transform = 'rotate(45deg)';
  }
  if (field[13] == field [22] && field[13] == field [31] && field[13] !== undefined) {
    line(elem, 8);
    document.querySelector('.line-wrap').style.transform = 'rotate(135deg)';
  }
}

function line(elem, n) {
  isOver = true;
  setTimeout(() => {
    elem.style.background = turn == 'o' ? 'red' : '#4300ff';
    elem.classList.add(`pos${n}`);
  }, 500);
}
