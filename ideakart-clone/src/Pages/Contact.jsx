import { background, Box, Button, FormControl, FormLabel, Grid, GridItem, Input, Textarea } from "@chakra-ui/react"

function Contact() {
    return (
        <div className="contact_page" style={{
            backgroundImage: `url("https://ideakart.com/assets/youridea-23d18c0fab7feb4d66e4c1dbc419428c71b2014ff742fc52b4006f6b65af6b67.jpg")`,
            width: "100%", height: "800px", position: "fixed",
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover"
        }}>
            <Box w="2xl" m="auto" mt="100" p={5}>
                <Grid templateColumns="repeat(2,1fr)" gap={2} justifyContent={"center"}>
                    <GridItem colSpan={{base:2,md:1}}>
                        <FormControl>
                            <FormLabel> First Name</FormLabel>
                            <Input placeholder="Enter Your First Name" bgColor={"white"}></Input>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={{base:2,md:1}}>
                        <FormControl>
                            <FormLabel> Last Name</FormLabel>
                            <Input placeholder="Enter Your Last Name" bgColor={"white"}></Input>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={{base:2,md:1}}>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input placeholder="Enter Your Email" bgColor={"white"}></Input>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={{base:2,md:1}}>
                        <FormControl>
                            <FormLabel>Phone Number</FormLabel>
                            <Input placeholder="Enter Your Phone Number" bgColor={"white"}></Input>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <FormControl>
                            <FormLabel>Message</FormLabel>
                            {/* <Input placeholder="Enter Your Phone Number" bgColor={"white"}></Input> */}
                            <Textarea bgColor={"white"} placeholder="Enter Your Message" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={2} mt={4}>
                        <FormControl>
                            <Button bgColor={"#5cb85c"} variant="none"> Send Message</Button>
                        </FormControl>
                    </GridItem>

                </Grid>
            </Box>
        </div>
    )
}

export default Contact