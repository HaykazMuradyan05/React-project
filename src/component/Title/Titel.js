import {useDispatch, useSelector} from 'react-redux';
// useDispatch ayn ogtagorcelu e mapStateToProps function-i poxaren

// useSelector ogtaqorcelu enq mapStateToProps function-i poxaren
// import {inputText} from '../../a'
import './Titel.css'
import { inputText } from '../../redux/about/actions';

function Titel(props){
    console.log('props titel >',props);
    const text = useSelector(state =>{
        const {text} = state;
        return text.text;
    });
    const dispatch = useDispatch();

    const handleChange = (e) =>{
        dispatch(inputText(e.target.value))//mer text-y reducrin poxancelu hamar
    }

    return(
        <div className='card-title'>
            <div className='card-title-top'>
                <input className='inputtitel' type='text' onChange={handleChange}/>
            </div>
            <p>{text}</p>
        </div>
    )
}
export default Titel

// ogtagorcelov erku hukery integrecinq pahestin reduxi
// hukery ogtagorcelov arden chenq ogtagorcum function conect-y

// useDispatch-y huk e vorin importenq anum react-redux -i gradaranic nranov hxum enq anum
// kam reducrin enq poxancum mer arjeqy
// useSelector-ov stnaum enq mer pahpanac arjeqy redux-is
// useSelector-huk e react-redux -i gradaranic