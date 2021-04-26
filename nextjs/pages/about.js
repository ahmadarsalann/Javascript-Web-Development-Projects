import Layout1 from '../components/Myaboutme.js'

export default function About() {
	return (
		<Layout1>
			<img
		             src="/static/main.JPG"
		             style={{
			           margin: "auto",
			           width: "300px",
                                   height: "150px",
			           margin: "auto",
				   padding: "10px",
		                  }}
			/>

		<h1>Hi, I am Arsalan</h1>
		<p>Hey, I am the creator of this excellent website. Let me tell you more about me. I am 21 years old, a Computer Science major who studies at the University of Mary Washington. I have two siblings, both younger than me. They are adorable! I love playing baseball, watching movies, camping, hanging out with friends, and long walks on the beach for my interests. As you can tell, I am a very outgoing person who loves people and likes to experience nature. That is one of the reasons I created this website. To give people like me an opportunity to find something suitable for themselves. We all work very hard, so it is nice to spend some time relaxing and have fun at the place you love the most. I hope my website is helpful to you and you find something that will put a big smile on your face and your family.</p>
		<h4>Below you will find the videos that I created in my college career soo far. I hope you will like them!</h4> 
		<style jsx>{`
			    h1 {
			    			font-weight: "bold";
			    			font-family: "Comic Sans MS";
						}
			    p {
						text-align: left;
						color: black;
						text-indent: 50px;
					      }
			   h4 {
			   			text-align: left;
						color: blue;
						}
			  `}</style>

		<iframe width = "400" height = "300" src="https://www.youtube.com/embed/yuo0ya_QGXg" allowFullScreen="allowFullScreen">
		</iframe>

		<iframe width = "400" height = "300" src="https://www.youtube.com/embed/8Z8RMnXmpUY" allowFullScreen="allowFullScreen">
		 </iframe>

		</Layout1>
	)
}
