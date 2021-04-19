import React from "react";
import PropTypes from "prop-types";

import rigoBaby from "../../img/rigo-baby.jpg";

import { Card, Button } from "react-bootstrap";

export function Tarjetas({ title, description, buttonText }) {
	return (
		<div>
			<Card className="my-2">
				<Card.Img variant="top" src={rigoBaby} />
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text>{description}</Card.Text>
				</Card.Body>
				<Card.Footer className="text-center">
					<Button variant="primary">{buttonText}</Button>
				</Card.Footer>
			</Card>
		</div>
	);
}

Tarjetas.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonText: PropTypes.string
};
