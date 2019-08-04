import React from 'react';
import {increment,incrementAsync,decrement} from './../Actions/action'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
const mapStateToProps=(state)=>{
    return({
        counter:state.counter
    });
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        increment,decrement,incrementAsync
    },dispatch);
}

class Counter extends React.Component
{
    render()
    {
        return(<div>
             <p>{this.props.counter}</p>
            <button onClick={()=>this.props.increment()}>Increase</button>
            <button onClick={()=>this.props.decrement()}>Decrease</button>
            <button onClick={()=>this.props.incrementAsync()}>Increase Async.</button>
            </div>
        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);