function getFirstSelector(selector){
    return document.querySelector(selector);
};

function nestedTarget(){
    return document.getElementById('nested').querySelector('.target');
};

function increaseRankBy(n){
    let lis = document.querySelectorAll('ul.ranked-list li');

    for (let node of lis) {
        node.innerHTML = parseInt(node.innerHTML) + n;
    }
};

function deepestChild(){
    return document.getElementById('grand-node')
            .querySelector('div')
            .querySelector('div')
            .querySelector('div')
            .querySelector('div');
};