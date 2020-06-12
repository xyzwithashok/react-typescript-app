import * as React from 'react';
import * as queryString from 'query-string';
import {
    Card,
    Button,
    Row,
    Col,
    Form,
    Spinner,
} from 'react-bootstrap'
import { PostsQueryProps, withPostsQuery } from '../../generated/graphql';
import { RouteComponentProps, withRouter } from 'react-router';
import { withApollo } from 'react-apollo';
import compose from 'lodash.flowright';


interface IPostsState {
    searchQuery?: string;
}

interface iPostsBaseProps {
}

type IPostsProps = PostsQueryProps<iPostsBaseProps> & RouteComponentProps;

class Posts extends React.Component<IPostsProps, IPostsState> {

    className = 'Posts';

    constructor(props: IPostsProps) {

        super(props);

        const query = queryString.parse(props.location.search);

        this.state = {
            searchQuery: query && query.search
                ? query.search.toString()
                : undefined
        };

    }

    public render() {

        const { searchQuery } = this.state;

        const { data } = this.props;

        return (
            <div className={this.className}>
                <h3>Posts</h3>
                <br></br>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form.Control type="text" value={searchQuery} placeholder="Search Post" onChange={this.handleSearch}/>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    {data!.loading ? (
                        <Spinner animation="grow" />
                    ) : (
                            <div>
                                {data!.posts!.edges.map(edge =>
                                    <Col>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>{edge?.node?.title}</Card.Title>
                                                <Card.Text> {edge?.node?.description}
                                                </Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                        <br></br>
                                    </Col>
                                )}
                            </div>
                        )}
                </Row>

            </div >
        )
    }

    private handleSearch = (event: any) => {

        const { history, location } = this.props;

        history.push({
            pathname: location.pathname,
            search: queryString.stringify({
                search: event.target.value
            })
        });

    }

}

export default compose(
    withApollo,
    withRouter,
    withPostsQuery({
        options: (props: any) => ({
            variables: queryString.parse(props.location.search)
        })
    })
)(Posts);