import React, {Component} from 'react';

function getMidDayTemp(data) {
    // if it's today return most recent
    // otherwise return the temp at mid day
    return data.length < 8 ? data[0] : data[4];
}

class WeatherDay extends Component {

    formatTitle(date) {
        const d = new Date(date);
        return `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;
    }

    render() {
        const { data } = this.props;
        const { timestamp, temp, temp_max, temp_min } = getMidDayTemp(data);

        return (
            <section className="weatherDay">
                <header>
                    { this.formatTitle(timestamp) }
                </header>
                <main>
                    <span className="small">{ temp_min }&deg;</span>
                    <h3>{ temp }&deg;</h3>
                    <span className="small">{ temp_max }&deg;</span>
                </main>
                <footer>
                    {
                        data.map((entry, index) => (
                            <div key={index}>
                                <h5>{new Date(entry.timestamp).getHours()}:00</h5>
                                <span>{entry.temp}&deg;</span>
                            </div>
                        ))
                    }
                </footer>
            </section>
        );
    }
}

export default WeatherDay;
