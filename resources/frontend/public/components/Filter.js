import React from 'react';
import { Router, Route, Link } from 'react-router';
import Flatpickr from 'react-flatpickr';
import Nouislider from 'react-nouislider';
import EventActions from '../actions/Event';
import FilterActions from '../actions/Filter';
import FilterStore from '../stores/Filter';
import Request from 'napishem-frontend-utils/modules/Request';


class Filter extends React.Component {

    constructor(props) {

        super(props);

        this.__changeEvent = this._onChange.bind(this);

        this.state = {current_date: null, filters: {categories: []} };
    }

    componentDidMount() {
        this.__getCategories();
        FilterStore.addChangeListener(this.__changeEvent);
    }

    componentWillUnmount() {
        FilterStore.removeChangeListener(this.__changeEvent);
    }

    _onChange() {
        this.setState({filters: FilterStore.getFilters()});
        this.__getEvents();
    }

    _changeDate(e, date) {
        FilterActions.setFilterDate(date);
    }

    __getEvents() {
        // let filter = {date: this.state.current_date, categories: this.state.active_categories,
        //                 free: this.state.price_free, not_free: this.state.price_not_free,
        //                 start_time: this.state.start_time, finish_time: this.state.finish_time
        // };

        EventActions.getEvents(FilterStore.getFilters());
    }

    __getCategories() {
        this.__request('/ajax/categories/all')
    }

    __request(url) {

        var r = new Request(url);

        r.send(((response) => {
            this.setState(response);
        }).bind(this));
    }

    inArray(needle, haystack) {
        var length = haystack.length;
        for (var i = 0; i < length; i++) {
            if (haystack[i] == needle) return true;
        }
        return false;
    }

    __toogleCategory(e, id) {
        FilterActions.setFilterCategory(id);
    }

    _toogleFree(e) {
        FilterActions.setFilterFree(!e.target.checked);
    }

    _checkPay(e) {
        FilterActions.setFilterNotFree(!e.target.checked);
    }

    _updateTime(e, m) {
        //this.setState({time: {start: Math.round(e[0]), end: Math.round(e[1])}});
        document.getElementById('sliderValueMin').innerHTML = Math.round(e[0]);
        document.getElementById('sliderValueMax').innerHTML = Math.round(e[1]);
        //this.setState({start_time: Math.round(e[0]), finish_time: Math.round(e[1])});
    }

    render() {
        return (
            <div className={`filter ${this.props.mobile_active ? `filter--active` : ``}`}>
                <div className="filter__section">
                    <div className="filter__title">Стоимость</div>
                    <div className="checkbox">
                        <input type="checkbox" id='check1' className="checkbox__input" onClick={((e) => {this._toogleFree(e)}).bind(this)}/>
                        <label htmlFor="check1" className="checkbox__label"><i className="fa fa-usd" aria-hidden="true"></i></label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" id='check2' className="checkbox__input checkbox__input--pay" onClick={((e) => {this._checkPay(e)}).bind(this)}/>
                        <label htmlFor="check2" className="checkbox__label"><i className="fa fa-usd" aria-hidden="true"></i></label>
                    </div>
                </div>
                <div className="filter__section">
                    <div className="filter__title">Даты</div>
                    <div className="input__line">
                        <Flatpickr className='input input__date' onChange={((e, k) => {this._changeDate(e, k)}).bind(this)} />
                    </div>
                </div>
                <div className="filter__section">
                    <div className="filter__title">Время</div>
                    <div className="slider">
                        <div className="slider__elem">
                    <Nouislider range={{min: 0, max: 24}} start={[0, 100]} onUpdate={((e, m) => {this._updateTime(e, m)}).bind(this)}/>
                        </div>
                            <div className="slider__value">
                        <div className="slider__text">C</div>
                        <div className="slider__text slider__text--bold" id="sliderValueMin"></div>
                        <div className="slider__text">до</div>
                        <div className="slider__text slider__text--bold" id="sliderValueMax"></div>
                    </div>
                        </div>
                </div>
                <div className="filter__section">
                    <div className="filter__title">Категории</div>
                    <button className={`tags ${this.inArray(1, this.state.filters.categories)? `tags--active` : ``}`} onClick={((e) => {this.__toogleCategory(e, 1)}).bind(this)}><span>Развлечения</span><span className="tags__count">1237</span></button>
                    <button className={`tags ${this.inArray(2, this.state.filters.categories)? `tags--active` : ``}`} onClick={((e) => {this.__toogleCategory(e, 2)}).bind(this)}>Спорт<span className="tags__count">1237</span></button>
                    <button className={`tags ${this.inArray(4, this.state.filters.categories)? `tags--active` : ``}`} onClick={((e) => {this.__toogleCategory(e, 4)}).bind(this)}>Образование<span className="tags__count">1237</span></button>
                    <button className={`tags ${this.inArray(3, this.state.filters.categories)? `tags--active` : ``}`} onClick={((e) => {this.__toogleCategory(e, 3)}).bind(this)}>Другое<span className="tags__count">1237</span></button>
                </div>
            </div>
        );
    }
}

export default Filter;
