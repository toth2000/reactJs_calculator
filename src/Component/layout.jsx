import React, { Component } from 'react';
import NumButtons from './buttons';
import OperatorButton from './operatorButton';
import CSS from './layout.css';

class Layout extends Component {
    state = { 
        a: 0,
        b: null,
        operatorPressed: false,
        operator: ''
    }

    displayText = ()=>{
        var a = this.state.a;
        var b = this.state.b;
        var op = this.state.operator;
        if(b==null)
            return a+' '+op+' ';
        else
            return a+' '+op+' '+b;
    }

    handleNumClick = (x)=>{
   
    var val

       if(this.state.operatorPressed===false){
            val = this.state.a;
            val = (val*10) + x;
            this.setState({
                a : val
            });
        }
       else{
            val = this.state.b;
            if(val===null)
                val = 0;
            val = (val*10) + x;
            console.log('b: '+val)
            this.setState({
                b : val
            });
        }
       

    }


    handleOperatorClick = (x)=>{

        // if(this.state.b!==null && this.state.operator!=='')

        this.setState({
            operatorPressed: true,
            operator: x
        });
    }

    handleCalculation = ()=>{

        var result;
        var x = this.state.a;
        var y = this.state.b;

        if(this.state.operator==='' || y===null)
            return;

        switch (this.state.operator){
            case '+':
                result = x + y;
                break;
            case '-':
                result = x - y;
                break;
            case 'x':
                result = x * y;
                break;
            case '/':
                result = x / y;
                break;
            default:
                break;

        }

        this.setState({
            a: result,
            b: null,
            operatorPressed: false,
            operator: ''
        })
    }

    render() { 

        return ( 

            <div>

            <div style={{
                background: '#caf0f8',
                height: 120,                
            }}>
               <h3 style={{
                fontSize: 32,
                top: '25%',
                textAlign: 'center',
                position: 'relative'
               }}> {this.displayText()} </h3>
            </div>
            
            <div className="num">

                <div >
                    <NumButtons value={1} onClick={this.handleNumClick}/>
                    <NumButtons value={2} onClick={this.handleNumClick}/>
                    <NumButtons value={3} onClick={this.handleNumClick}/>

                </div>

                <div >
                    <NumButtons value={4} onClick={this.handleNumClick}/>
                    <NumButtons value={5} onClick={this.handleNumClick}/>
                    <NumButtons value={6} onClick={this.handleNumClick}/>

                </div>

                <div>
                    <NumButtons value={7} onClick={this.handleNumClick}/>
                    <NumButtons value={8} onClick={this.handleNumClick}/>
                    <NumButtons value={9} onClick={this.handleNumClick}/>
                </div>
        
            </div>
        

            <div className="operator">
                <div >
                    <OperatorButton value={'x'} onClick={this.handleOperatorClick}/>
                    <OperatorButton value={'/'} onClick={this.handleOperatorClick}/>
                    <OperatorButton value={'+'} onClick={this.handleOperatorClick}/>
                </div>

                <div >
                    <NumButtons value={0} onClick={this.handleNumClick}/>
                    <OperatorButton value={'-'} onClick={this.handleOperatorClick}/>
                    <OperatorButton value={'='} onClick={this.handleCalculation}/>
                </div>
                
            </div>
            </div>
         );
    }
}
 
export default Layout;