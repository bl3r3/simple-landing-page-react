import React from "react";
import PropTypes from "prop-types";

import { Container, Col, Row } from "react-bootstrap";
import { Jumbo } from "./Jumbo.jsx";
import { Tarjetas } from "./Tarjetas.jsx";

export function Content() {
	return (
		<div>
			<Jumbo
				title={"A Warm Welcome"}
				description={
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus veritatis, autem aliquam aperiam excepturi officiis eos quia corporis aliquid hic perspiciatis distinctio odit cupiditate facere ipsum nam repellendus aspernatur fugiat."
				}
				buttonText={"Call to action!!"}
			/>
			<Container>
				<Row>
					<Col md={3} xs={12} className="text-center">
						<Tarjetas
							title={"Card title"}
							description={
								"Some quick example text to build on the card title and make up the bulk of the card's content."
							}
							buttonText={"Find out More!"}
						/>
					</Col>
					<Col md={3} xs={12} className="text-center">
						<Tarjetas
							title={"Card title"}
							description={
								"Some quick example text to build on the card title and make up the bulk of the card's content."
							}
							buttonText={"Find out More!"}
						/>
					</Col>
					<Col md={3} xs={12} className="text-center">
						<Tarjetas
							title={"Card title"}
							description={
								"Some quick example text to build on the card title and make up the bulk of the card's content."
							}
							buttonText={"Find out More!"}
						/>
					</Col>
					<Col md={3} xs={12} className="text-center">
						<Tarjetas
							title={"Card title"}
							description={
								"Some quick example text to build on the card title and make up the bulk of the card's content."
							}
							buttonText={"Find out More!"}
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
