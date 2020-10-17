import React from 'react'
import { Container, FormWrap, Form, FormContent, Icon, FormInput, FormH1, FormLabel, FormButton, Text } from './SigninElements'

const Signin = () => {
  return (
    <>
        <Container>
            <FormWrap>
                <Icon to='/'>dolla</Icon>
                <FormContent>
                    <Form>
                        <FormH1>Sign in to your  account</FormH1>
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <FormInput type='email' required/>
                        <FormLabel htmlFor='passowrd'>Password</FormLabel>
                        <FormInput type='password' required/>
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </>
  )
}

export default Signin
