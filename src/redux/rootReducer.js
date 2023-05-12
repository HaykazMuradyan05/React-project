import {combineReducers} from 'redux';
import { likesReducer } from './about/reducer';
//sranov menq miacnum enq bolor rediucernery mer componetin

const rootReducer = combineReducers({
    text:likesReducer,
    likes:likesReducer,
    comments:likesReducer,
    
})

export default rootReducer