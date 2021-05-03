import Header from "./Header";

const layoutStyle = {
	  textAlign: "center",
	
};

export default function Layout(props) {
	  return (
		      <div style={layoutStyle}>
		        <Header />
		        {props.children}
		      </div>
		    );
}
