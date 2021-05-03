import Layout from "../components/MyLayout.js";

export default function Index() {
	return (
		<Layout>
		<br />
		<img
		src="/static/logo.svg" className="image1"
		style={{
			margin: "auto",
				maxWidth: "200px",
				maxHeight: "200px",
				margin: "auto",
		}}
		/>
		<img src="/static/black.jpg" className = "image2"
		style={{
			width:"100%",
				height:"250px",
				position: "relative",
		}}
		/>
		<h1>Welcome to React Search</h1>

		<p>In this amazing website you can search your favorite spots, such as movies and shops. Please login or register if you want the search limited to your zipcode!</p>
		<h4>God Bless you and have a good day!</h4>

		<style jsx>{`
			h1 {
				font-family: "Comic Sans MS";
				position: absolute;
				margin-left: auto;
				margin-right: auto;
				left: 0;
				right: 0;
				top: 225px;
				text-align:center;
				color: white;

			}
			h2,
			h3,
			h4,
			a,
			p {
				color: #1f618d;
				font-family: "Arial";
			}
			.image1 {
				  animation: rotation infinite 15s linear;
				  position: absolute;
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
				background-color: #228b22;
				color: #ffffff;
				width: 100px;
				font-family: "Arial";
			}
			.text-style {
				margin: auto auto;
				width: 200px;
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
				opacity: 0.7;
			}
		`}</style>
		</Layout>
	);
}
