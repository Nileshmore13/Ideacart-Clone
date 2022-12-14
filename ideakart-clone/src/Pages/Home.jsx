import {  Heading,Grid} from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import "../Components/BooksList.css"
import axios from "axios";
import BooksList from "../Components/BooksList";
import Footer from "../Components/Footer";
import { AuthContext } from "../Context/AuthContext";

function Home(){

    // const [books, setBooks] = useState([]);
    const { books, setBooks} = useContext(AuthContext)

      useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=monk+inauthor:keyes&maxResults=40`)
            .then(res => {
                setBooks(res.data.items);
                // console.log(res.data.items[0].volumeInfo.imageLinks.thumbnail)
            })
    }, [])

   
    return(
        <div>
            <Heading>Top Reads</Heading>
            <Grid className="bookContainer" templateColumns={{base:"repeat(1,1fr)",sm:"repeat(1,1fr)", md:"repeat(2,1fr)",lg:"repeat(4,1fr)"}}>
                {
                    books?.map((el) => (
                        <BooksList title={el.volumeInfo.title}
                            image={el.volumeInfo.imageLinks?.thumbnail}
                            id={el.id}
                        />
                    ))
                }
            </Grid>
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