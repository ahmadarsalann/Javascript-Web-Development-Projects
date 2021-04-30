import Layout from "../components/Mycampground.js";
import {getInfo} from '../lib/utils.js';
import React from "react";
let good = 1;
class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = { search: ""};
	}
async handleUpdate(evt){
	this.setState({ search: evt.target.value});
	good = 1;
}

async handleSearch(evt){
	const campinfo = await getInfo(this.state.search);
	if(campinfo == null){
		good = 0;
	}else{
		good = 1;
	}
	console.log(this.setState({campinfo}));
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
				
				{ this.state.campinfo ? (
					<div className="text-style">
						<h2>{this.state.campinfo.name}</h2>
						<img src ={this.state.campinfo.image_url} className="picture-size"/>
							
						<h2>{this.state.campinfo.closest_town}</h2>
						<p>{this.state.campinfo.description}</p>
						<br></br>
					</div>
				) : null}
				
				{ good == 0 ? ( <h3> {this.state.search} not found </h3>) : null}
			  	
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
