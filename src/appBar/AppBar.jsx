import React from 'react'
import {BsCalendar2Minus,BsTrophy} from "react-icons/bs"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/champions-league-football-logo-hd-png-download-1024x768957103--pngfind.png";




const AppBar = () => {
  return (
    <>


    <Navbar bg="primary" variant="dark">
 



        <Container>
        <Navbar.Brand href="/">
        <img src={logo} alt="logo" height="40" width="60"/>
     
        <span>League <span style={{marginLeft:"65px"}}> Web UI</span> </span>
        

        </Navbar.Brand>
         
          <Nav className=" ms-auto">
            <Nav.Link href="/schedule"> <BsCalendar2Minus/> Schedule</Nav.Link>
            <Nav.Link href="/leadershipboard"> <BsTrophy/>  LeadershipBoard</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default AppBar