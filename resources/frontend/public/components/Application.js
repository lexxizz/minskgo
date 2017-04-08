import React from 'react';
import { Router, Route, Link } from 'react-router';



class Application extends React.Component {


    render() {
        return (
            
            <div>
                <header id="top">

                    <div className="container-fluid">

                        <div className="row">

                            <div className="col-lg-4 col-md-12 site-title">
                                <h1>ContentStock</h1>
                            </div>

                            <MainMenu />

                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <hr className="sigma-hr" />
                            </div>
                        </div>

                    </div>

                </header>
                {this.props.children}
            </div>
        );
    }
}

export default Application;
