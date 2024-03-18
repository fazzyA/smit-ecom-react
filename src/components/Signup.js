import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Box,
    Input,
    Button,
} from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Signup = () => {
    const SignupSchema = Yup.object().shape({
        username: Yup.string().min(4, 'Too short').max(6, 'Too long'),
        email: Yup.string().email('Invalid email').required(),
        password: Yup.string().min(6, 'atleat 6 char').required()
    })
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password:""
        },
        onSubmit: (values) => {
            console.log(values)
            alert(JSON.stringify(values, null, 2));
        },
        validationSchema: SignupSchema
    })
    return (
        <Box>
            <form onSubmit={formik.handleSubmit}>
                <FormControl isInvalid={formik.touched.username && formik.errors.username}>
                    <FormLabel>Username</FormLabel>
                    <Input
                      type='text'
                      name='username'
                      onChange={formik.handleChange}
                      value={formik.values.username}
                       />
                       {(formik.touched.username && formik.errors.username) &&
                        <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
                        }
                </FormControl>
                <FormControl isInvalid={formik.touched.email && formik.errors.email} >
                    <FormLabel>Email address</FormLabel>
                    <Input type='text' name='email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                     />
                     {
                     (formik.errors.email && formik.touched.email) &&
                      <FormErrorMessage fontSize={"xs"}>{formik.errors.email}</FormErrorMessage>
                      }
                     
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl isInvalid={formik.touched.password && formik.errors.password}>
                    <FormLabel>Password</FormLabel>
                    <Input type='password' name='password'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                     />
                     {(formik.touched.password && formik.errors.password) &&
                        <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                        }


                </FormControl>
                <Button type='submit'>Signup</Button>
            </form>

        </Box>
    )
}

export default Signup