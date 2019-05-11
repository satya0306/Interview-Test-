import React, { Component } from 'react'

export default class Test extends Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};
	  }
	
	  handleChange=(event)=>{
		this.setState({value: event.target.value});
	  }
	  	
  render() {
	  var value=this.state.value;
	  var arr=[];
	  for(var i=0; i<=value.length;i++){
			arr.push(value.substr(0,i));
			
	  }
	  
	return (
	  <div>
		<form>
			<label>
				Name:
				<input type="text" value={this.state.value} onChange={this.handleChange} />
			</label>
      	</form>
		<ul>{arr.map(array=>(
			<li>{array}</li>
		))}</ul>
	  </div>
	)
  }
}
