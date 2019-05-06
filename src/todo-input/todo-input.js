import React, { Component } from 'react';
import { newTodo } from '../actions/actions';
import { connect } from 'react-redux';

class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }
    onInput = e => this.setState({value: e.target.value});
    newTodo = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.value);
        this.setState({value: ''});
    };
    render() {
        return (
            <form>
                <input
                    placeholder='Enter...'
                    value={this.state.value}
                    onChange={this.onInput}
                />
                <button onClick={this.newTodo}>Add</button>
            </form>
        )
    }
}
const mapDispatchToProps = dispatch => ({
   addTodo: (title) => dispatch(newTodo(title)),
});
export default connect(null,mapDispatchToProps)(TodoInput);