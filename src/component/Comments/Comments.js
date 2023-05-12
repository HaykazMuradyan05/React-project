import { useState } from "react";//vorpisi stananc defold vichk
import SingleComment from '../../component/SingleComments/SingleComments'
// import aneluc heto mer Comment-y stexcum enq app.js
import { commentCreate } from "../../redux/about/actions";
import uniqid from 'uniqid'; //yurahatuk id e talis
// import {comments} from '../../redux/about/reducer'
import './Comments.css'
import { useDispatch, useSelector } from "react-redux";

function Comments(props){
    const [textComment, setTexyComment]=useState('');
    // console.log("comments props >", props);
    const comments = useSelector(state =>{
        // console.log('redux state >', state);
        const {comments} = state;
        return comments.comments //aystexov kpahpani bolor komentnery
    });
    console.log('comments > ',comments);
    const dispatch = useDispatch();
    const handleInput=(e)=>{
        console.log('inpt >>>', e.target.value);
        setTexyComment(e.target.value)
    }
    const handleSubmit = (e) =>{//submit jamanak menq form-i mej atmena
        //  enq talis ira defoldayin vichaky
        e.preventDefault();//dra hamar e
        console.log("textComent>>>",textComment);//uxarkum enq textComment-i vichaky
        const id=uniqid();
        dispatch(commentCreate(textComment, id));
        setTexyComment(e.target.value="")
    }
    return(
        <div className="card-comments">
            <form onSubmit={handleSubmit} className="comment-item-create">
                <input type="text" className="card-input" value={textComment} onChange={handleInput}/>
                <input type="submit" hidden/>
            </form>
            {!!comments?.length && comments?.map(res =>{
                return <SingleComment key={res.id} data={res}/>
            })}
        </div>
    )
}

export default Comments

//velyun talis enq skzbnakan arjeqy
//handleSubmit-um dispach enq anum mer eqshny ev poxancum tvyalnery, dranq en henc comentnery ev id
//inputneric heto avelacnum enq mer komentnery, vorpezi tesnenq ekranin
//aynuhetev gnum enq SingleComment render enq anum amen mi arandin komenty