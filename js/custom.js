var enterBtn = document.getElementById('enter');
var input = document.getElementById('userInput');
var ul = document.querySelector('ul');
var item = document.getElementsByTagName('li');

function inputLength() {
    return input.value.length;
}

function listLength() {
    return item.length;
}

function createListElement() {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    function itemDone() {
        li.classList.toggle('done');
    }

    li.addEventListener('click', itemDone);

    var deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', deleteListItem);

    function deleteListItem() {
        li.classList.add('delete');
    }
}

function addItemOnClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

enterBtn.addEventListener('click', addItemOnClick);