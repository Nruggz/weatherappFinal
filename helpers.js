const codeToIcon = (code, dt) => {
    let now = new Date(dt * 1000);
    let hour = now.getHours();

    const icons = {
        200:    [ 'wi-day-storm-showers', 'wi-night-alt-storm-showers' ],
        201:    [ 'wi-day-storm-showers', 'wi-night-alt-storm-showers' ],
        202:    [ 'wi-day-storm-showers', 'wi-night-alt-storm-showers' ],
        210:    [ 'wi-day-storm-showers', 'wi-night-alt-storm-showers' ],
        211:    [ 'wi-day-storm-showers', 'wi-night-alt-storm-showers' ],
        212:    [ 'wi-day-storm-showers', 'wi-night-alt-storm-showers' ],
        221:    [ 'wi-day-storm-showers', 'wi-night-alt-storm-showers' ],
        230:    [ 'wi-day-storm-showers', 'wi-night-alt-storm-showers' ],
        231:    [ 'wi-day-storm-showers', 'wi-night-alt-storm-showers' ],
        232:    [ 'wi-day-storm-showers', 'wi-night-alt-storm-showers' ],

        300:    [ 'wi-day-rain-mix', 'wi-night-alt-rain-mix' ],
        301:    [ 'wi-day-rain-mix', 'wi-night-alt-rain-mix' ],
        302:    [ 'wi-day-rain-mix', 'wi-night-alt-rain-mix' ],
        310:    [ 'wi-day-rain-mix', 'wi-night-alt-rain-mix' ],
        311:    [ 'wi-day-rain-mix', 'wi-night-alt-rain-mix' ],
        312:    [ 'wi-day-rain-mix', 'wi-night-alt-rain-mix' ],
        313:    [ 'wi-day-rain-mix', 'wi-night-alt-rain-mix' ],
        314:    [ 'wi-day-rain-mix', 'wi-night-alt-rain-mix' ],
        321:    [ 'wi-day-rain-mix', 'wi-night-alt-rain-mix' ],

        500:    [ 'wi-day-rain', 'wi-night-alt-rain' ],
        501:    [ 'wi-day-rain', 'wi-night-alt-rain' ],
        502:    [ 'wi-day-rain', 'wi-night-alt-rain' ],
        503:    [ 'wi-day-rain', 'wi-night-alt-rain' ],
        504:    [ 'wi-day-rain', 'wi-night-alt-rain' ],
        511:    [ 'wi-day-rain', 'wi-night-alt-rain' ],
        520:    [ 'wi-day-rain', 'wi-night-alt-rain' ],
        521:    [ 'wi-day-rain', 'wi-night-alt-rain' ],
        522:    [ 'wi-day-rain', 'wi-night-alt-rain' ],
        531:    [ 'wi-day-rain', 'wi-night-alt-rain' ],

        600:    [ 'wi-day-snow', 'wi-night-alt-snow' ],
        601:    [ 'wi-day-snow', 'wi-night-alt-snow' ],
        602:    [ 'wi-day-snow', 'wi-night-alt-snow' ],
        611:    [ 'wi-day-snow', 'wi-night-alt-snow' ],
        612:    [ 'wi-day-snow', 'wi-night-alt-snow' ],
        613:    [ 'wi-day-snow', 'wi-night-alt-snow' ],
        615:    [ 'wi-day-snow', 'wi-night-alt-snow' ],
        616:    [ 'wi-day-snow', 'wi-night-alt-snow' ],
        620:    [ 'wi-day-snow', 'wi-night-alt-snow' ],
        621:    [ 'wi-day-snow', 'wi-night-alt-snow' ],
        622:    [ 'wi-day-snow', 'wi-night-alt-snow' ],

        701:    [ 'wi-dust', 'wi-dust' ],
        711:    [ 'wi-dust', 'wi-dust' ],
        721:    [ 'wi-dust', 'wi-dust' ],
        731:    [ 'wi-dust', 'wi-dust' ],
        741:    [ 'wi-dust', 'wi-dust' ],
        751:    [ 'wi-dust', 'wi-dust' ],
        761:    [ 'wi-dust', 'wi-dust' ],
        762:    [ 'wi-dust', 'wi-dust' ],
        771:    [ 'wi-dust', 'wi-dust' ],
        781:    [ 'wi-tornado', 'wi-tornado' ],


        800:    [ 'wi-day-sunny', 'wi-night-clear' ],
        801:    [ 'wi-day-cloudy', 'wi-night-alt-cloudy' ],
        802:    [ 'wi-day-cloudy', 'wi-night-alt-cloudy' ],
        803:    [ 'wi-day-cloudy', 'wi-night-alt-cloudy' ],
        804:    [ 'wi-day-cloudy', 'wi-night-alt-cloudy' ]
    }

    let m;

    if(hour >= 8 && hour <= 18) {
        m = 0;
    } else {
        m = 1;
    }


    return icons[code][m];
    
}



