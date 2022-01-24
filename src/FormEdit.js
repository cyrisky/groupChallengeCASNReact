import React, { Component } from 'react'

class FormEdit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email:''
        }
    }

    handleUsernameChange = (event) => {
        this.setState ({
            username: event.target.value
        })
    }

    handleEmailChange = (event) => {
        this.setState ({
            email: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.email}`)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input 
                        type="text" 
                        value={this.state.username} 
                        onChange={this.handleUsernameChange} 
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input 
                        type="text" 
                        value={this.state.email} 
                        onChange={this.handleEmailChange} 
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default FormEdit;