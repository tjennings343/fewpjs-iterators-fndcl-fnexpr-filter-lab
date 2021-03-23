// Code your solution here
function findMatching(name, inp){
    return name.filter(n => n.toLowerCase() === inp.toLowerCase())
}

function fuzzyMatch(arr, str){
    return arr.filter(n => n.toLowerCase()[0] === str.toLowerCase()[0])
}

function matchName(arr, str){
    return arr.filter( name => name.name === str)
}