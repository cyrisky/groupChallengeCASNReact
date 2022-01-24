import React, { Component } from 'react'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'

class FormEdit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            usernameLama:'',
            usernameBaru:''
        }
    }

    handleUsernameLamaChange = (event) => {
        this.setState ({
            usernameLama: event.target.value
        })
    }

    handleUsernameBaruChange = (event) => {
        this.setState ({
            usernameBaru: event.target.value
        })
    }

    handleSubmit = (event) => {
        this.setState({
            usernameLamaResult: `Username anda ${this.state.usernameLama}`,
            usernameBaruResult: ` telah diganti menjadi ${this.state.usernameBaru}`
        })
        event.preventDefault()
    }

    render() {
        return (
            <Container fluid="md">
                <Row className="justify-content-md-center">
                    <Col xs lg="2"></Col>
                    <Col md="auto">
                        <Form onSubmit={this.handleSubmit}>
                            <div>
                                <label>Username Lama  </label>
                                <input 
                                    type="text" 
                                    value={this.state.usernameLama} 
                                    onChange={this.handleUsernameLamaChange} 
                                />
                            </div>
                            <div>
                                <label>Username Baru  </label>
                                <input 
                                    type="text" 
                                    value={this.state.usernameBaru} 
                                    onChange={this.handleUsernameBaruChange} 
                                />
                            </div>
                            <Button variant="primary" type="submit">Submit</Button>

                            <div>
                                <p>
                                    {this.state.usernameLamaResult} 
                                    {this.state.usernameBaruResult}
                                </p>
                            </div>
                        </Form>
                    </Col>
                    <Col xs lg="2"></Col>
                </Row>
            </Container>
            
        )
    }
}

export default FormEdit;