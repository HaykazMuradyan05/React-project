import {connect} from 'react-redux';
import './Likes.css';
import {incrementLikes,decrementLikes} from '../../redux/about/actions';

function Likes(props){
    return(
        <div className='button-controls'>
            <button onClick={props.onIncrementLikes}>💙 {props.likes}</button>
            <button disabled={props.likes === 0} onClick={props.onDecrementLikes}>Dislike</button>
        </div>
    )
}
function mapStateToProps(state){
    const {likes} = state;
    return{
        likes: likes.likes
    }
};

function mapDispatchToProps(dispatch){
    return{
        onIncrementLikes: () => dispatch(incrementLikes()),
        onDecrementLikes: () => dispatch(decrementLikes())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Likes);

// ajspes stanum enq mer funccyanery mapDispatchToProps
// aystex miacnum enq mer comentnery redux-in hatuk funcyayov connect
// ogtagorcum enq hatuk funqcya mapStateToProps,vorpezi karoxananq uxarkel mer pahestic redux-i
// mer comentin
// nuyny anum enq mer metodneri het ev ogtagorcum enq mapDispatchToProps

// disabled-y pasivacnuma mer kochaky
// erb ogtagorcum enq mapStateToProps u mapDispatchToProps apa petqe kanchel react-redux -ic connect-y
// u poxancel mer erku funqcyanery