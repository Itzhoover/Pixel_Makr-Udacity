//Input variables
var ht = $("#input__height");
var wt = $("#input__width");
var colorPallete = $("#picker__color");

//Table Variable
var tableCanvas = document.querySelector('#table__canvas');

$('#input__submit').click(function(evt){
    evt.preventDefault();
    GridMaker();
});

//Draw Grid Pattern
var GridMaker = function(){

    tableCanvas.innerHTML = '';
	let height = ht.val();
    let width = wt.val();

    //fills box with color selected
    let colorFill = function(box){
        box.addEventListener('click', function(){
            box.style.backgroundColor = colorPallete.val();
        });
    }

    //Changes Color
    for(let x = 0; x < height; x++){
        let r = tableCanvas.insertRow(x);
        for(let y = 0; y < width; y++){
            let box = r.insertCell(y);
            box.addEventListener('click', colorFill(box));
        }
    }
}