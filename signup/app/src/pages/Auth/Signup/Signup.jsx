import React from 'react'
import {Card,Center,Container,Text, FormControl,Stack, Input, FormLabel, Flex, Checkbox, Button, Link} from '@chakra-ui/react'
const Signup = () => {
  return (
    <Container>
        <Center hinH="100vh">
            <Card p="6" borderRadius="1rem" w="408px">
                <Text textStyle="h1">Welcome to crypto App</Text>
                <Text textStyle="p2" color="black.60" mt="4">Create a free account by filling data below</Text>
                <Stack mt="10">
                    <Flex gap="4">

                        <FormControl>
                            <FormLabel htmlfor="name">Name</FormLabel>
                            <Input name='name' placeholder='Enter your name'/>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlfor="surname">Name</FormLabel>
                            <Input name='surname' placeholder='Enter your surname'/>
                        </FormControl>
                    </Flex>
                    <FormControl>
                        <FormLabel htmlfor="email">Email</FormLabel>
                        <Input name='email' placeholder='Enter your email'/>
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlfor="password">Password</FormLabel>
                        <Input name='password' type='password' />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlfor="repeatPassword">ReapetPassword</FormLabel>
                        <Input name='repeatPassword' type='repeatPassword'/>
                    </FormControl>
                    <Checkbox>
                        I agree with <Text as="span" color="p.purple">Terms and Conditions</Text>
                    </Checkbox>
                    <Button>Create Account</Button>
                    <Text textStyle="p3" color="black.60" textAlign="center">
                        Already have an account ? <Link to="/signin">Log In</Link>
                    </Text>
                </Stack>
            </Card>
        </Center>
    </Container>
  )
}

export default Signup
