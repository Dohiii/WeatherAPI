class UI {
    constructor() {
        this.location = document.getElementById('w-location')
        this.desc = document.getElementById('w-desc')
        this.string = document.getElementById('w-string')
        this.icon = document.getElementById('w-icon')
        this.details = document.getElementById('w-details')
        this.humidity = document.getElementById('w-humidity')
        this.dewpoint = document.getElementById('w-dewpoint')
        this.feelsLike = document.getElementById('w-feels-like')
        this.wind = document.getElementById('w-wind')
    }
    paint(weather) {
        this.location.textContent = weather.name;
        this.desc.textContent = weather.sys.country;
        this.string.textContent = `Temp:  ` + weather.main.temp;
        this.feelsLike.textContent = `Feels Like:  ` + weather.main.feels_like;
    }
}