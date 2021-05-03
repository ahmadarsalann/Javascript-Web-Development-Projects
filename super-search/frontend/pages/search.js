import Layout from "../components/MyLayout.js";
import {foodInfo} from '../lib/utils.js';
import React from "react";

class places extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			search: "",
			array:[],
		};
	}
	handleSearch(evt){
		// set the state
		this.setState({search: evt.target.value});


		// fetch the back-end response
		fetch(`http://localhost:8080/listplace?name=${evt.target.value}`).then((resp) => {
			return resp.json();
		})
			.then((response) => {
				this.setState({ array: response });
			});
		console.log(this.state.array);
	}

	render(){
		return (
			<Layout>
			<h1>Nutritional Information About Food</h1>

			<h3>Food Search</h3>
			<p>
			<input
			className = "input-style"
			type = "text"
			placeholder = "Search"
			value = {this.state.search} onChange={this.handleSearch.bind(this)}

			/>
			{ this.state.array ? (
				<div className="text-style">
				<table>
				<thead>
				<tr>
				</tr>
				</thead>
				<tbody>
				{this.state.array.map((place, i) =>(
					<tr>
					<td>{place.name}</td>
					<td>{place.place}</td>
					<td>{place.address}</td>
					<td>{place.city}</td>
					<td>{place.zip}</td>
					</tr>
				))}
				</tbody>
				</table>
				<br></br>
				</div>
			) : null}
			</p>

			<style jsx>{`
				 h1 {
					font-family: "Comic Sans MS";
					
					margin-left: auto;
					margin-right: auto;
					left: 0;
					right: 0;
					top: 150px;
					text-align:center;
					color: Black;
				}
				h3 {
					font-family: "Times New Roman";
					
					margin-left: auto;
					margin-right: auto;
					left: 0;
					right: 0;
					top: 250px;
					text-align:center;
				}

				.input-style  {
					width: 30%;
					box-sizing: border-box;
					border: 2px solid #000;
					border-radius: 22px;
					font-size: 16px;
					background-color: white;
					background-image: url(static/searchicon.png);
					background-size: 80px;
					background-position: -15px 3px;
					background-repeat: no-repeat;
					font-family: Arial;
					padding: 12px 20px 12px 50px;              
					background-color : #f4f4f4;
					margin-top: 20px;
				}
																									.input-style:focus{
					outline: none;
					box-shadow: 0px 0px 3px #000000;
					}
				table{
					border-collapse: collapse;
					width: 100%;
					margin-top: 20px;
				}
				th, td{
					padding: 8px;
					text-align: left;
					font-family: Arial, Helvetica, sans-serif;
					border-bottom: 2px solid #ddd;
				}
																									td{
					font-weight: 540;
																									}
																									tr:nth-child(even) {background-color: #f2f2f2;}

					`}</style>
			</Layout>
		);
	}
}
export default places;
