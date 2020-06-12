import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: any;
  SocialCamelJSON: any;
};

export type Query = {
  __typename?: 'Query';
  /** The ID of the object */
  user?: Maybe<UserNode>;
  users?: Maybe<UserNodeConnection>;
  posts?: Maybe<PostTypeConnection>;
  post?: Maybe<PostType>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  username_Icontains?: Maybe<Scalars['String']>;
  username_Istartswith?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  status_Archived?: Maybe<Scalars['Boolean']>;
  status_Verified?: Maybe<Scalars['Boolean']>;
  status_SecondaryEmail?: Maybe<Scalars['String']>;
};


export type QueryPostsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};


export type QueryPostArgs = {
  id: Scalars['ID'];
};

export type UserNode = Node & {
  __typename?: 'UserNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean'];
  dateJoined: Scalars['DateTime'];
  activationLink: Scalars['String'];
  employmentType?: Maybe<UserEmploymentType>;
  country?: Maybe<CountryNode>;
  provience?: Maybe<ProvienceType>;
  phone: Scalars['String'];
  profilePic?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['Date']>;
  socialAuth: SocialNodeConnection;
  pk?: Maybe<Scalars['Int']>;
  archived?: Maybe<Scalars['Boolean']>;
  verified?: Maybe<Scalars['Boolean']>;
  secondaryEmail?: Maybe<Scalars['String']>;
};


export type UserNodeSocialAuthArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['String']>;
  uid_In?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_In?: Maybe<Scalars['String']>;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};


/** An enumeration. */
export enum UserEmploymentType {
  /** Full Time Employee */
  A_1 = 'A_1',
  /** Self Employed */
  A_2 = 'A_2',
  /** Full Time And Self Employed */
  A_3 = 'A_3'
}

export type CountryNode = Node & {
  __typename?: 'CountryNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  country: Array<ProvienceType>;
};

export type ProvienceType = {
  __typename?: 'ProvienceType';
  id: Scalars['ID'];
  name: Scalars['String'];
  country?: Maybe<CountryNode>;
};


