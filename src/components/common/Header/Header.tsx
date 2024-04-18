import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import {HeaderBasket} from "@components/ecommerce";
import { NavLink } from "react-router-dom";

import styles from "./styles.module.css";

const {headerContainer , headerLogo} = styles;
const Header = () => {
  return (
    <header>
        <div className={headerContainer}>
            <h1 className={headerLogo}>
                <span>our</span> <Badge bg='info'>Ecom</Badge>
            </h1>
            <HeaderBasket/>
            {/* {basket} */}
        </div>
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme='dark'>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                            <Nav.Link  as={NavLink} to="categories">Categories</Nav.Link>
                            <Nav.Link  as={NavLink} to="about-us">About</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#home">Login</Nav.Link>
                            <Nav.Link href="#link">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header