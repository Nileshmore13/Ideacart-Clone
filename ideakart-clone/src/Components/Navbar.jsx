import { Box, Button, Input, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import "./BooksList.css"
import BooksList from "./BooksList";
import axios from "axios";


function Navbar() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&maxResults=40`)
            .then(res => {setBooks(res.data.items);
            console.log(res.data.items[0].volumeInfo.imageLinks.thumbnail)
    })
    }, [])

    return (
        <div>
            <Box h="60px" display={"flex"} justifyContent="space-evenly" alignItems={"center"} backgroundColor={"#2874F0"}
            >
                <Box display={"flex"} gap="140px">
                    <Text fontSize='20px' color="yellow" fontFamily={"Roboto"}>IDEACART</Text>
                    <Box display="flex" backgroundColor={"whitesmoke"} borderRadius={"5px"}>
                        <Input placeholder="Search" width={"400px"}></Input>
                        <Button>Search</Button>
                    </Box>
                </Box>
                <Box display={"flex"} gap="40px" color={"white"}>
                    <Text>About</Text>
                    <Text>Contact</Text>
                    <Text>Sign In</Text>
                    <Text>Sign Up</Text>
                </Box>
            </Box>


            <div className="bookContainer">
            {
                books?.map((el)=>(
                    <BooksList title={el.volumeInfo.title}
                     image={el.volumeInfo.imageLinks?.thumbnail}
                     />
                ))
            }
            </div>
        </div>
    )
}

export default Navbar


// API key - AIzaSyBtD57Tp9hjgBsQx4QkwgFjbRf8TQhr-mw
// api - https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes


// https://github.com/Nileshmore13/money-cellar-3895.git