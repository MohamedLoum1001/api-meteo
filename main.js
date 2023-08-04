const APIKEY = `675a69f169c1c56116a8bf1ce46d02cc`;

// Appel  à l'API openwaether avec ville en paramettre de foncton
let apicall = function (city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

    fetch(url).then((response) =>
        response.json().then((data) => {
            console.log(data);
            document.querySelector('#city').innerHTML = data.name;
            document.querySelector('#temp').innerHTML =
                "<i class='fa-sharp fa-solid fa-temperature-high'></i>" + data.main.temp + `°`;
            document.querySelector('#humidity').innerHTML =
                "<i class='fa-sharp fa-solid fa-droplet'></i>" + data.main.humidity + `%`;

            document.querySelector('#wind').innerHTML =
                "<i class='fa-solid fa-wind'></i>" + data.wind.speed + `km/h`;
        })
    )
    .catch((err) => console.log("Erreur : " + err));

};

// Ecouteur d'événement sur la soumission du formulaire
document.querySelector("form").addEventListener('submit', function (e) {
    e.preventDefault();
    let ville = document.querySelector('#inputCity').value;
    apicall(ville);
});
apicall('Dakar');