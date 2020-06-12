import * as Types from '../../types';

import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type PostsQueryQueryVariables = Exact<{
  search?: Types.Maybe<Types.Scalars['String']>;
}>;


export type PostsQueryQuery = (
  { __typename?: 'Query' }
  & { posts?: Types.Maybe<(
    { __typename?: 'PostTypeConnection' }
    & { edges: Array<Types.Maybe<(
      { __typename?: 'PostTypeEdge' }
      & { node?: Types.Maybe<(
        { __typename?: 'PostType' }
        & Pick<Types.PostType, 'id' | 'title' | 'description'>
      )> }
    )>> }
  )> }
);

export type PostCreateMutationMutationVariables = Exact<{
  input: Types.PostInputType;
}>;


export type PostCreateMutationMutation = (
  { __typename?: 'Mutation' }
  & { postCreate?: Types.Maybe<(
    { __typename?: 'PostCreate' }
    & { post?: Types.Maybe<(
      { __typename?: 'PostType' }
      & Pick<Types.PostType, 'id'>
    )> }
  )> }
);

export type PostDeleteMutationMutationVariables = Exact<{
  id: Types.Scalars['ID'];
}>;


export type PostDeleteMutationMutation = (
  { __typename?: 'Mutation' }
  & { postDelete?: Types.Maybe<(
    { __typename?: 'PostDelete' }
    & Pick<Types.PostDelete, 'ok'>
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