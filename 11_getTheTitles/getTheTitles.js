const getTheTitles = function(arr) {
    let titles = arr.map(findTitle);
    return titles;

};

function findTitle(dict) {
    return dict["title"];
}

// Do not edit below this line
module.exports = getTheTitles;
