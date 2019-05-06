import React, { Component } from 'react';
import { deleteTodo } from '../actions/actions';
import { connect } from 'react-redux';

class TodoList extends Component {
    render() {
        const {tasks, removeTodo} = this.props;
        return (
            <>
                <div>
                    {
                        tasks.map((item) => {
                            return (
                                <li key={item.id}>
                                    {item.title}
                                    <button onClick={() => removeTodo(item.id)}>Delete</button>
                                </li>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}
const mapStateToProps = state => ({
    tasks: state.todos
});
const mapDispatchToProps = dispatch => ({
    removeTodo: (id) => dispatch(deleteTodo(id)),
});
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);