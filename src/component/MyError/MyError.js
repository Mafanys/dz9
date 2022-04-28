import React from "react";

class MyError extends React.Component{
  constructor(props){
    super(props);
    this.click = this.click.bind(this);
  }
  state = {
    count: 0
  }
  click(){
    this.setState({
      count: this.state.count +1,
    })
    
  }
  render(){
    if(this.state.count === 3){
      throw new Error ('Err')
    }
    return(
      <React.Fragment>
        <h3>My Eror</h3>
        <h2>{this.state.count}</h2>
        <button onClick={this.click}>Click</button>
      </React.Fragment>
      
    )
  }
}

export default MyError;