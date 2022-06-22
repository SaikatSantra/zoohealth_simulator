import React, { Component } from 'react';
import monkey from './img/monkey.png';
import monkeyun from './img/monkey_unhealhy.png';
import monkeydead from './img/monkey_dead.png';
import generateRandom from './random';
class Monkey extends Component {
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
            <div className={this.state.life>70?"col healthy":this.state.life<30?"col dead":" col unhealthy"}>
                <img src={this.state.life>70?monkey:this.state.life<30?monkeydead:monkeyun} />
                <p>Health {this.state.life} %</p>
               
                <p>{this.state.life>70?"Healthy":this.state.life<30?"dead":"unhealthy"}</p>               
               
            </div>
        );
    }
}

export default Monkey;
