import Layout from "../components/MyLayout.js";
import Router from "next/router";
import jsCookie from "js-cookie";
import {getLogin} from "../lib/utils.js"
import {change_to_advance} from "../lib/utils.js"
let good = false;
let great = false;
class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = { username: "", password: "" };
	}
	handleuserUpdate(evt){
		this.setState({username: evt.target.value});
	}

	handlepasswordUpdate(evt){
		this.setState({password: evt.target.value});
	}

	async handleLogin(evt){
		const loggedInUser = await getLogin({
			username: this.state.username,
			password: this.state.password
		});
		this.setState({loggedInUser});
		console.log(loggedInUser.error);
		this.setState({good: null});
		this.setState({great: null});
		if(loggedInUser.status == "success"){
			const changesearch = await change_to_advance();
			console.log(changesearch);
			jsCookie.set("username", loggedInUser.username);
			Router.replace("/loggedin");
		}else if(loggedInUser.error == "Password Incorrect"){

			this.setState({good:true});
		}else{
			this.setState({great:true});	
		}


	}

	render() {
		const that = this;
		return (
			<Layout
			style={{ margin: "auto auto", width: "600px", textAlign: "center" }}
			>
			<img src="/static/logo.svg" className= "image1"
			style={{
				width: "300px",
					height: "150px",
					padding: "0",

			}}
			/>
			<h2>Login</h2>
			<label htmlFor="username" className="text-style">
			Username:{" "}
			</label>
			<input
			type="text"
			id="username"
			className="input-style"
			value={this.state.username}
			onChange = {this.handleuserUpdate.bind(this)}
			/>
			<br /> <br />
			<label htmlFor="password" className="text-style">
			Password:{" "}
			</label>
			<input
			type="password"
			id="password"
			className="input-style"
			value={this.state.password}
			onChange = {this.handlepasswordUpdate.bind(this)}
			/>
			<br />
			<br />
			<br />
			<div className="button-style" onClick={this.handleLogin.bind(this)}>Submit</div>
			{this.state.good ? (
				<h4>Password Incorrect</h4>
			): null}
			{this.state.great ? (
				<h4>User not found</h4>
			): null}

			<br /> <br />
			<style jsx>{`
							h1,
							h2 {
								color: black;
								font-family: "Comic Sans MS";
								}
							h3,
							h4,
							a,
							p {
								color: #1f618d;
								font-family: "Arial";
							}
							.image1 {
							       	animation: rotation infinite 20s linear;
								pointer-events: none;
								margin-left: auto;
								margin-right: auto;
								left: 0;
								right: 0;
								text-align: center;
								z-index: 2;
							}
							@keyframes rotation {
								from {
									transform: rotate(0deg);
								}
								to {
									transform: rotate(359deg);
								}
							}

							.button-style {
								margin: auto auto;
								cursor: pointer;
								background-color: #1f618d;
								color: #ffffff;
								width: 150px;
								height: 45px;
								font-family: "Arial";
								line-height: 1.9;
								font-size: 1.4rem;
								opacity: 0.75;
								transition: 0.3s;
								cursor: pointer;
							}
							.button-style:hover {opacity: 1}

							.text-style {
								font-size: 1.4rem;
								line-height: 1.6rem;
								font-family: "Arial";
								width: 50px;
								align: right;
							}
							.error-style {
								font-size: 1.4rem;
								line-height: 1.6rem;
								font-family: "Arial";
								color: red;
							}
							.input-style {
								font-size: 1.4rem;
								line-height: 1.6rem;
							}
							.description {
								font-family: "Arial";
								font-size: "10px";
							}
							ul {
								padding: 0;
							}
							li {
								list-style: none;
								margin: 5px 0;
							}
							a {
								text-decoration: none;
								color: blue;
							}
							input {
								margin: auto auto;
								width: 200px;
							}
							.description {
								font-family: "Arial";
								font-size: "10px";
							}
							ul {
								padding: 0;
							}
							li {
								list-style: none;
								margin: 5px 0;
							}
							a {
								text-decoration: none;
								color: blue;
							}
							a:hover {
								opacity: 0.6;
							}
					`}</style>
			</Layout>
		);
	}
}
export default Login;
