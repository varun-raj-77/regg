import React, { Component } from 'react'
import './CSS/todo.css'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            country: "",
            city: "",
            state: "",
            message: "",
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    countryhandler = (event) => {
        this.setState({
            country: event.target.value
        })
    }
    cityhandler = (event) => {
        this.setState({
            city: event.target.value
        })
    }
    statehandler = (event) => {
        this.setState({
            state: event.target.value
        })
    }
    messagehandler = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.name} Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            name: "",
            email: "",
            country: "",
            city: "",
            state: "",
            message: ""
        })
     event.preventDefault()
        
    }

    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>Registration for users</h1>
                    <label>Name :</label> <input type="text" value={this.state.name} onChange={this.firsthandler} placeholder="Enter your name" /><br />
                    <label>Email :</label> <input type="text" value={this.state.email} onChange={this.emailhandler} placeholder="Enter your email" /><br />
                    <label>Country :</label> <input type="text" value={this.state.country} onChange={this.countryhandler} placeholder="Enter your country" /><br />
                    <label>City :</label> <input type="text" value={this.state.city} onChange={this.cityhandler} placeholder="Enter your city" /><br />
                    <label>State :</label> <input type="text" value={this.state.state} onChange={this.statehandler} placeholder="Enter your state" /><br />
                    <label>Message :</label> <input type="text" value={this.state.message} onChange={this.messagehandler} placeholder="Enter your message" /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Form
