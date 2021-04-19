import React from "react";
import PropTypes from "prop-types";

import { Navbar, Nav, Container } from "react-bootstrap/";

export const Menu = () => {
	return (
		<>
			<Navbar
				collapseOnSelect
				expand="lg"
				bg="dark"
				variant="dark"
				className="m-0 mx-auto"
				fixed="top">
				<Container>
					<Navbar.Brand>{"Start Bootstrap"}</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar">
						<Nav className="ml-auto">
							<Nav.Link href="#Home">Home</Nav.Link>
							<Nav.Link href="#About">About</Nav.Link>
							<Nav.Link href="#Services">Services</Nav.Link>
							<Nav.Link href="#Contact">Contact</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};
