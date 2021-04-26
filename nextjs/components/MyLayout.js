import Header from './Header'

const layoutStyle = {
  margin: "auto auto",
  padding: 25,
  border: '5px solid green',
  width: "1250px",
  height: "550px",
  textAlign: "center",
  borderStyle: "groove",
  color: "green",
  
}

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  )
}
