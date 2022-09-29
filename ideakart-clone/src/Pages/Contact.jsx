import { Box, FormControl, FormLabel, Grid, GridItem, Input } from "@chakra-ui/react"

function Contact() {
    return (
        <div  className="contact_page" style={{
            backgroundImage: `url("https://ideakart.com/assets/youridea-23d18c0fab7feb4d66e4c1dbc419428c71b2014ff742fc52b4006f6b65af6b67.jpg")`,
            width: "100%", height: "800px",position:"fixed"
        }}>
            <Box w="2xl" m="auto" mt="100"> 
                <Grid templateColumns="repeat(2,1fr)" gap={2}>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel> First Name</FormLabel>
                            <Input placeholder="Enter Your First Name" bgColor={"white"}></Input>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel> Last Name</FormLabel>
                            <Input placeholder="Enter Your Last Name" bgColor={"white"}></Input>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input placeholder="Enter Your Email" bgColor={"white"}></Input>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Phone Number</FormLabel>
                            <Input placeholder="Enter Your Phone Number" bgColor={"white"}></Input>
                        </FormControl>
                    </GridItem> 
                </Grid>
            </Box>
        </div>
    )
}

export default Contact