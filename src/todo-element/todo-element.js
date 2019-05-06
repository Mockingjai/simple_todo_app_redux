import React, { Component } from 'react';
import { connect } from "react-redux";

class TodoElement extends Component {
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.tasks.map((element) => {
                            return (
                                <li key={element.id}>{element.title}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    tasks: state.CreateTask,
});

export default connect(mapStateToProps,null)(TodoElement);