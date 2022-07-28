import {connect} from "react-redux";
const StarRating = (props) => {

    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                index = index + 1;
                return (
                    <button
                        type="button"
                        key={index}
                        className={index <= ( props.abc|| props.abc) ? "on" : "off"}
                        onClick={() => props.lolo(index)}
                    >
                        <span className="star">&#9733;</span>
                    </button>
                );
            })}
        </div>
    );
};

function handleDispatch(dispatch) {
    return{
        lolo:(i)=>{
            dispatch({type:'CHANGE_STAR',payload: i})
        }
    }
}
const mapStateToProps = (state) => {
    return {abc: state.starValue}
}

export default connect(mapStateToProps,handleDispatch) (StarRating);