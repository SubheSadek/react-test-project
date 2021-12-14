import React, { Component } from "react";
import '../css/card.css'
import axios from "./axios";

export default class Card extends Component{
    // constructor(props) {
    //     super(props);
    //       this.state = {
    //         usr: this.props.count
    //       }
    //     }
    async deleteUser(id, i){
        const res = await axios.post('/user/deleteUser/',{'user_id':id});
        if(res.status === 200){
            let ob ={
                'index':i,
                'isModal':false
            }
            this.props.deleteUser(ob);
        }
    }
    
    render(){
        let cards = this.props.users.map((user, i) => {
            return (
                
                <div className="col-xl col-md col-sm col-12" key={i}>
                                
                    <div className="_react_card_content">
                        <div className="_react_card_content_inner">
                        <svg onClick={() => this.deleteUser(user.id, i)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash card_delete_icon" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                            <div className="_react_card_img_wrap">
                                <img src="http://image4.photobiz.com/728/7_20200317225907_11115505_large.jpg" alt="img" className="_react_card_img" />
                            </div>
                            <div className="_react_card_txt">
                                <h3 className="_react_card_name">{user.name}</h3>
                                <p className="_react_card_email">{user.email}</p>
                                <h4 className="_react_card_title">{user.title}</h4>
                            </div>
                        </div>
                    </div>
                
                </div>

            );
          });
          
        return(
        <div className="_react_card_wrapper">
            <div className="_react_card_wrap">
                <div className="container">
                    <div className="_react_card_content_wrap">
                        <div className="row">
                            {cards}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}