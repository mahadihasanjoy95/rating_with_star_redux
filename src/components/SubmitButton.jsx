import React from "react";
import {connect} from 'react-redux'

function SubmitButton(props) {
    return (
        <div>
            <button onClick={()=>{alert("Total Coffee: "+props.count+"\nRating: "+props.rating)}}>⏭️</button>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        count: state.count,
        rating : state.starValue
    }
}
export default connect(mapStateToProps)(SubmitButton)



