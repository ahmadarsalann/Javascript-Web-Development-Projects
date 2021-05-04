import Layout from "../components/Mycampground.js";
import fetch from "isomorphic-unfetch";
import ReactDOM from 'react-dom';
let see = 0;
const Post = (props) => (
	<Layout>
	<h1>{props.show.name}</h1>
	    <img src={props.show.image} />
	    <h1>{props.show.town}</h1>

	    <p>{props.show.description}</p>
	    <br></br>


	<style jsx>{`
		h1,
		h2,
		h3,
		h4,
		a,
		p {
			font-family: "Arial";
			color: #34495e;
			font-size: 20px;
		}

		.text-style {
			margin: auto auto;
			width: 200px;
		}
		img {	
			height: 450px;
			
			}
		`}</style>
	</Layout>
);

Post.getInitialProps = async function (context) {
	const { id } = context.query;
	const res = await fetch(`http://localhost:8080/getreal?id=${id}`);
		const show = await res.json();

		console.log(`Fetched show: ${show.name}`);
		return { show };
	};

	export default Post;
