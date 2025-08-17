const button=document.getElementById('search_button') 
const input=document.getElementById('city_input')
const cityName=document.getElementById('city-name')
const cityTime=document.getElementById('city-time')
const cityTemp=document.getElementById('city-temp')


//button.addEventListener('click',()=>{

  async function getData(cityName){
   const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=862e76c24e2e4ffb893144912251608&q=${cityName}&aqi=yes`);
//----

//---


   return await promise.json();

  }
  button.addEventListener("click",async() =>{
    const value = input.value;
    const result = await getData(value)
    cityName.innerText =`${result.location.name},${result.location.region},${result.location.country}`
    cityTime.innerText =result.location.localtime
    cityTemp.innerText =result.current.temp_c;
    //console.log(result)
  })
//console.log(city_input.value)  
//})