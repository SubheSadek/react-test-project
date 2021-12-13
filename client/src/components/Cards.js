import React, { Component } from "react";


export default class Card extends Component{
    render(){
        return(
        <div className="_react_card_wrapper">
            <div className="_react_card_wrap">
                <div className="container">
                    <div className="_react_card_content_wrap">
                        <div className="row">

                            <div className="col-xl col-md col-sm col-12">
                                <div className="_react_card_content">
                                    <div className="_react_card_content_inner">
                                        <div className="_react_card_img_wrap">
                                            <img src="http://image4.photobiz.com/728/7_20200317225907_11115505_large.jpg" alt="img" className="_react_card_img" />
                                        </div>
                                        <div className="_react_card_txt">
                                            <h3 className="_react_card_name">Mitchel Clark</h3>
                                            <p className="_react_card_email">mclark@gmail.com</p>
                                            <h4 className="_react_card_title">Marketing</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}