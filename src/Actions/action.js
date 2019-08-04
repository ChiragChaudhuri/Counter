export const increment=()=>{
    return({type:"INCREMENT"
    });
}
export const decrement=()=>{
    return({type:"DECREMENT"});
}
export const incrementAsync=()=>{
    return(dispatch)=>{
    setTimeout(()=>dispatch(increment()),5000)
    }
}