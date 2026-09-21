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

catfactbutton = document.getElementById("randomcatfactbtn")
catfacttext = document.getElementById("catfacttext")
if(catfactbutton) {
    catfactbutton.addEventListener('click', function() {
        catfacttext.textContent = "Euhhhh als katten gestresst raken gaan ze schijten op het bed"
    })
}