// get id from html
const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

// If else condition that will confirm input value not empty
const addItem = () => {
    // if you don't write text it will give console
    if (inputBox.value === '') {
        console.log("Dear! write down something")
    }
    else {
        // create li element to write down
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); 
        
        // create a span button 
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData()
}


// create a remove and checked/uncheked function 
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false);


// it will save data in local storage
const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
}


// it will get data from storage
const getData = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}
getData()