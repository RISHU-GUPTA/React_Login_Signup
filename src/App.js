import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.isReg=false;
    this.state = { isReg:this.isReg };
  }

  
  render() {
    return (
      <div>
      { this.isReg?<Login/>:<Signup/>}
  </div>
    );
  }
}

export default App;


/*
constructor(props) {
  super(props);
  this.isPaid=false;
  this.state = { paid:this.isPaid };
}
free(){
  return(
    <h1>Free User</h1>
  )
}
paid(){
  return(
    <h1>Paid User</h1>
  )
}

render() {
  return (
    <>
    { this.isPaid?this.paid():this.free()}
    <button onClick={()=>{
     this.isPaid=!this.isPaid;
     this.setState({...this.state,paid:this.isPaid});
    }}>Click me</button>
    </>
  );
}
}*/