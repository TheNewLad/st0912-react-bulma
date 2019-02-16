import React, { Component } from 'react';
import sugar from 'sugar';


const hours = {
    0: {
        open: '9AM',
        close: '4PM',
    },
    1: {
        open: null,
        close: null,
    },
    2: {
        open: '9AM',
        close: '5PM',
    },
    3: {
        open: '9AM',
        close: '5PM',
    },
    4: {
        open: '9AM',
        close: '7PM',
    },
    5: {
        open: '9AM',
        close: '5PM',
    },
    6: {
        open: '8AM',
        close: '6:30PM',
    },
};
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const now = (sugar.Date.create(new Date().toLocaleString([], { timeZone: "America/New_York" })));
const open = sugar.Date.create(`${days[now.getDay()]} ${hours[now.getDay()].open}`);
const close = sugar.Date.create(`${days[now.getDay()]} ${hours[now.getDay()].close}`);

class Hours extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
    }

    componentDidMount() {
        this.setState({ isOpen: sugar.Date.isBetween(now, open, close) });
    }

    render() {
        const tableRows = days.map((day, index) => {
            return (
                <tr key={index} className={now.getDay() === index ? 'is-selected' : ''}>
                    <td className="has-text-centered">{day}</td>
                    <td className="has-text-centered">
                        {hours[index].open ? `${hours[index].open}\u2014` : 'CLOSED'}
                        {hours[index].close ? hours[index].close : ''}
                    </td>
                </tr>
            );
        });
        return (
            <div className="columns">
                <div className="column is-one-third is-offset-1" data-aos="fade-down">
                    <img className="hours-image" src={this.state.isOpen ? require('./images/salon-open.svg') : require('./images/salon-closed.svg')} alt="" />
                    {this.state.isOpen && <p className="has-text-centered">Questions/Make an Appointment <br /> Give us a call: <a href="tel:+19736550125">(973) 655-0125</a></p>}
                </div>
                <div className="column is-one-third is-offset-2" data-aos="fade-up">
                    <table className="table is-fullwidth" >
                        <tbody>
                            <tr>
                                <th colSpan="2" className="subtitle has-text-centered">
                                    Business Hours
                                </th>
                            </tr>
                            {tableRows}
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}

export default Hours