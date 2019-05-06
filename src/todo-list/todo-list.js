import React, { Component } from 'react';
import Modal from '../ModalWindow/EditWindow';
import { deleteTodo} from '../actions/actions';
import { connect } from 'react-redux';

class TodoList extends Component {
    state = {
        isOpen: false,
    };
    toggleModal = () => this.setState({isOpen: !this.state.isOpen});
    render() {
        const { tasks, removeTodo } = this.props;
        return (
            <>
                <div>
                    {
                        tasks.map((item) => {
                            return (
                                <div>
                                    <li key={item.id}>
                                        {item.title}
                                        <button onClick={() => removeTodo(item.id)}>Delete</button>
                                        <button onClick={() => this.toggleModal()}>Edit</button>
                                    </li>
                                    <Modal
                                        title={item.title}
                                        isOpen={this.state.isOpen}
                                    />
                                </div>
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