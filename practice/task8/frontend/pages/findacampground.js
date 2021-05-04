import Layout from "../components/Mycampground.js";
import {getInfo} from '../lib/utils.js';
import React from "react";
import Link from 'next/link';

class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = { search: "",
			array:[],
		};
	}
	async handleUpdate(evt){
		this.setState({ search: evt.target.value});
	}

	async handleSearch(evt){
		// fetch the back-end response
		fetch(`http://localhost:8080/getinfo?name=${this.state.search}`)
			.then((resp) => {
				return resp.json();
			})
			.then((response) => {
				this.setState({ array: response });
			});
	}

	render(){
		return (
			<Layout>
			<h1>New Mexico Campground Search</h1>
			<p>	
			<input
			className = "input-style"
			type = "text"
			placeholder = "Search"
			value = {this.state.search} onChange={this.handleUpdate.bind(this)}
			/>
			</p>
			<div className="button-style" onClick={this.handleSearch.bind(this)}>
			Lookup
			</div>
			<ul>
			{this.state.array ? (
			<div>
			{this.state.array.map((show) => (
				<li key={show.id}>
				<Link href="/[id]" as={`/${show._id}`}>
				<a>
				{show._source.name} {show._source.town} ({show._score})
				</a>
				</Link>
				</li>
			))};
			</div>
			): null}
			
			</ul>
			<style jsx>{`
				  .button-style {
						      margin: auto auto;
						      margin-top: 20px;
						      cursor: pointer;
						      background-color: #166d17;
						      color: #ffffff;
						      width: 150px;
						      height: 45px;
						      font-family: Arial, sans-serif;
						      line-height: 1.9;
						      font-size: 1.4rem;
						    }
				 .button-style:active {
						     background-color: #3e8e41;
						     box-shadow: 0 7px #666;
						     transform: translateY(7px);
				       }
				  .input-style  {
						      width: 40%;
						      box-sizing: border-box;
						      border: 2px solid #ccc;
						      border-radius: 10px;
						      font-size: 16px;
						      background-color: white;
						      background-image: url(static/searchicon.png);
						      background-size: 80px;
						      background-position: -15px 3px; 
						      background-repeat: no-repeat;
						      padding: 12px 20px 12px 50px;
						      background-color : #f4f4f4;
						      }

				  .picture-size {
						      height: 450px;

						      }



		`}</style>
			</Layout>

		);
	}
}

export default Home;
