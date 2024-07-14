const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}
function appendCat(name) {
    return [...cats, name]
}
function prependCat(name) {
    const copyOfCats = cats.slice();
    copyOfCats.splice(0, 0, name);
    return copyOfCats;
}
function removeLastCat() {
    const copyOfCats = cats.slice();
    copyOfCats.splice(copyOfCats.length - 1, 1);
    return copyOfCats;
}
function removeFirstCat() {
    const copyOfCats = cats.slice();
    copyOfCats.splice(0, 1);
    return copyOfCats;
}