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

        this.state = {mobile_view: false};
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
    
    _toggleMobileFilter() {
        if(!this.state.mobile_view) {
            this.setState({mobile_view: true});
        }else{
            this.setState({mobile_view: false});
        }
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
                <button className="btn-round btn-round--filter" onClick={this._toggleMobileFilter.bind(this)}><i className="fa fa-filter" aria-hidden="true"></i></button>

                <div className="wrapper">
                    <div className="cards">
                        {this.state.events.map((event, key) => {
                            return <EventCard key={key} data={event} />
                        })}
                    </div>
                    <Filter mobile_active={this.state.mobile_view} />
                </div>

               <div className="preview" id="preview"></div>
            </div>
        );
    }
}

export default MainPage;
