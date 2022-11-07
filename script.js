//model
const handlevogn = [];
let inputUser;
let items = '';

//view
viewContent()
function viewContent() {
    document.getElementById('content').innerHTML = /*html*/ `
    <div> skriv noe i tekstboksen og trykk på knappen for å legge til <br><ul> ${items} </ul></div>
    <input type="text" id="userInput">
    <button onclick="doStuff()">Add Item</button>
    `;
}

//controller
function doStuff() {
    inputUser = document.getElementById('userInput').value;
    handlevogn.push('<li>' + inputUser + '</li>');
    items = '';
    for (let i = 0; i < handlevogn.length; i++) {
        items += handlevogn[i];
        
    }
    console.log(handlevogn);
    viewContent();
}
