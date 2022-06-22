import React, { Component } from 'react';
import grfimg from './img/giraffe.png'
import grfun from './img/girrafe_unhealth.png';
import grfdead from './img/girrafe_dead.png';
import generateRandom from './random';

class Giraffe extends Component {
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
    //         this.downlife();   
    //     },3000)
    // }
    render() {
        return (
            <div className={this.state.life>70?"col healthy":this.state.life<30?"col dead":"col unhealthy"}>
            <img src={this.state.life>70?grfimg:this.state.life<30?grfdead:grfun} />
            <p>Health {this.state.life} %</p>               
            <p>{this.state.life>70?"Healthy":this.state.life<30?"dead":"unhealthy"}</p>               
          
        </div>
        );
    }
}

export default Giraffe;
