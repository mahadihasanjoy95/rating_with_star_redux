import React from "react";
import {connect} from 'react-redux'
function Cart(props) {
    return (
        <container><h1>🛒:{props.abc}</h1></container>
    );
}
const mapStateToProps = (state) => {
    return {abc: state.count}
}

export default connect(mapStateToProps)(Cart)
