clock = document.getElementById("time");

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}
updateClock();
setInterval(updateClock, 1000);
searchinput = document.getElementById("searchinput")
catfactbutton = document.getElementById("randomcatfactbtn")
catfacttext = document.getElementById("catfacttext")
searchbtn = document.getElementById("searchbtn")

if (searchinput || searchbtn) {
    searchinput.addEventListener('keypress', (key) => {
       if(key.key === 'Enter' && searchinput.value.trim() !== '') {
        window.location.href = `https://duckduckgo.com/?q=${encodeURIComponent(searchinput.value)}`;
       }  
    })
    searchbtn.addEventListener('click', function() {
        window.location.href = `https://duckduckgo.com/?q=${encodeURIComponent(searchinput.value)}`;
       
    })
}


if (catfactbutton && catfacttext) {
    catfactbutton.addEventListener('click', function() {
        catfacttext.textContent = "Finding cat fact...";
        fetch('https://catfact.ninja/fact')
            .then(res => res.json())
            .then(data => {
                catfacttext.textContent = data.fact;
            })
            .catch(() => {
                catfacttext.textContent = "Something went wrong.";
            });
    });
}
