// for $.ajax
import $ from "jquery";

const URL_BASE = 'http://api.openweathermap.org/data/2.5/forecast';
// this would be privately kept.
const API_KEY = '4ee67c433fcd920b1180452c267ea5e1';
// Could be moved below if we ever wanted kelvin (and set from the ui)
const units = 'metric';

class Forecaster {

    setCity(city){
        this.city = city;
    }

    setCountryCode(cc) {
        this.cc = cc;
    }

    setOnData(onData) {
        this.onData = onData;
    }

    query() {
            // url creation could be moved to a function, would make testing easier
            $.ajax(`${URL_BASE}?q=${this.city},${this.cc}&mode=json&appid=${API_KEY}&units=${units}`, {
            success: (rsp) => {
                this.onData(this.format(rsp.list));
            },
            error: (rsp) => {
                // todo: error handling
                console.error('error: ', rsp.responseText);
            }
        })
    }

    // This service shouldn't format data for a specific component
    // but in this case it's not used by anything else and it won't grow.
    format(list) {
        const days = [];
        const indexMap = {};

        list.forEach((entry) => {
            const { dt_txt, main } = entry;
            const { temp, temp_max, temp_min } = main;

            const key = new Date(dt_txt).toDateString();
            const i = indexMap[key] = indexMap[key] !== undefined ? indexMap[key] : days.length;

            days[i] = days[i] ? days[i] : [];
            days[i].push({
                timestamp: dt_txt,
                temp,
                temp_max,
                temp_min
            });
        });
        return days;
    }

}

// export singleton, we don't have state so don't need instances
export default new Forecaster();
