import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="app_wrapper">
                <div className="app_wrapper-content">
                    <div className="title_wrapper">
                        <h3>Todo <span>A</span>pp with Redux</h3>
                    </div>
                    <div className="todoInput_wrapper-App">

                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(App);
