import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Box,
    Input,
} from '@chakra-ui/react'

const Signup = () => {
    return (
        <Box>
            <FormControl>
                <FormLabel>Username</FormLabel>
                <Input type='text' />
            </FormControl>
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type='email' />
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type='password' />
            </FormControl>

        </Box>
    )
}

export default Signup