var footballers = ["Oak Delmalo", "Kabitadez", "Alexie Aguinala", "Hursaido", "Cecadoz", "Porso", "Georry", "Delacrez", "Anciobi", "Carlona", "Charo", "Mencis", "Gomec", "Angelnandez", "Welk Sankz", "Tenolo", "Espionasa", "Gulero", "Ogosilen", "Caldamillo", "Aidin", "Sagarillo", "Vickry"];
var iss = 0;
var creatorBot = setInterval(function() {
    document.querySelector("input.new-todo").value = footballers[iss];
    document.querySelector("input.new-todo").dispatchEvent(new Event('change',{
        'bubbles': true
    }));
    iss++;
    if (iss >= footballers.length) {
        clearInterval(creatorBot)
    }
}, 500);
