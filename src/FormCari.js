import React, { Component } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

class FormCari extends Component {
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
                <Container style={{ marginTop: 38, marginBottom: 20 }} >
                    <Form onSubmit={this.handleSubmit}>
                        <Row className="justify-content-md-center">
                            <Col sm md lg="auto">
                                <label style={{ marginRight: 5 }}>Username</label>
                                <input
                                    type='text'
                                    value={this.state.username}
                                    onChange={this.handleUsername}
                                />
                            </Col>
                            <Col sm={3}>
                                <Button variant="primary" type="submit">Search</Button>
                            </Col>
                        </Row>

                    </Form>
                    <Row className="justify-content-md-center">
                        <Col>
                        <p>Hasil Pencarian: {this.state.usernameResult}</p>
                        <ul>
                            {this.state.resultList}
                        </ul>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default FormCari