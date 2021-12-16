import React, { Component } from "react";
import Card from "./Cards";
import Form from "./Form";
import axios from "./axios";
import EditUser from "./editUser";
import "../css/main.css"

class App extends Component{
    state = {users: [], isModal:false, userIndex: 0 };
    
    async componentDidMount(){
        const res = await axios.get('/user/getUsers/');
        if(res.status === 200){
            this.setState({ users:res.data });
        }
    }
    onFormSubmit = async user => {
        this.setState(prevState => ({
            users: [user, ...prevState.users]
        }))
    };
    
    onEditFormSubmit = async user => {
        let users = [...this.state.users];
        users[this.state.userIndex] = user;
        this.setState({users});
        this.setState({isModal:false});
    };
    
    deleteUser = async index =>{
        const list = this.state.users;
        list.splice(index, 1);
        this.setState({ list });
    }
    
    editUser = async index =>{
        this.setState({isModal:true});
        this.setState({userIndex: index});
    }
    
    cancelModal = async () =>{
        this.setState({isModal:false});
    }
    
    //  singleUser = async () =>{
    //   console.log(this.state.users)
    // }
    
    
    render(){
        const isModal = this.state.isModal;
        
        let Modal;
        
        if(isModal){
            Modal = (
                <EditUser 
                    cancelModel={this.cancelModal}
                    onSubmit={this.onEditFormSubmit}
                    singleUser ={this.state.users[this.state.userIndex]} 
                />
            )
        }
        return(
            <span>
                 {Modal}
                 {/* <div className="_alert_modal">
                 <div className="alert alert-success" role="alert">
                    A simple success alert with 
                    <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                </div>
                 </div> */}
                <Form onSubmit={this.onFormSubmit}/>
                <Card users={this.state.users} deleteUser={this.deleteUser} editUser={this.editUser}/>
                
            </span>
        )
        
    }
}

export default App;