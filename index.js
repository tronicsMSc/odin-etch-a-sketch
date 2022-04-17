
let sketchSize = 16;

const body = document.querySelector('body');

const btnReset = document.createElement('button');
btnReset.style.width = '120px';
btnReset.style.hight = '40px';
btnReset.innerText = 'Reset';
btnReset.style.fontWeight = 'bold';
btnReset.addEventListener('click', resetSketch);
body.appendChild(btnReset);


const container = document.createElement('div');
container.setAttribute('id', 'container');
container.style.flexGrow = 1;
container.style.maxWidth = '960px';
container.style.maxHeight = '960px';
container.style.display = 'grid';
body.appendChild(container);

createSketch(sketchSize);

function createSketch(size) {
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            let div = document.createElement('div');
            div.style.gridColumnStart = i;
            div.style.gridColumnEnd = i;
            div.style.gridRowStart = j;
            div.style.gridRowEnd = j;
            div.style.backgroundColor = 'gray';
            div.classList.add('pixel');
            div.addEventListener('mouseover', turnBlack);
            container.appendChild(div);
        }
    }
}

function deleteSketch() {
    let items = document.getElementsByClassName('pixel');
    let itemsLength = items.length;
    while (itemsLength > 0) {
        items[0].remove();
        itemsLength--;
    }
}

function turnBlack(e) {
    this.style.backgroundColor = 'black';
}

function resetSketch(e) {
    let newSize = prompt("Please enter desired size of sketch box", `${sketchSize}`);
    if (newSize > 100) {
        newSize = prompt("Maximum size is 100", "100");
    }

    if (newSize != sketchSize) {
        sketchSize = newSize;
        deleteSketch();
        createSketch(sketchSize);
    } else {
        let items = document.getElementsByClassName('pixel');
        for (let i = 0; i < items.length; i++) {
            items[i].style.backgroundColor = "gray";
        }
    }
}