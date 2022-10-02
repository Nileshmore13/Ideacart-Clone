import { Box, Button, Center, Flex, Heading, Image, Table, Th, Tr, VStack, Thead, TableContainer, TableCaption, Tbody, Td } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Navbar from "./Navbar"
import "./SingleBook.css"

function SingleBook() {

    const { book_id } = useParams();
    const [book, setBook] = useState({});

    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes/${book_id}`)
            .then((res) => setBook(res.data))
    }, [])

    console.log('book: ', book);
    return (
        <>
            <Box h={500} margin={"auto"} height="auto" mt={25}>
                <Center>
                    <Flex gap={25}>
                        <Box>
                            <Box border={"1px solid gray"} h="auto" w={400} px={5} py={5}>
                                <Center> <Image src={book.volumeInfo?.imageLinks?.thumbnail} w="full" h={500} /> </Center>
                            </Box>
                            <Box>
                                <p> Buy it at <b> best price</b>  from here Rup. {book.saleInfo?.listPrice?.amount} </p>
                                <Button bgColor={"#f0ad4e"} variant="none">Buy Now</Button>
                            </Box>
                        </Box>
                        <Box h={550} w={800}>
                            <VStack h="auto">
                                <Heading as='h3' fontWeight={"light"} fontStyle={"-moz-initial"} size='lg' fontFamily="roboto">
                                    {book.volumeInfo?.title}
                                </Heading>
                                <Box bg="lightgrey" w={"100%"} h="auto" mt={30} borderRadius={10}>
                                    <VStack gap={1} p={2}>
                                        <Heading as='h3' fontWeight={"light"} fontStyle={"-moz-initial"} size='lg' fontFamily="roboto"> {book.volumeInfo?.subtitle}</Heading>
                                        <p>{book.volumeInfo?.description}</p>
                                    </VStack>
                                </Box>
                                <p>Confused about buying this product or want to buy it at best price?
                                    You can help fellow community people by giving your invaluable comments too</p>
                                <Button bgColor={"blue.500"}>Ask Questions</Button>
                            </VStack>
                            <TableContainer mt={5} ml={4}>
                                <Table variant='simple'>
                                    <Thead>
                                        <Tr>
                                            <Th>Store</Th>
                                            <Th>Price</Th>
                                            <Th>Buy Now</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>Amazon</Td>
                                            <Td>{book.saleInfo?.listPrice?.amount}</Td>
                                            <Button bgColor={"green.400"} variant="none" >Buy Now</Button>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Flex>
                </Center>
            </Box>
        </>
    )

}

export default SingleBook


// https://www.googleapis.com/books/v1/volumes/VolumeID

{/* <Box>
<p> Buy it at <b> best price</b> from here</p>
<Button bgColor={"#f0ad4e"} variant="none">Buy Now</Button>
</Box> */}