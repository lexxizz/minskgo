import React from 'react';
import ReactDOM       from 'react-dom';

class Feature extends React.Component {

    constructor(props) {
        super(props);

        this.state = {visible: false};

       // this.__changeEvent = this._onChange.bind(this);
        this.__keyUpEvent = this._onKeyUp.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keyup", this.__keyUpEvent, false);
    }

    componentWillUnmount() {
        document.removeEventListener("keyup", this.__keyUpEvent, false);
    }


    _closeDialog(e) {
        e.preventDefault();
        this._close();
    }

    _close() {
        let elem = document.getElementById('feature');
        setTimeout((() => {
            ReactDOM.unmountComponentAtNode(elem);
        }).bind(this), 0.00001);
    }

    _onKeyUp(e) {
        e.preventDefault();
        if(e.which == 27) {
            this._close();
        }
    }

    _clickOutside(e) {
        if(e.target.className == 'popup__lightbox') {
            this._close();
        }
    }

    render() {

        return (
            <div className="features">
                <div className="features__close" onClick={this._close.bind(this)}><span className="fa fa-close"></span></div>
                <div className="features__title">Уже в приложении:</div>
                <ul className="features__list">
                    <li className="features__item"><i className="fa fa-check-circle-o" aria-hidden="true"></i><span className="features__text">Сбор событий</span></li>
                    <li className="features__item"><i className="fa fa-check-circle-o" aria-hidden="true"></i><span className="features__text">Фильтрация событий</span></li>

                </ul>
                <div className="features__title">На подходе:</div>
                <div className="features__list">
                    <li className="features__item features__item--disabled"><i className="fa fa-check-circle-o" aria-hidden="true"></i><span className="features__text">Кратное расширение базы событий</span><span className="features__text features__text--gray">(апрель)</span></li>
                    <li className="features__item features__item--disabled"><i className="fa fa-check-circle-o" aria-hidden="true"></i><span className="features__text">Расширенные настройки фильтров</span><span className="features__text features__text--gray">(апрель)</span></li>
                    <li className="features__item features__item--disabled"><i className="fa fa-check-circle-o" aria-hidden="true"></i><span className="features__text">Личный кабинет</span><span className="features__text features__text--gray">(апрель)</span></li>
                    <li className="features__item features__item--disabled"><i className="fa fa-check-circle-o" aria-hidden="true"></i><span className="features__text">Возможность добавлять в избранное</span><span className="features__text features__text--gray">(апрель)</span></li>
                    <li className="features__item features__item--disabled"><i className="fa fa-check-circle-o" aria-hidden="true"></i><span className="features__text">Возможность делиться с друзьями</span><span className="features__text features__text--gray">(апрель)</span></li>
                    <li className="features__item features__item--disabled"><i className="fa fa-check-circle-o" aria-hidden="true"></i><span className="features__text">Индивидуальная email-рассылка</span><span className="features__text features__text--gray">(апрель)</span></li>
                    <li className="features__item features__item--disabled"><i className="fa fa-check-circle-o" aria-hidden="true"></i><span className="features__text">Скидки на платные события</span><span className="features__text features__text--gray">(май)</span></li>


                </div>
            </div>
        );
    }

}

export default Feature;