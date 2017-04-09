import React from 'react';
import { Router, Route, Link } from 'react-router';
import EventCard from './EventCard';
import Filter from './Filter';
import EventActions from '../actions/Event';
import EventStore from '../stores/Event';


class MainPage extends React.Component {

    constructor(props) {

        super(props);

        this.__changeEvent = this._onChange.bind(this);

        this.state = {};
    }
    
    componentDidMount() {
        EventStore.addChangeListener(this.__changeEvent);
        EventActions.getEvents();
    }

    componentWillUnmount() {
        EventStore.removeChangeListener(this.__changeEvent);
    }

    _onChange() {
       this.setState(EventStore.getEvents());
    }

    render() {
        if(!this.state.events) {
            return null;
        }
        return (
            <div>
                <div className="navbar">
                    <span className="logo">MinskGo</span>
                </div>
                <button className="btn-round btn-round--filter"><i className="fa fa-filter" aria-hidden="true"></i></button>

                <div className="wrapper">
                    <div className="cards">
                        {this.state.events.map((event, key) => {
                            return <EventCard key={key} data={event} />
                        })}
                    </div>
                    <Filter />
                </div>

               <div className="preview" id="preview"></div>
            </div>
        );
    }
}

export default MainPage;
