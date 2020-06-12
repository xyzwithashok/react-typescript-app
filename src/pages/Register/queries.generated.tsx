import * as Types from '../../types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type RegisterMutationMutationVariables = Exact<{
  username: Types.Scalars['String'];
  email: Types.Scalars['String'];
  password1: Types.Scalars['String'];
  password2: Types.Scalars['String'];
}>;


export type RegisterMutationMutation = (
  { __typename?: 'Mutation' }
  & { register?: Types.Maybe<(
    { __typename?: 'Register' }
    & Pick<Types.Register, 'success' | 'errors' | 'token'>
  )> }
);


export const RegisterMutationDocument = gql`
    mutation RegisterMutation($username: String!, $email: String!, $password1: String!, $password2: String!) {
  register(username: $username, email: $email, password1: $password1, password2: $password2) {
    success
    errors
    token
  }
}
    `;
export type RegisterMutationMutationFn = ApolloReactCommon.MutationFunction<RegisterMutationMutation, RegisterMutationMutationVariables>;
export type RegisterMutationComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RegisterMutationMutation, RegisterMutationMutationVariables>, 'mutation'>;

    export const RegisterMutationComponent = (props: RegisterMutationComponentProps) => (
      <ApolloReactComponents.Mutation<RegisterMutationMutation, RegisterMutationMutationVariables> mutation={RegisterMutationDocument} {...props} />
    );
    
export type RegisterMutationProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<RegisterMutationMutation, RegisterMutationMutationVariables>
    } & TChildProps;
export function withRegisterMutation<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RegisterMutationMutation,
  RegisterMutationMutationVariables,
  RegisterMutationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, RegisterMutationMutation, RegisterMutationMutationVariables, RegisterMutationProps<TChildProps, TDataName>>(RegisterMutationDocument, {
      alias: 'registerMutation',
      ...operationOptions
    });
};
export type RegisterMutationMutationResult = ApolloReactCommon.MutationResult<RegisterMutationMutation>;
export type RegisterMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutationMutation, RegisterMutationMutationVariables>;