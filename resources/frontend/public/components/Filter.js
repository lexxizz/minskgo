import React from 'react';
import { Router, Route, Link } from 'react-router';


class Filter extends React.Component {


    render() {
        return (
            <div className="filter">
                <div className="filter__section">
                    <div className="filter__title">Стоимость</div>
                    <div className="checkbox">
                        <input type="checkbox" id='check1' className="checkbox__input" />
                        <label htmlFor="check1" className="checkbox__label"><i className="fa fa-usd" aria-hidden="true"></i></label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" id='check2' className="checkbox__input checkbox__input--pay" />
                        <label htmlFor="check2" className="checkbox__label"><i className="fa fa-usd" aria-hidden="true"></i></label>
                    </div>
                </div>
                <div className="filter__section">
                    <div className="filter__title">Даты</div>
                    <div className="input__line">
                        <input type="text" className="input input__date" />
                    </div>
                </div>
                <div className="filter__section">
                    <div className="filter__title">Время</div>
                    <div className="slider">
                        <div className="slider__elem" id="range"></div>
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
                    <button className="tags"><span>Искусство</span><span className="tags__count">1237</span></button>
                    <button className="tags">Спорт<span className="tags__count">1237</span></button>
                    <button className="tags">Образование<span className="tags__count">1237</span></button>
                </div>
            </div>
        );
    }
}

export default Filter;
