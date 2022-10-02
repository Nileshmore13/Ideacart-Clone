import { Box, Button, Checkbox, Container, FormControl, FormLabel, Heading, Input, Stack, Text } from "@chakra-ui/react";
import Footer from "../Components/Footer";


function SignUp() {
    return (
        <div>

            <Box mt={"100px"}>
                <Heading size={"lg"} fontFamily={"roboto"}>Sign Up</Heading>
                <Stack>
                    <Container>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input></Input>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Mobile Number <Text fontSize='xs'>(6 characters minimum)</Text></FormLabel>
                            <Input></Input>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input></Input>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Password</FormLabel>
                            <Input></Input>
                        </FormControl>
                    </Container>
                </Stack>
                <FormControl mt={5}>
                    <Button bgColor={"#5cb85c"} variant="none">SignUp</Button>
                </FormControl>
                <Box mt={5}>
                    <Text>Log In</Text>
                </Box>
            </Box>
            <br />
            <br />
            <hr />
            <Footer />
            <br />
            <br />
        </div>
    )
}

export default SignUp