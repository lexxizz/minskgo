import React from 'react';
import { Router, Route, Link } from 'react-router';


class EventCard extends React.Component {


    render() {
        return (
            <div className="card">
                <img src="http://static.relax.by/images/common/afisha/logos/a40ff998c32f23447b1cfe257475011f.jpg" alt="" className="card__img" />
                <a href="#" className="card__content">
                    <h3 className="h3">Завтрак с экспертом Европейской Академии Творчества</h3>
                    <span className="card__like"><i className="fa fa-heart-o" aria-hidden="true"></i></span>
                    <span className="card__price"><i className="fa fa-usd" aria-hidden="true"></i></span>
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
