import React from "react";
import{connect} from "react-redux"
import { Button } from 'reactstrap';

const Control = (props) => {
  return (
    <div>
      <Button outline size='sm' onClick={() =>props.add()}>➕️</Button>
      
      <Button outline  size='sm'onClick={()=>props.reduce()}>➖</Button>
      
      <Button color='info'size='sm' onClick={()=>props.reset() }>🔄</Button>
    </div>
  );
};

function mapDispatchToProps(dispatch){
 return{
     add:()=>{
         dispatch({type:'ADD'})
     },
     reduce:()=>{
         dispatch({type:'REDUCE'})
     },
     reset:()=>{
       dispatch({type:'RESET'})
     }
 }
}

export default connect(null,mapDispatchToProps) (Control);
