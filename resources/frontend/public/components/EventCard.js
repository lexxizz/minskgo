import React from 'react';
import { Router, Route, Link } from 'react-router';
import ReactDOM       from 'react-dom';
import Preview from './Preview';


class EventCard extends React.Component {

    _preview(e) {
        e.preventDefault();
        return ReactDOM.render(<Preview event={this.props.data} />, document.getElementById('preview'));
    }

    render() {
        return (
            <div className="card" onClick={((e) => {this._preview(e)})}>
                <img src={this.props.data.image} alt="" className="card__img" />
                <a href="#" className="card__content">
                    <h3 className="h3">{this.props.data.name}</h3>
                    <span className="card__like"><i className="fa fa-heart-o" aria-hidden="true"></i></span>
                    <span className={`card__price ${(['Бесплатно'].indexOf(this.props.data.price) == -1)  ? `card__price--pay` : ``}`}><i className="fa fa-usd" aria-hidden="true"></i></span>
                    <div className="card__tags-wrapper">
                        <button className="tags tags--simple">танцы</button>
                        <button className="tags tags--simple">спорт</button>
                    </div>
                </a>
            </div>
        );
    }
}

export default EventCard;
