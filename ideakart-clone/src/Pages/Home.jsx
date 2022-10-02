import { Box, Button, Heading, Input, Select, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import "../Components/BooksList.css"
import axios from "axios";
import BooksList from "../Components/BooksList";
import Footer from "../Components/Footer";

function Home(){

    const [books, setBooks] = useState([]);

      useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=monk+inauthor:keyes&maxResults=40`)
            .then(res => {
                setBooks(res.data.items);
                console.log(res.data.items[0].volumeInfo.imageLinks.thumbnail)
            })
    }, [])
    return(
        <div>
            <Heading>Top Reads</Heading>
            <div className="bookContainer">
                {
                    books?.map((el) => (
                        <BooksList title={el.volumeInfo.title}
                            image={el.volumeInfo.imageLinks?.thumbnail}
                            id={el.id}
                        />
                    ))
                }
            </div>
           <br />
           <br />
           <hr />
           <br />
           <br />
           <Footer/>
        </div>
    )
}

export default Home