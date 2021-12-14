
import { Component } from "react";
import '../css/editUser.css';

export default class editUser extends Component{
    render(){
        return(
            <div id="myModal" className="modal">

                <div className="modal-content">
                    <span className="close">&times;</span>
                    <p>Some text in the Modal..</p>
                </div>

            </div>
        );
    }
}