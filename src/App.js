import React ,{useState,Component,useRef}from 'react';

import './App.css';
import Elephant from './Elephant';
import Giraffe from './Giraffe';
import Monkey from './Monkey';
class App extends Component {
  
  constructor(props){
    super(props);
    this.allAnimal = new Array();

    this.elephant = React.createRef();
    this.elephant1 = React.createRef();
    this.elephant2 = React.createRef();


    this.giraffe = React.createRef();
    this.giraffe1 = React.createRef();
    this.giraffe2 = React.createRef();
   
    this.monkey=React.createRef();
    this.monkey1=React.createRef();
    this.monkey2=React.createRef();


   this.allAnimal.push(this.elephant);
   this.allAnimal.push(this.elephant1);
   this.allAnimal.push(this.elephant2);
   
    this.allAnimal.push(this.giraffe);
    this.allAnimal.push(this.giraffe1);
    this.allAnimal.push(this.giraffe2);

     this.allAnimal.push(this.monkey);
     this.allAnimal.push(this.monkey1);
     this.allAnimal.push(this.monkey2);
    this.state={time:0}
    
}
DownChildLife=()=>{
  this.allAnimal.forEach((item)=>{
    item.current.downlife();
  })

 }
componentDidMount(){
  setInterval(()=>{
    let newtime=this.state.time + 1;
    this.setState({
      time:newtime
  }); 
this.DownChildLife();
  },3000)
}




feedChilds=()=>{
  this.allAnimal.forEach((item)=>{
    item.current.feed();
  })
}




incTime=()=>{
  let ntime=parseInt(this.state.time) + 1;
  this.setState({
    time:ntime
});
this.DownChildLife();
}


  render() {
    return (
    <div>
    <div className='row'>
    <Giraffe ref={this.giraffe}/>
    <Giraffe ref={this.giraffe1}/>
    <Giraffe ref={this.giraffe2}/>

      </div>
      
    <div className='row'>
      <Elephant ref={this.elephant} /> 
      <Elephant ref={this.elephant1} /> 
      <Elephant ref={this.elephant2} /> 
      </div>
      
    <div className='row'>
      <Monkey ref={this.monkey}/>  
      <Monkey ref={this.monkey1}/> 
      <Monkey ref={this.monkey2}/> 
      </div>
      
    <div className='is-flex'>
    <button onClick={this.feedChilds}>Feed</button>
    <p>{parseInt(this.state.time/24)} days {this.state.time%24} Hours</p>
    <button onClick={this.incTime}>+ 1hr</button>
    </div>
    </div>
       
   
        
       
    );
  }
}

export default App;

