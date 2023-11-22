/* add your code here */
document.addEventListener("DOMContentLoaded", function() {
    const data = JSON.parse(content);
    const listContainer = document.querySelector("ul");
    const node = document.querySelector("#paintings");

    for(let d of data) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = `images/small/${d.id}.jpg`;
        let paintingID = d.id;
        li.id = paintingID;

        li.appendChild(img);
        listContainer.appendChild(li);
    }

    node.addEventListener("click", function(e) {
        if(e.target.nodeName == "LI") {

        }
    })

    function fill(event) {
        const figureContainer = document.querySelector("figure").innerHTML = "";
        const id = event.target.id;
        const selectedID = data.find(data => data.id == id)
    }
})