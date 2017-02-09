import React, {Component} from 'react';
import forecaster from '../services/forecaster';
import WeatherDay from './weatherDay';

// Where I'm writting this from :D
const CITY_NAME = 'Tavira';
const COUNTRY_CODE = 'PT';

class Weather extends Component {

    constructor() {
        super();
        // Would prefer not to have isLoading and just have an obj or null
        // to avoid out of sync problems
        // but this can ocasionally be clearer
        // and really depends on personal style
        this.state = { isLoading: true };

        forecaster.setCity(CITY_NAME)
        forecaster.setCountryCode(COUNTRY_CODE);

        // Could do this with promisses but it's the wrong place
        // In a real world redux app we'd be putting this onto the state
        forecaster.setOnData(this.onData.bind(this));
    }

    componentDidMount() {
        // Having this in the constructor creats a race condition
        // where the data would return before the component has mounted
        // Having it here makes us lose a few ms before construction and mounting
        // Best solution would be having a store and storing the info there
        // It seems overkill for this exercise though
        forecaster.query();
    }

    onData(data) {
        this.setState({
            isLoading: false,
            data
        })
    }

    render() {
        const { isLoading, data } = this.state;
        return (
            <section className="wrapper">
                <h1> {`${CITY_NAME}, ${ COUNTRY_CODE }` }</h1>
                {
                    isLoading ? 'Loading ... ' : data.map((entry, index) => (
                        <WeatherDay key={index} data={entry} />
                    ))
                }
            </section>
        );
    }
}

export default Weather;
