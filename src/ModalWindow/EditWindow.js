import React, { Component } from 'react';
import './index.css';
class Modal extends Component {
    render() {
        const {title} = this.props;
        // Render nothing if the "show" prop is false
        if(!this.props.isOpen) {
            return null;
        }
        return (
            <div className="backdropStyle">
                <div className="modalStyle">
                    <p className='window_title'>Change task or left old task</p>
                    <input className='input_field' type="text" defaultValue={title}/>
                    <div className="footer">
                        <button className='action_buttons'>
                            Edit
                        </button>
                        <button className='action_buttons' >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Modal;