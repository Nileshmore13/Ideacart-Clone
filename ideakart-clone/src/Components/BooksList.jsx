

import { Container, Image, Text } from "@chakra-ui/react"
import "./BooksList.css"

function BooksList({ title, image }) {
    return (
        <Container border={"1px solid black"} p={4}>
            <Image src={image} w="full" h={400}/>
            <br />
            <Text>{title}</Text>
            <br />
            <hr />
        </Container>
    )
}

export default BooksList