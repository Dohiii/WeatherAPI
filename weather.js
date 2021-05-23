class Weather {
    constructor(name, country) {
        this.apiKey = '8590f81388fe3b7daea4148c331f37a4';
        this.name = name;
        this.country = country;
    }

    //fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.name}&appid=${this.apiKey}`)

        const responseData = await response.json();
        return responseData;
    }
    //Change weather location
    changeLocation(name, country) {
        this.name = name;
        this.state = country;
    }
}