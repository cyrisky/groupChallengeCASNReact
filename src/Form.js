import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            list: ['User1', 'User1@mail.com', '100', '2']
        }
    }

    handleUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            usernameResult: this.state.username,
            resultList: this.state.list.map(item => (
                <li key={item}>{item}</li>
            ))
        })
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input
                            type='text'
                            value={this.state.username}
                            onChange={this.handleUsername}
                        />
                    </div>
                    <Button variant="primary" type="submit">Search</Button>
                </form>
                <div>
                    <p>Hasil Pencarian: {this.state.usernameResult}</p>
                    <ul>
                        {this.state.resultList}
                    </ul>
                </div>
            </>
        )
    }
}

export default Form