import React, { Component } from 'react';
import { connect } from "react-redux";
import * as func from '../actions-creator/add-task';
import './App.css';

class App extends Component {
    render() {
        console.log(this.props.CreateTask.title);
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
const mapStateToProps = (state) => ({
    CreateTask: state.CreateTask,
});
export default connect(mapStateToProps,null)(App);
