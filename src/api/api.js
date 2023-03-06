const apiKey = "de3bb7e68cc95c63e7231125be8dd3a0"

async function Weather(lat, lon) {
    try {
        const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=pt_br&units=metric`
        const response = await fetch(urlWeather)
        const data = await response.json()
        return data
    }
    catch (err) {
        console.log(err)
    }

}

async function Geo(cityName) {
    try {
        const urlGeo = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&&appid=${apiKey}`
        const response = await fetch(urlGeo)
        const data = await response.json()
        const lat = await data[0].lat
        const lon = await data[0].lon
        return { lat: lat, lon: lon }
    } catch (err) {
        window.alert("[ERRO]: INSIRA UMA CIDADE VÁLIDA")
    }
}

export async function callFlags(country){
    try{
        const urlFlags = `https://countryflagsapi.com/svg/${country}`
        const response = await fetch(urlFlags, {
            method: 'GET',
            mode: 'cors',

        })
        return response
    }catch(err){
        console.log(err)
    }
}

export async function GetWeather(cityName) {
    try {
        const latLon = await Geo(cityName)
        const data = await Weather(latLon.lat, latLon.lon)
        return data
    } catch (err) {
        console.log(err)
    }
}
