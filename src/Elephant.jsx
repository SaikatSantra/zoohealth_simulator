import React, { Component } from 'react';
import elimg from './img/elephant.png';
import elerun from './img/elephant_walk.png';
import eledead from './img/elephant_dead.png'
import generateRandom from './random';

class Elephant extends Component {
    constructor(props){
        super(props);
        this.state={life:100.00}
    }

downlife=()=>{
    let rand=generateRandom(0,20);
    let newlife=(this.state.life-rand).toFixed(2);
   
    if(this.state.life>=30){
        this.setState({
            life:newlife
        });
    }
}
    
    feed=()=>{
        let chealth=parseFloat(this.state.life);
        let random=generateRandom(10,25);
        let newhealth=chealth+random;
        newhealth=newhealth.toFixed(2);
        if(newhealth>100){
            newhealth=100.00; 
        } 
       if(this.state.life>30){
        this.setState({
            life:newhealth
        });
       }
    }
    // componentDidMount(){
    //     setInterval(()=>{
    //        this.downlife(); 
   
    //     },3000)
    // }
    render() {
        return (
            <div className= {this.state.life>70?"healthy col":this.state.life<30?"col dead":"col unhealthy"}>
            <img src={this.state.life>70?elimg:this.state.life<30?eledead:elerun} />
            <p>Health {this.state.life} %</p>               
            <p>{this.state.life>70?" Can Walk":this.state.life<30?"dead":"Can't Walk"}</p>               
         
        </div>
        );
    }
}

export default Elephant;
