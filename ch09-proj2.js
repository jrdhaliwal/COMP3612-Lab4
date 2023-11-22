/* add your code here */
document.addEventListener("DOMContentLoaded", function() {
    const data = JSON.parse(content);
    const listContainer = document.querySelector("ul");
    const node = document.querySelector("#paintings");

    for(let d of data) {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = `images/small/${d.id}.jpg`;
        img.dataset.id = d.id;

        li.appendChild(img);
        listContainer.appendChild(li);
    }

    node.addEventListener("click", function(e) {
        if(e.target.nodeName == "IMG") {
            fill(e);
        }
    })

    function fill(event) {
        const figureContainer = document.querySelector("figure");
        figureContainer.innerHTML = "";
        const id = event.target.dataset.id;
        const selectedID = data.find(data => data.id == id)

        figureContainer.innerHTML = `<img src="images/large/${id}.jpg">`;
        document.querySelector("#title").textContent = selectedID.title;
        document.querySelector("#artist").textContent = selectedID.artist;
        
        //let num = 0;

        for(let feature of selectedID.features) {
            const div = document.createElement("div");
            div.className = "box";
        
            const left = feature.upperLeft[0];
            const top = feature.upperLeft[1];
            const width = feature.lowerRight[0] - left;
            const height = feature.lowerRight[1] - top;

            div.style.position = "absolute";
            div.style.left = `${left}px`;
            div.style.top = `${top}px`;
            div.style.width = `${width}px`;
            div.style.height = `${height}px`;

            div.addEventListener("mouseover", function(e) {
                document.querySelector("#description").textContent = feature.description;
            })

            div.addEventListener("mouseout", function(e) {
                document.querySelector("#description").textContent = "";
            }) 

            figureContainer.appendChild(div);
        }


    }
})