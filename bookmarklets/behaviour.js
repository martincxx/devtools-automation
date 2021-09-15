//toggle al todos
document.querySelector("#toggle-all").click()

//another using id
document.getElementById('toggle-all').click();
//click kabitadez
document.querySelector("ul.todo-list > li:nth-child(1) input.toggle").click()
//click oak
document.querySelector("ul.todo-list > li:nth-child(2) input.toggle").click()


//delete todo
document.querySelector("ul.todo-list > li:nth-child(1) button.destroy").click()

//clear completed
document.querySelector("button.clear-completed").click()

//Create a new todo
document.querySelector("input.new-todo").value = "Aguinala";
document.querySelector("input.new-todo").dispatchEvent(new Event('change', {'bubbles':true}))

//Use filters with order: all, active, completed
document.querySelector("ul.filters > li:nth-child(1) > a").click()
document.querySelector("ul.filters > li:nth-child(2) > a").click()
document.querySelector("ul.filters > li:nth-child(3) > a").click()

//filters with hashchange events

/*
note: After inspecting the element, don't forget checking the event listeners tab
    of the DevTools
    https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event
*/

location.hash = "/";
location.hash = "/active";
location.hash = "/completed";

//edit an existing todo
    // 1 dblclick
    document.querySelector("ul.todo-list > li:nth-child(1) label").dispatchEvent(new Event('dblclick', {'bubbles':true}));
    // 2 send new text
    document.querySelector("ul.todo-list > li:nth-child(1) .edit").value = "Angelnandez";
    // 3 click outside
    document.querySelector("ul.todo-list > li:nth-child(1) .edit").dispatchEvent(new Event('blur'));


    //insert all footballers

var footballers = ["Oak Delmalo", "Kabitadez","Alexie Aguinala", "Hursaido", "Cecadoz", "Porso", "Georry", "Delacrez",
"Anciobi", "Carlona", "Charo", "Mencis", "Gomec", "Angelnandez", "Welk Sankz", "Tenolo", "Espionasa", "Gulero", "Ogosilen", "Caldamillo",
"Aidin", "Sagarillo", "Vickry"];

for(var iss = 0; iss<footballers.length;iss++){
    document.querySelector("input.new-todo").value = footballers[iss];
    document.querySelector("input.new-todo").dispatchEvent(new Event('change', {'bubbles':true}))
}

//click on them
var toggles = document.querySelectorAll('.toggle')
for(togglepos = 0;togglepos<toggles.length; togglepos++){
toggles[togglepos].click();
}