import React from "react";
import {connect} from 'react-redux'

const Count = (props) => {
    return (<div>
            <container><h1>☕:{props.abc}</h1></container>
        </div>);
};

const mapStateToProps = (state) => {
    return {abc: state.count}
}

export default connect(mapStateToProps)(Count)