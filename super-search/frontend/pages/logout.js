import Layout from "../components/MyLayout.js";
import Router from "next/router";
import jsCookie from "js-cookie";
import {change_to_simple} from "../lib/utils.js"

class Logout extends React.Component {
	constructor(props) {
		super(props);

		this.state = { username: "", password: "" };
		jsCookie.remove("username");

		//this.handleSearch();
	}

	componentDidMount() {
		this.handlesomething();
		Router.replace("/");
	}
	async handlesomething(){
		const revert_to_simple = await change_to_simple();
	}

	render() {
		const that = this;

		return (
				<div>hi</div>
		);

	}
}

export default Logout;
