import * as React from 'react'
import {
    Form,
    Button,
} from "react-bootstrap"


export class RegisterPage extends React.Component {

    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <div className="text-left">
                <h1 className="text-center">
                    Register Page
            </h1>

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter usename" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
            </div>
        )
    }

    private handleSubmit = (event: any) => {
        event.preventDefault();
    }

}

export default RegisterPage
