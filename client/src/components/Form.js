import React, { Component } from "react";
import '../css/form.css'
import axios from "./axios";
class Form extends Component{

    state = {
        formData: {
            name: '',
            email:'',
            title:'',
            image:'',
        },
        errors: {
            name: '',
            email:'',
            title:'',
            image:'',
        },
        
    };
    
    onFormSubmit = async e =>{
        e.preventDefault();
        let validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

        let fields = this.state.formData;
        let errors = {};
        let formInvalid = false;

        if(!fields.name || fields.name === ''){
            errors.name = "Name is required.";
            formInvalid = true;
        }
        
        if(fields.email === "" || fields.email === null){
            errors.email = "Email is required.";
            formInvalid = true;
        }
        if(fields.email && !validateEmail.test(fields.email)){
            errors.email = "Invalid email format.";
            formInvalid = true;
        }
        
        if(fields.title === ""){
            errors.title = "Title is required";
            formInvalid = true;
        }
        
        if(fields.image === ""){
            errors.image = "Image url is required.";
            formInvalid = true;
        }

        if(fields.image && !pattern.test(fields.image)){
            errors.image = "Invalid url format." ;
            formInvalid = true;
        }
        if(formInvalid){
            return this.setState({ errors: errors });
        }

        const res = await axios.post('/user/createUser/', fields);
        if(res.status === 200){
            this.props.onSubmit(res.data);
            
            fields.name = "";
            fields.email = "";
            fields.title = "";
            fields.image = "";
            
            this.setState({ fields });
        }
        
        
        
    };

   handleChange(field, e) {
        let fields = this.state.formData;
        fields[field] = e.target.value;
        this.setState({ fields });

        let errors = this.state.errors;
        errors[field] = "";
        this.setState({ errors });
      }

    render(){
        return(
        <div className="_react_form_wrapper">
            <div className="_react_form_wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-7 col-md-12 col-sm-12 mx-auto">
                            <div className="_react_form_content">
                                <div className="_react_form_content_inner">
                                    <form onSubmit={this.onFormSubmit} className="row g-3">
                                        <div className="col-md-12">
                                            <label htmlFor="name" className="htmlForm-label">Name</label>
                                            <input autoComplete="off" value = { this.state.formData["name"] } onChange={this.handleChange.bind(this, "name")}  type="text" className="form-control" />
                                            <span className="error-text">{this.state.errors["name"]}</span>
                                        </div>
                                         <div className="col-md-12">
                                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                                            <input value = {this.state.formData.email} onChange={this.handleChange.bind(this, "email")} type="text" className="form-control" id="email" />
                                            <span className="error-text">{this.state.errors.email}</span>
                                        </div>
                                       <div className="col-md-12">
                                            <label htmlFor="title" className="form-label">Title</label>
                                            <input value = {this.state.formData.title} onChange={this.handleChange.bind(this, "title")} type="text" className="form-control" id="title" />
                                            <span className="error-text">{this.state.errors.title}</span>
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="image" className="form-label">Image URL</label>
                                            <input value = {this.state.formData.image} onChange={this.handleChange.bind(this, "image")} type="text" className="form-control" id="image" />
                                            <span className="error-text">{this.state.errors.image}</span>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <button type="submit" className="btn btn-primary d-block w-100 py-2"> Submit </button>
                                        </div> 
                                    </form>
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

export default Form;