const nktLength = [];
let itemCounter = 0;
class NktItem {
  constructor (number = 'порядковый номер', length = 'длинна трубы' ) {
    this.number = number;
    this.length = length;
  }
  renderNktItem (number, length)  {
    let curentPlace = document.getElementById("decimal-block"+itemCounter);
    curentPlace.insertAdjacentHTML ('beforeend',
`<tr><td class="number">${number}</td><td class="length">${length}</td></tr>`);
  }
}

class TableDecimalBlock {
  constructor () {
  let column = document.createElement('div');
  column.className = "list-column-block"+itemCounter;
  let decimalBlock = document.createElement('table');
  decimalBlock.id = "decimal-block"+itemCounter;
  decimalBlock.className = "decimal-block-table";
  document.querySelector('.nkt-list').append(column);
  document.querySelector('.list-column-block'+itemCounter).append(decimalBlock);
  }
}

function addToArr (value) {

  nktLength.push(new NktItem(nktLength.length+1,value));
  summNktLength(nktLength);
  new NktItem().renderNktItem(nktLength.length,value);
  if (nktLength.length % 10 == 0) {
    itemCounter++;
    new TableDecimalBlock();
    console.log("got IT!");
  }
}

 const summNktLength = (list) => {
  let nktList = list.map(nktItem => +nktItem.length);
  let sumLength = nktList.reduce((sum, current)  => sum + current, 0);
  document.querySelector('.decimal-block-result').innerHTML = "Длинна труб = "+sumLength.toFixed(2);
  // if (nktLength.length % 10 == 0) {
      document.querySelector('.list-column-block'+itemCounter).insertAdjacentHTML('beforeend',`<div class="decimal-sum">&Sigma;&nbsp;=&nbsp;${sumLength.toFixed(2)}</div>`);
  // }
};
