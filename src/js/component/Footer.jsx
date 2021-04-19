import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

export const Footer = ({ textFooter }) => {
	return (
		<div>
			<Container fluid className="bg-dark footer mt-4">
				<Row>
					<Col xs={12} md={12} className="footer-text">
						{textFooter}
					</Col>
				</Row>
			</Container>
		</div>
	);
};

Footer.propTypes = {
	textFooter: PropTypes.string
};
