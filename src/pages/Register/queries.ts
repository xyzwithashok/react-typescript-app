import gql from 'graphql-tag';

export const REGISTRATION_MUTATION = gql`
    mutation RegisterMutation(
        $username: String!
        $email: String!
        $password1: String!
        $password2: String!
    ){
        register(
            username : $username
            email: $email
            password1 : $password1
            password2 : $password2
        ){
            success
            errors
            token
        }
    }
`;