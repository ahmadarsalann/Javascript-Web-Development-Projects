import Layout from "../components/MyLayout.js";

export default function loggedin() {
	return (
		<Layout>
			<br />
			<h1>Successfully Logged in</h1>
			<br></br>
			<h2> Below is the song for my master</h2>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/a_Am4cHMBKM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
			<h3>Ron Zacharski a true legend</h3>
			<style jsx>{`
				h1 {
					font-family: "Comic Sans MS";
					color: "hotpink";
				}
				`}
		</style>


		</Layout>
	);
}
