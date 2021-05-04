import Layout from "../components/MyLayout.js";

export default function Index() {
	  return (
    <Layout>
	  <br />
		  
	  <img 
		  src="/static/Camping.jpg"
		  style={{
			  margin: "auto",
			  maxWidth: "500px",
			  maxHeight: "500px",
			  margin: "auto",
		  }}
	  />
      <h1>Information on Campgrounds</h1>
      <p>Do you like spending time in nature? Do sounds of wolves howling, birds chirping, and owls hooting relax your mind? If so, this is the website for you. On this website, you can search for information on campgrounds! It will help you pick the best campground that suits your needs. Well, stop reading this fantastic description and click on "Find a campground above" and search your dream campground.</p>
      <p>Also, this website has some other amazingly cool stuff! Play around and find out!</p>
      </Layout>
  );
}
