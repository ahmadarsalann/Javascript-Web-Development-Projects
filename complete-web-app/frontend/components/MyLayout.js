const layoutStyle = { 
	textAlign: "center",
};

export default function Layout(props) {
	  return (
		      <div style={layoutStyle}>
		        {props.children}
		      </div>
		    );
}
