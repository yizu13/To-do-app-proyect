let storeField = null;
let field_value = null;
let button = null;
let list_selector = null;
let list = null;
let amountItems = 0;
let counter = null;

function initialize(){
    field_value = document.getElementById("task");
    list_selector = document.getElementById("list");
    list = document.getElementById("list");
    storeField = field_value.value;
    button = document.getElementById("add_button");
    counter = document.getElementById("counter");
}

function addItem(){
    initialize();
    if(list.children.length < 12){
    if(field_value.value.length > 0){
    const item = document.createElement("li");
    list_selector.appendChild(item);
    amountItems = list.children.length;
    item.setAttribute("id", `list_element${amountItems}`);

    const text_span = document.createElement("span")
    text_span.setAttribute("class", "text_span")
    text_span.setAttribute("id",`textNumber${amountItems}`)
    text_span.textContent = storeField;
    text_span.addEventListener("click", lineText);
    text_span.number_list = amountItems;
    item.appendChild(text_span);

    const new_div = document.createElement("div");
    new_div.setAttribute("class","buttons");
    item.appendChild(new_div);

    const delete_button = document.createElement("button");
    delete_button.setAttribute("class", "delete_button");
    delete_button.setAttribute("id", `delete_button${amountItems}`);
    delete_button.addEventListener("click", deleteItem);
    delete_button.number_list = amountItems;
    new_div.appendChild(delete_button);

    const img = document.createElement("img");
    delete_button.appendChild(img);
    img.setAttribute("src", "delete.svg"); img.setAttribute("width","16px"); img.setAttribute("height","16px");

    updateCounter();
    field_value.value = "";
    }
    else{
        alert("Please, enter a task");
    }

 }
 else{
    alert("Task limit reached");
 } 
 if(list.children.length > 11){
    counter.classList.remove("counter_available"); counter.classList.add("counter_limit");
    button.classList.add("unavailable_add_button"); button.classList.remove("add_button")
    button.disabled = true;
 }
    

}

function deleteItem(e){
    initialize();
    const current_position = e.currentTarget.number_list;
    document.getElementById(`list_element${current_position}`).remove();
    updateCounter();
    if(list.children.length < 12){
        button.disabled = false;
        counter.classList.remove("counter_limit"); counter.classList.add("counter_available");
        button.classList.remove("unavailable_add_button"); button.classList.add("add_button")
    }
}

function lineText(e){
    initialize();
    e.currentTarget.classList.toggle("line_in_text");
}

function updateCounter(){
    initialize();
    amountItems = list.children.length;
    counter.textContent = amountItems;
}

function delete_all(){
    initialize();
    const all_items = list.children.length;
    for(let index = 1; index <= all_items; index++){
        document.getElementById(`list_element${index}`).remove();
    }
    counter.classList.remove("counter_limit"); counter.classList.add("counter_available");
    button.classList.remove("unavailable_add_button"); button.classList.add("add_button");
    button.disabled = false;
    updateCounter();
}
