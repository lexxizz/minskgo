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

    render() {console.log(this.state);
        return (
            <div>
                <div className="navbar">
                    <span className="logo">MinskGo</span>
                </div>
                <button className="btn-round btn-round--filter"><i className="fa fa-filter" aria-hidden="true"></i></button>

                <div className="wrapper">
                    <div className="cards">
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                    </div>
                    <Filter />
                </div>

                <div className="preview">
                    <div className="preview__wrapper">
                        <div className="preview__close"><span className="fa fa-close"></span></div>
                        <div className="preview__head">
                            <div className="preview__img-wrapper">
                                <img src="http://static.relax.by/images/common/afisha/logos/a40ff998c32f23447b1cfe257475011f.jpg" alt="" className="preview__img" />
                            </div>
                            <div className="preview__info">
                                <div className="preview__info-top">
                                    <h2 className="h2">Завтрак с экспертом Европейской Академии Творчества</h2>
                                    <div className="time__wrapper">
                                        <time className="time">22.01.2016</time>
                                        <time className="time">22:00</time>
                                    </div>
                                    <div className="address"><i className="fa fa-map-marker" aria-hidden="true"></i>Минск, ул. Якуба Коласа 45/2</div>
                                    <div className="preview__tags-wrapper">
                                        <button className="tags tags--simple">танцы</button>
                                        <button className="tags tags--simple">спорт</button>
                                        <button className="tags tags--simple">знакомства</button>
                                    </div>
                                </div>
                                <div className="preview__info-bottom">
                                    <div className="preview__action">
                                        <button className="btn">
                                            <span className="preview__go-text">Иду!</span>
                                            <span className="fa fa-heart"></span>
                                            <span className="preview__go-text preview__go-text--count">12</span>
                                        </button>
                                        <button className="btn">
                                            <span className="preview__invite-text">Пригласить</span>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="preview__description">
                            <section className="wysiwyg"><p>Сеть детских развлекательных центров  и  объявляют  благотворительную акцию «Карамелька – детям»! 6 апреля 2017 года дети-инвалиды могут посетить любой из сети детских развлекательных центров  и  бесплатно при предъявлении удостоверения инвалида. <br /><br />
                                Три большие современные игровые площадки  и  будут принимать маленьких гостей целый день с 10:00 до 22:00. </p>
                                <p>В рамках акции дети-инвалиды могут посетить бесплатно:<br /></p>
                                <ul>
                                    <li>Огромный лабиринт с множеством интересных препятствий, горками, скалолазкой, батутом, бассейном с шариками, площадкой для пушечной зоны, водный батут, настенные развивающие игровые панели;<br />
                                    </li>
                                    <li>Надувной батут; <br />
                                    </li>
                                    <li>Автодром, XBOX; <br />
                                    </li>
                                    <li>Уарусели и игровые автоматы (на игровую карточку «Карамелька» предоставляется 15,00 руб., залоговая стоимость карточки 2,00 руб.).</li>
                                </ul>
                                В связи с ограниченным количеством участников акции, необходимо обязательно предварительно зарегистрироваться по тел.: <br /><br /> ARENAcity 584-66-66 (МТС, Велком)<br /> Galileo 689-99-77  (МТС, Велком)<br /> ARENAcity 384-55-99 (МТС, Велком)<br /><br />
                                    Дата и время проведения акции: 6 апреля 2017 г. с 10:00 до 22:00  <br /><b>Условия акции:</b> Бесплатное посещение сети детских развлекательных центров  и  при предъявлении удостоверения инвалида.<br /></section>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default MainPage;
