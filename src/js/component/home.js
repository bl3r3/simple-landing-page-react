import React from "react";

//COMPONENTS
import { Menu } from "./Menu.jsx";
import { Content } from "./Content.jsx";
import { Footer } from "./Footer.jsx";

//create your first component
export function Home() {
	return (
		<>
			<Menu />
			<Content />
			<Footer textFooter={"Copywriter © Your Website 2021"} />
		</>
	);
}
