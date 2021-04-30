import Layout from "../components/MyLayout.js";
import {foodInfo} from '../lib/utils.js';
import React from "react";
import * as ReactBootStrap from "react-bootstrap";
class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = { search: ""};
	}
	async handleUpdate(evt){
		this.setState({ search: evt.target.value});
		const food = await foodInfo(this.state.search);
		this.setState({food});
		
	}
	render(){
		return (
			<Layout>
			<img src="/static/logo.svg" className= "image1"
			style={{
				width: "300px",
					height: "150px",
					padding: "0",

			}}
			/>
			<img src="/static/banner1.jpg" className = "image2" 
			style={{
				width:"100%", 
					height:"250px",
			}}
			/>
			<h1>Nutritional Information About Food</h1>

			<h3>Food Search</h3>
			<p>
			<input
			className = "input-style"
			type = "text"
			placeholder = "Search"
			value = {this.state.search} onChange={this.handleUpdate.bind(this)}

			/>
			{ this.state.food ? (
				<div className="text-style">
					<table>
				                <thead>
				                       <tr>
				                           <th>Description</th>
				                           <th>Kcal</th>
				                           <th>Protein(g)</th>
				                           <th>Fats(g)</th>
				                           <th>Carbs(g)</th>
				                        </tr>
				                </thead>
					<tbody>
					{this.state.food.map((food, i) =>(
						 <tr>
							<td>{food.Description}</td>
							<td>{food.Kcal}</td>
							<td>{food.Protein}</td>
							<td>{food.Fats}</td>
							<td>{food.Carbs}</td>
						</tr>
					))}
					</tbody>
				       </table>
				<br></br>
				</div>
			) : null}
			</p>

			<style jsx>{`
			.image1 {
				animation: rotation infinite 20s linear;
				pointer-events: none;
				position: absolute;
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
			.image2 {
				position: relative;
				margin-top: 0;
				margin-right: 0;
				margin-left: 0;
				margin-bottom: 0;
				overflow: hidden;
				padding: 0;
				}
			h1 {
				  font-family: "Comic Sans MS";
				  position: absolute;
				  margin-left: auto;
				  margin-right: auto;
				  left: 0;
				  right: 0;
				  top: 150px;
				  text-align:center;
				  color: white;
			}
			h3 {
				font-family: "Times New Roman";
				position: absolute;
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
export default Home;