export type SocialNodeConnection = {
  __typename?: 'SocialNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SocialNodeEdge>>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

/** A Relay edge containing a `SocialNode` and its cursor. */
export type SocialNodeEdge = {
  __typename?: 'SocialNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<SocialNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type SocialNode = Node & {
  __typename?: 'SocialNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  provider: Scalars['String'];
  uid: Scalars['String'];
  extraData?: Maybe<Scalars['SocialCamelJSON']>;
  created: Scalars['DateTime'];
  modified: Scalars['DateTime'];
};


export type UserNodeConnection = {
  __typename?: 'UserNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserNodeEdge>>;
};

/** A Relay edge containing a `UserNode` and its cursor. */
export type UserNodeEdge = {
  __typename?: 'UserNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<UserNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type PostTypeConnection = {
  __typename?: 'PostTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PostTypeEdge>>;
};

/** A Relay edge containing a `PostType` and its cursor. */
export type PostTypeEdge = {
  __typename?: 'PostTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<PostType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type PostType = {
  __typename?: 'PostType';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  description: Scalars['String'];
  isOld?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  postCreate?: Maybe<PostCreate>;
  postDelete?: Maybe<PostDelete>;
};


export type MutationPostCreateArgs = {
  input: PostInputType;
};


export type MutationPostDeleteArgs = {
  id: Scalars['ID'];
};

export type PostCreate = {
  __typename?: 'PostCreate';
  post?: Maybe<PostType>;
};

export type PostInputType = {
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type PostDelete = {
  __typename?: 'PostDelete';
  ok?: Maybe<Scalars['Boolean']>;
};

export type PostsQueryQueryVariables = Exact<{
  search?: Maybe<Scalars['String']>;
}>;


export type PostsQueryQuery = (
  { __typename?: 'Query' }
  & { posts?: Maybe<(
    { __typename?: 'PostTypeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'PostTypeEdge' }
      & { node?: Maybe<(
        { __typename?: 'PostType' }
        & Pick<PostType, 'id' | 'title' | 'description'>
      )> }
    )>> }
  )> }
);

export type PostCreateMutationMutationVariables = Exact<{
  input: PostInputType;
}>;


export type PostCreateMutationMutation = (
  { __typename?: 'Mutation' }
  & { postCreate?: Maybe<(
    { __typename?: 'PostCreate' }
    & { post?: Maybe<(
      { __typename?: 'PostType' }
      & Pick<PostType, 'id'>
    )> }
  )> }
);

export type PostDeleteMutationMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PostDeleteMutationMutation = (
  { __typename?: 'Mutation' }
  & { postDelete?: Maybe<(
    { __typename?: 'PostDelete' }
    & Pick<PostDelete, 'ok'>
  )> }
);


export const PostsQueryDocument = gql`
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
export type PostsQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PostsQueryQuery, PostsQueryQueryVariables>, 'query'>;

    export const PostsQueryComponent = (props: PostsQueryComponentProps) => (
      <ApolloReactComponents.Query<PostsQueryQuery, PostsQueryQueryVariables> query={PostsQueryDocument} {...props} />
    );
    
export type PostsQueryProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<PostsQueryQuery, PostsQueryQueryVariables>
    } & TChildProps;
export function withPostsQuery<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  PostsQueryQuery,
  PostsQueryQueryVariables,
  PostsQueryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, PostsQueryQuery, PostsQueryQueryVariables, PostsQueryProps<TChildProps, TDataName>>(PostsQueryDocument, {
      alias: 'postsQuery',
      ...operationOptions
    });
};
export type PostsQueryQueryResult = ApolloReactCommon.QueryResult<PostsQueryQuery, PostsQueryQueryVariables>;
export const PostCreateMutationDocument = gql`
    mutation PostCreateMutation($input: PostInputType!) {
  postCreate(input: $input) {
    post {
      id
    }
  }
}
    `;
export type PostCreateMutationMutationFn = ApolloReactCommon.MutationFunction<PostCreateMutationMutation, PostCreateMutationMutationVariables>;
export type PostCreateMutationComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<PostCreateMutationMutation, PostCreateMutationMutationVariables>, 'mutation'>;

    export const PostCreateMutationComponent = (props: PostCreateMutationComponentProps) => (
      <ApolloReactComponents.Mutation<PostCreateMutationMutation, PostCreateMutationMutationVariables> mutation={PostCreateMutationDocument} {...props} />
    );
    
export type PostCreateMutationProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<PostCreateMutationMutation, PostCreateMutationMutationVariables>
    } & TChildProps;
export function withPostCreateMutation<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  PostCreateMutationMutation,
  PostCreateMutationMutationVariables,
  PostCreateMutationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, PostCreateMutationMutation, PostCreateMutationMutationVariables, PostCreateMutationProps<TChildProps, TDataName>>(PostCreateMutationDocument, {
      alias: 'postCreateMutation',
      ...operationOptions
    });
};
export type PostCreateMutationMutationResult = ApolloReactCommon.MutationResult<PostCreateMutationMutation>;
export type PostCreateMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<PostCreateMutationMutation, PostCreateMutationMutationVariables>;
export const PostDeleteMutationDocument = gql`
    mutation PostDeleteMutation($id: ID!) {
  postDelete(id: $id) {
    ok
  }
}
    `;
export type PostDeleteMutationMutationFn = ApolloReactCommon.MutationFunction<PostDeleteMutationMutation, PostDeleteMutationMutationVariables>;
export type PostDeleteMutationComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<PostDeleteMutationMutation, PostDeleteMutationMutationVariables>, 'mutation'>;

    export const PostDeleteMutationComponent = (props: PostDeleteMutationComponentProps) => (
      <ApolloReactComponents.Mutation<PostDeleteMutationMutation, PostDeleteMutationMutationVariables> mutation={PostDeleteMutationDocument} {...props} />
    );
    
export type PostDeleteMutationProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<PostDeleteMutationMutation, PostDeleteMutationMutationVariables>
    } & TChildProps;
export function withPostDeleteMutation<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  PostDeleteMutationMutation,
  PostDeleteMutationMutationVariables,
  PostDeleteMutationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, PostDeleteMutationMutation, PostDeleteMutationMutationVariables, PostDeleteMutationProps<TChildProps, TDataName>>(PostDeleteMutationDocument, {
      alias: 'postDeleteMutation',
      ...operationOptions
    });
};
export type PostDeleteMutationMutationResult = ApolloReactCommon.MutationResult<PostDeleteMutationMutation>;
export type PostDeleteMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<PostDeleteMutationMutation, PostDeleteMutationMutationVariables>;