
import { Container, Flex, Heading, Image, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import "./BooksList.css"

function BooksList({ title, image ,id}) {
    return (
        <Link to={`/book/${id}`}>
        <Container border={"1px solid black"} p={4} key={id}>
            <Image src={image} w="full" h={400} />
            <br />
            <Text>{title}</Text>
            <br />
            <hr />
            <Flex mt={3} alignItems="center">
                <Image src="https://cdn-icons-png.flaticon.com/512/1170/1170627.png"
                w={6} h={6}
                /><label style={{marginLeft:"2px"}}>View Now</label>
                 <label style={{marginLeft:"8px",marginRight:"8px"}}> | </label>
                <Image src="https://cdn-icons-png.flaticon.com/512/2354/2354551.png"
                w={6} h={6}
                /><label>More Details</label>
            </Flex>
        </Container>
        </Link>
    )
}

export default BooksList