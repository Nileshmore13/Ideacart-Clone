import { Box, Button, Checkbox, Container, FormControl, FormLabel, Heading, Input, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { useState } from "react";
import Footer from "../Components/Footer";
import { AuthContext } from "../Context/AuthContext";


function SignIn() {

    const { toggleLogin, state } = useContext(AuthContext)

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })

    const handleLoginButton = () => {
        fetch(`https://reqres.in/api/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginData)
        })
            .then((res) => (res.json()))
            .then((res) => {
                if (res.token) {
                    toggleLogin()
                }
                else {
                    alert(res.error)
                }
            })
    }

    return (
        <div>
            <Box mt={"100px"}>
                <Heading size={"lg"} fontFamily={"roboto"}>Log In</Heading>
                <Container>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input name="email" onChange={(e) => setLoginData({ ...loginData, [e.target.name]: e.target.value })}></Input>
                    </FormControl>
                    <FormControl>
                        <FormLabel >Password</FormLabel>
                        <Input name="password" onChange={(e) => setLoginData({ ...loginData, [e.target.name]: e.target.value })}></Input>
                    </FormControl>
                </Container>
                <Box mt={4}><Checkbox >Remember Me</Checkbox></Box>
                <FormControl mt={5}>
                    <Button bgColor={"#5cb85c"} onClick={handleLoginButton}>LogIn</Button>
                </FormControl>
                <Box mt={5}>
                    <Text>Sign Up</Text>
                    <Text>Forgot Your Passsword?</Text>
                </Box>
            </Box>
            <br />
            <br />
            <hr />
            <br />
            <br />
            <Footer />
        </div>
    )
}

export default SignIn