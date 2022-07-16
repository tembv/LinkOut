const resultsList = document.getElementsByClassName('jobs-search-results__list');
const resultsItem = document.getElementsByClassName("jobs-search-results__list-item");

window.onload = function filtered() {
    filterOutPromoted();
}

function filterOutPromoted() {
    window.addEventListener('scroll', function (e) {
        if (window.scrollY > 50) {
            for (let i = 0; i < resultsItem.length; i++) {
                const item = resultsItem[i];
                for (let j = 0; j < item.childNodes.length; j++) {
                    const node = item.childNodes[j];
                    if (node.parentNode.innerText.match(/Promoted/)) {
                        node.parentNode.removeChild(node);
                    }
                }
            }
        }
        e.stopPropagation();
    });
}