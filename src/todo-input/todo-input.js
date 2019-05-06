import React, { Component } from 'react';
import { connect } from "react-redux";
import AddTask from '../actions-creator/add-task';

class InputTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }
    inputHandler = (e) => this.setState({title: e.target.value});
    addTitle = (e) => {
        e.preventDefault();
        this.props.AddTask(this.state.title);
        this.setState({title: ''});
    };
    render() {
        return (
            <form>
                <input placeholder='Add task' value={this.state.title} onChange={this.inputHandler}/>
                <button onClick={this.addTitle}>Click</button>
            </form>
        )
    }
}
const mapStateToProps = (state) => ({
    title: state.CreateTask
});
const mapDispatchToProps = (dispatch) => ({
    AddTask: (title) => dispatch(AddTask(title))
});
export default connect(mapStateToProps,mapDispatchToProps)(InputTodo)