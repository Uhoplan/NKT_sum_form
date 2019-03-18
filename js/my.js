var nktArray = [];
let a1 = document.getElementById('a1');
let getFromInput = document.getElementById('buttonSum');
let ol = document.createElement('ol');
document.body.appendChild(ol);
//функция для добавления элементов в массив
a1.onchange = function addInArr(cell) {
  if (a1.value == NaN || a1.value >= 25 || a1.value <= -0.99) {
    console.log('Хуйня какая то!');
  } else {
    cell = parseFloat(a1.value);
    nktArray.push(cell);
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(cell));
    ol.appendChild(li);
    console.log(nktArray);
  }
}
/*
var ul = document.createElement('ul');
    document.body.appendChild(ul);

    while (true) {
      var data = prompt("Введите текст для пункта списка", "");

      if (!data) {
        break;
      }

      var li = document.createElement('li');
      li.appendChild(document.createTextNode(data));
      ul.appendChild(li);
    }
/*
let a1 = document.getElementById( 'a1' )
let a2 = document.getElementById( 'a2' );
let a3 = document.getElementById( 'a3' );
let a4 = document.getElementById( 'a4' );
let a5 = document.getElementById( 'a5' );
let a6 = document.getElementById( 'a6' );
let a7 = document.getElementById( 'a7' );
let a8 = document.getElementById( 'a8' );
let a9 = document.getElementById( 'a9' );
let a10 = document.getElementById( 'a10' );

var getFromInput = document.getElementById( 'buttonSum' );
/*getFromInput.onclick = function (event) {
		event.preventDefault();
		nktArray[0] = +a1.value;
		nktArray[1] = +a2.value;
		nktArray[2] = +a3.value;
		nktArray[3] = +a4.value;
		nktArray[4] = +a5.value;
		nktArray[5] = +a6.value;
		nktArray[6] = +a7.value;
		nktArray[7] = +a8.value;
		nktArray[8] = +a9.value;
		nktArray[9] = +a10.value;
		var nktSum = nktArray.reduce(function (sum, curient){
		return sum + curient;
			});
			document.getElementById( 'summ' ).innerHTML = '&#8721;'+nktSum+'';
	}

//функция для сложения элементов массива
function sumArray(arr) {
	let sum = 0;
		for (var i = 0; i < arr.length; i++) {
		sum = parseFloat (sum + arr[i]);
		}
		return sum;
}
*/
