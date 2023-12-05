let polc = ["szilva", "alma", "kajszi",];
let bolt = ["füge", "birs", "málna", "dió"];
let polcDiv = document.getElementById("polc");
let boltDiv = document.getElementById("bolt");
let counter = 0;

function addElements() {

    for (let index = 0; index < polc.length; index++) {
        let li = document.createElement("li");
        let idSel = "polc" + counter;
        li.innerHTML = polc[index];
        li.id = idSel;
        li.onclick = function () { selected(idSel) }
        li.ondblclick = function () { moveOver(idSel,"polc",index) }
        polcDiv.appendChild(li);
        counter++;
    }
    for (let index = 0; index < bolt.length; index++) {
        let li = document.createElement("li");
        let idSel = "bolt" + counter;
        li.innerHTML = bolt[index];
        li.id = idSel;
        li.onclick = function () { selected(idSel) }
        li.ondblclick = function () { moveOver(idSel,"bolt",index+polc.length-1) }
        boltDiv.appendChild(li);
        counter++;
    }
}
function selected(idName){
    document.getElementById(idName).classList.toggle("selected");
}
function moveOver(idSel,local,counterLi){
    let selectedLi = document.getElementById(idSel);
    if (local == "bolt") {
        polcDiv.appendChild(selectedLi)
        selectedLi.id = "polc" + counterLi
    }
    else{
        boltDiv.appendChild(selectedLi)
        selectedLi.id = "bolt" + counterLi
    }
}
addElements()





















































/*function addElements(polc, bolt) {
    for (let index = 0; index < polc.length; index++) {
        let li = document.createElement("li");
        li.innerHTML = polc[index];
        li.className == "none";
        li.id = "polc"+counter;
        li.onclick = function () {selected("polc"+counter)}
        polcDiv.appendChild(li);
        counter++;
    }
    for (let index = 0; index < bolt.length; index++) {
        let li = document.createElement("li");
        li.innerHTML = bolt[index];
        li.className = "none";
        li.id = "bolt"+counter;
        li.onclick = function () {selected("bolt"+counter)}
        li.ondblclick = function () {moveOver("bolt"+counter,"bolt",counter)}
        boltDiv.appendChild(li);
        counter++;
    }
}
function selected(idName){
    let selectedElem = document.getElementById(idName);
    selectedElem.style.fontWeight = "bolder";
    if (selectedElem.className[0] == "none") {
        selectedElem.className[0] = "selected";
    }
    else{
        selectedElem.className[0] = "none"
    }
}
function moveOver(idName,location,index){
    let selectedElem = document.getElementById(idName);
    if (location == "polc") {
        polcDiv.removeChild(selectedElem);
        boltDiv.appendChild(selectedElem);
    }
    else{
        selectedElem.id = "polc"+document.getElementById(bolt).length
        polcDiv.appendChild(selectedElem);
    }
}
addElements(polc,bolt);*/