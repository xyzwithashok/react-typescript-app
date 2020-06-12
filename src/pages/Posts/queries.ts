import gql from 'graphql-tag';

export const POSTS_QUERY = gql`
    query PostsQuery($search: String) {
        posts(search: $search) {
            edges {
                node {
                    id
                    title
                    description
                }
            }
        }
    }
`;

export const POST_CREATE_MUTATION = gql`
    mutation PostCreateMutation($input: PostInputType!) {
        postCreate(input: $input) {
            post {
                id
            }
        }
    }
`;

export const POST_DELETE_MUTATION = gql`
    mutation PostDeleteMutation($id: ID!) {
        postDelete(id: $id) {
            ok
        }
    }
`;