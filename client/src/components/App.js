import React, { Component } from "react";
import Card from "./Cards";
import Form from "./Form";
import axios from "./axios";
import EditUser from "./editUser";

class App extends Component{
    state = {users: [], isModal:false};
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
    
    deleteUser = async user =>{
        if(!user.isModal){
            const list = this.state.users;
            list.splice(user.index, 1);
            this.setState({ list });
        }else if(user.isModal){
            this.setState({isModal:true})
        }
    }
    
    render(){
        const isModal = this.state.isModal;
        return(
            <span>
                {isModal ? <EditUser/> : null}
                <Form onSubmit={this.onFormSubmit}/>
                <Card users={this.state.users} deleteUser={this.deleteUser} />
            </span>
        )
        
    }
}

export default App;