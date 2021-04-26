import Header from './Header'

const layoutStyle = {
	  margin: "auto auto",
	  padding: 25,
	  border: '5px solid lightblue',
	  width: "1250px",
	  height: "750px",
	  textAlign: "center",
	  borderStyle: "groove",
	  color: "blue",

}

export default function Layout1(props) {
	  return (
		      <div style={layoutStyle}>
		        <Header />
		        {props.children}
		      </div>
		    )
}
