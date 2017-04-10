import React from 'react';
import ReactDOM       from 'react-dom';

class Preview extends React.Component {

    constructor(props) {
        super(props);

        this.state = {visible: false};

       // this.__changeEvent = this._onChange.bind(this);
        this.__keyUpEvent = this._onKeyUp.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keyup", this.__keyUpEvent, false);
        document.getElementById('preview').className += ' preview--open';
    }

    componentWillUnmount() {
        document.removeEventListener("keyup", this.__keyUpEvent, false);
    }


    _closeDialog(e) {
        e.preventDefault();
        this._close();
    }

    _close() {
        let elem = document.getElementById('preview');
        setTimeout((() => {
            ReactDOM.unmountComponentAtNode(elem);
        }).bind(this), 0.00001);
        elem.className = 'preview';
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

    getFormattedDate(date) {
        let month = parseInt(date.getMonth())+1;
        month = date.getMonth() < 9 ? '0' + month : month;
        let formatted_date = date.getDate()+'.'+month+'.'+date.getFullYear();
        return formatted_date;
        //this.setState({current_date: formatted_date});
    }

    render() {

        return (
                <div className="preview__wrapper">
                    <div className="preview__close" onClick={(e) => {this._closeDialog(e)}}><span className="fa fa-close"></span></div>
                    <div className="preview__head">
                        <div className="preview__img-wrapper">
                            <img src={this.props.event.image} alt="" className="preview__img" />
                        </div>
                        <div className="preview__info">
                            <div className="preview__info-top">
                                <h2 className="h2">{this.props.event.name}</h2>
                                <div className="time__wrapper">
                                    <time className="time">{`${this.props.event.date_from ? this.getFormattedDate(new Date(this.props.event.date_from)) : ''} ${this.props.event.date_to ? ' - ' +this.getFormattedDate(new Date(this.props.event.date_to)) : ''}`}</time>
                                    <br />
                                    <time className="time">{this.props.event.time ? this.props.event.time : ''}</time>
                                </div>
                                <div className="place">{this.props.event.place.name}</div>
                                <div className="address"><i className="fa fa-map-marker" aria-hidden="true"></i>{this.props.event.place.address}</div>
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

                    <div className="preview__description" dangerouslySetInnerHTML={{__html:this.props.event.descr}}>
                    </div>
                </div>
        );
    }

}

export default Preview;