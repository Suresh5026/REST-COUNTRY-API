const restAPI = "https://restcountries.com/v3.1/all";


var fet = fetch(restAPI)
  .then((res) => res.json())
  .then((data) => {
    
    data.map((value) => {
      var values = {
        ...value,
        name: value.name.common,
        flag: value.flags.png,
        code: value.cioc,
        capital: value.capital,
        region: value.region,
        population: value.population,
        latitude: value.latlng[0],
        longitude: value.latlng[1]

      };
      createCountry(values);
      
    })
  })
  
  
   
function createCountry({ name, flag, code, capital, region, population,latitude,longitude }) {
   
  document.body.innerHTML += 
  ` <div class="container">
    <div class="row col-1g-4 col-sm-12">
    <div class="card-header">
    <h1 id="title" class="text-center">${name}</h1>
    <img src="${flag}" class="flag" alt="${name}'Flag image">
    </div>
 
  <div class="card-body car" >
  
  <p><span>Captial :</span> ${capital}</p>
  <p><span>Region :</span> ${region}</p>
  <p><span>Country Code :</span>${code}</p>
  <a href="#" class="btn btn-primary" onclick=(block(${latitude},${longitude},${name})) >Click for Weather</a>
 <div id=${name}>   </div>
  
 
  </div>
</div>
</div>
`
}



function block(lat,lng,name){

  var weatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=06e423ec0af839c485470951f60c3f6b`
   
  console.log(name)
 fetch(weatherAPI)
 .then((response) => response.json())
 .then((data)=> {
    alert( `
    For ${name.id}  
    Current Humidity is ${data.main.humidity}
    Current Pressure is ${data.main.pressure}
    Current Temperature is ${data.main.temp}
    `)
 })

     
               
    
}
  
document.addEventListener("click",(event) => event.preventDefault())
