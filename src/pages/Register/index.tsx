import * as React from 'react'
import {
    Form,
    Button,
} from "react-bootstrap"
import { RegisterMutationMutationFn, withRegisterMutation, RegisterMutationProps } from "./queries.generated"
import { withApollo } from 'react-apollo';
import compose from 'lodash.flowright';


interface IRegisterFormState {
    username: string;
    email: string;
    password1: string;
    password2: string;
}

interface IRegisterFormProps {
    createUser: RegisterMutationProps;
    onSuccess: () => any;
}


export class RegisterPage extends React.Component<IRegisterFormProps, IRegisterFormState> {

    public state: IRegisterFormState = {
        username: '',
        email: '',
        password1: '',
        password2: ''
    }

    render() {

        return (
            <div className="text-left">
                <h1 className="text-center">
                    Register Page
            </h1>

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name="username" placeholder="Enter usename" onChange={this.onChange} value={this.state.username}/>
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email"  placeholder="Enter email" onChange={this.onChange} value={this.state.email}/>
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password1" placeholder="Enter password" value={this.state.password1} onChange={this.onChange} />
                    </Form.Group>

                    <Form.Group controlId="formConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name="password2" placeholder="Enter Password Again" value={this.state.password2} onChange={this.onChange} />
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
        const { username, email, password1, password2 } = this.state
        const { createUser, onSuccess } = this.props;

        return createUser({ variables : {
            username : username,
            email : email,
            password1 : password1,
            password2 : password2
        }}).then(() => {
            this.setState({
                username: "",
                email: "",
                password1: "",
                password2: ""
            });
            return onSuccess();
        })

    }

    private onChange = (event: any) => {
        this.setState({ [event.target.name] : event.target.value } as Pick<IRegisterFormState, keyof IRegisterFormState>) ;
    }

}

export default compose(
    withApollo,
    withRegisterMutation({
        props: ({ mutate }) => ({
            // renaming mutation from `mutate` to `createNote`
            // (more readable)
            // and passing it to props
            createUser: mutate
        })
    }),

)(RegisterPage)