const getWeatherDescription = (current) => {

    let high = Math.round(current.temp.max);
    let low = Math.round(current.temp.min);

    let weather = current.weather[0].id;

    let pop = current.pop * 100;

    let wind_speed = Math.round(current.wind_speed);
    let wind_deg = current.wind_deg;
    let wind_gust = Math.round(current.wind_gust);

    let description = "";


    let unknown = false;
    // Main weather description
    switch (weather) {
        case 200:
            description = description + "Thunderstorm and light rain ";
            break;
        case 201:
            description = description + "Thunderstorm and rain ";
            break;
        case 202:
            description = description + "Thunderstorm and heavy rain ";
            break;
        case 210:
            description = description + "Light thunderstorm ";
            break;
        case 211:
            description = description + "Thunderstorm ";
            break;
        case 212:
            description = description + "Heavy thunderstorm ";
            break;
        case 221:
            description = description + "Ragged thunderstorm ";
            break;
        case 230:
            description = description + "Thunderstorm with light drizzle ";
            break;
        case 231:
            description = description + "Thunderstorm with drizzle ";
            break;
        case 232:
            description = description + "Thunderstorm with heavy drizzle ";
            break;

        case 300:
            description = description + "Light drizzle ";
            break;
        case 301:
            description = description + "Drizzle ";
            break;
        case 302:
            description = description + "Heavy drizzle ";
            break;
        case 310:
            description = description + "Light drizzle rain ";
            break;
        case 311:
            description = description + "Drizzle rain ";
            break;
        case 312:
            description = description + "Heavy drizzle rain ";
            break;
        case 313:
            description = description + "Rain shower and drizzle ";
            break;
        case 314:
            description = description + "Heavy rain shower and drizzle ";
            break;
        case 321:
            description = description + "Shower drizzle ";
            break;

        case 500:
            description = description + "Light rain ";
            break;
        case 501:
            description = description + "Moderate rain ";
            break;
        case 502:
            description = description + "Heavy rain ";
            break;
        case 503:
            description = description + "Very heavy rain ";
            break;
        case 504:
            description = description + "Extreme rain ";
            break;
        case 511:
            description = description + "Freezing rain ";
            break;
        case 520:
            description = description + "Light rain showers ";
            break;
        case 521:
            description = description + "Rain showers ";
            break;
        case 522:
            description = description + "Heavy rain showers ";
            break;
        case 531:
            description = description + "Ragged rain showers ";
            break;

        case 600:
            description = description + "Light snow ";
            break;
        case 601:
            description = description + "Snow ";
            break;
        case 602:
            description = description + "Heavy snow ";
            break;
        case 611:
            description = description + "Sleet ";
            break;
        case 612:
            description = description + "Light sleet ";
            break;
        case 613:
            description = description + "Sleet shower ";
            break;
        case 615:
            description = description + "Light rain and snow mix ";
            break;
        case 616:
            description = description + "Rain and snow mix ";
            break;
        case 620:
            description = description + "Light snow shower ";
            break;
        case 621:
            description = description + "Snow shower ";
            break;
        case 622:
            description = description + "Heavy snow shower ";
            break;
                                                                                                                                                                                                                                                                        
        case 701:
            description = description + "Mist ";
            break;
        case 711:
            description = description + "Smoke ";
            break;
        case 721:
            description = description + "Haze ";
            break;
        case 731:
            description = description + "Sand or dust whirls ";
            break;
        case 741:
            description = description + "Fog ";
            break;
        case 751:
            description = description + "Sand ";
            break;
        case 761:
            description = description + "Dust ";
            break;
        case 762:
            description = description + "Volcanic ash ";
            break;
        case 771:
            description = description + "Squalls ";
            break;
        case 781:
            description = description + "Tornado ";
            break;
                                                                                                                                                                                            


        case 800:
            description = description + "Clear skies ";
            break;
        case 801:
            description += "Partly cloudy ";
            break;
        case 802:
            description += "Scattered clouds ";
            break;
        case 803:
            description += "Mostly cloudy ";
            break;
        case 804:
            description += "Overcast ";
            break;
        default:
            // Unknown code
            unknown = true;
    }

    // Add tempurature
    if(!unknown) {
        description += "with a high of "+high+" and a low of "+low+". ";
    } else {
        description += "High today of "+high+" and a low of "+low+". "
    }

    console.log(pop);
    if(pop > 0) {
        description += "Chance of rain "+pop+"%. "
    }

    let direction = [
        "the North",
        "the Northeast",
        "the East",
        "the Southeast",
        "the South",
        "the Southwest",
        "the West",
        "the Northwest",
        "the North"
    ];

    let index = 1;



    description += wind_speed+" mph winds from " + direction[1] +
                " with gusts up to "+wind_gust+" mph. ";

    
    return description;

}




export { codeToIcon, getWeatherDescription };
