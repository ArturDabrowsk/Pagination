const listItems = [
    'item 1',
    'item 2',
    'item 3',
    'item 4',
    'item 5',
    'item 6',
    'item 7',
    'item 8',
    'item 9',
    'item 10',
    'item 11',
    'item 13',
    'item 12',
    'item 14',
    'item 15',
    'item 16',
    'item 17',
    'item 18',
    'item 19',
    'item 20',
    'item 21',
    'item 22',
];

const listElement = document.getElementById('list');
const pagElement = document.getElementById('pag');

let actualPageIdx = 1;
let entriesOnPage = 5;

function entriesOnSelectedPage(items, wrapper, pageRows, page) {
    wrapper.innerHTML = '';
    page--;

    let start = pageRows * page;
    let end = start + pageRows;
    let pagItems = listItems.slice(start, end);
    for (let i = 0; i < pagItems.length; i++) {
        let item = pagItems[i];
        let itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.innerText = item;
        wrapper.appendChild(itemElement);
    }
};

function setupPag(items, wrapper, pageRows) {
    wrapper.innerHTML = '';
    let pageCount = Math.ceil(items.length / pageRows);
    for (let i = 1; i < pageCount + 1; i++) {
        let btn = pagbutton(i);
        wrapper.appendChild(btn);
    }
}

function pagbutton(page, items) {
    let button = document.createElement('button');
    button.innerText = page;
    button.addEventListener('click', function () {
        actualPageIdx = page;
        entriesOnSelectedPage(items, listElement, entriesOnPage, actualPageIdx);
    });
    return button;
}
entriesOnSelectedPage(listItems, listElement, entriesOnPage, actualPageIdx);
setupPag(listItems, pagElement, entriesOnPage);