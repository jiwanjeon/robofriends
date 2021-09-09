import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
// import { robots } from './robots'; //Have to use {}wrapping because Undefault
// import Scroll from './Scroll'
import './App.css'

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		fetch('http://jsonplaceholder.typicode.com/users')
			.then(response=> {
				return response.json();
			}) //.then(response=> response.json())
			.then(users => {
				this.setState({ robots: users})
			}); //.then(users => this.setState({robots:users}));
	}

	// With anything that comes from React and constructor, and render are pre-built in React, any
	// time you make your own methods on a Component, use this syntax, "arrow function"
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value})
		// console.log(event.target.value);
	}
	render() {
		const filteredRobots = this.state.robots.filter(robots =>{
		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if (this.state.robots.length === 0){
			return <h1>Loading</h1>
		}
		else{
			return (
				<div className='tc'>
					<h1 className='f1'>RoBoFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					
					<CardList robots={filteredRobots}/>
					
				</div>
				);
			}		
	}
}

export default App;