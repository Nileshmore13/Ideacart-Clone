import { Box, Button, Heading, Input, Select, Text } from "@chakra-ui/react"
import {Link} from "react-router-dom"
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useEffect, useState } from "react"
import "./BooksList.css"
import BooksList from "./BooksList";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";


function Navbar() {

    
    const { state,toggleLogOut } = useContext(AuthContext)


    return (
        <div>
            <Box h="60px" display={"flex"} justifyContent="space-evenly" alignItems={"center"} backgroundColor={"#2874F0"}
            >
                <Box display={"flex"} gap="140px">
                    <Text fontSize='20px' color="yellow" fontFamily={"Roboto"}><Link to="/">IDEACART</Link></Text>
                    <Box display="flex" backgroundColor={"whitesmoke"} borderRadius={"5px"}>
                        <Input placeholder="Search" width={"400px"}></Input>
                        <Button>Search</Button>
                    </Box>
                </Box>
                <Box display={"flex"} gap="40px" color={"white"}>
                    <Text> <Link to="/about">About</Link> </Text>
                    <Text> <Link to="/contact">Contact</Link> </Text>
                    {
                        state.isAuth ? <div>
                            <Select placeholder="Eve" border={"none"}>
                                <option >DashBoard</option>
                                <option >Account Info</option>
                                <option >Notification</option>
                                <option  >Sign Out</option>
                            </Select>
                        </div>
                            : <div style={{ display: "flex", gap: "23px" }}>
                                <Text> <Link to="/signIn">Sign In</Link> </Text>
                                <Text> <Link to="/signUp">Sign Up</Link> </Text>
                            </div>
                    }
                </Box>
            </Box>
        </div>
    )
}

export default Navbar


// API key - AIzaSyBtD57Tp9hjgBsQx4QkwgFjbRf8TQhr-mw
// api - https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes


