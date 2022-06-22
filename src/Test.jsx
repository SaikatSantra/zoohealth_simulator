import React, { Component } from 'react';

class Test extends Component {
    constructor(props){
        super(props);
        this.state={life:100.00}
    }
    fid=()=>{
       if(this.state.life>30){
        this.setState({
            life:100.00
        });
       }
    }
    componentDidMount(){
        setInterval(()=>{
            let rand=(Math.random()*20).toFixed(2);
            let newlife=(this.state.life-rand).toFixed(2);
           
            if(this.state.life>30){
                this.setState({
                    life:newlife
                });
            }
   
        },3000)
    }
    render() {
        return (
            <div>
                <p>Animal Name</p>
                <p>Health {this.state.life} %</p>
                
                <p>{this.state.life>70?"Healthy":this.state.life<30?"dead":"unealthy"}</p>
               
                <button type='button' onClick={this.fid}>Feed</button>
            </div>
        );
    }
}

export default Test;
