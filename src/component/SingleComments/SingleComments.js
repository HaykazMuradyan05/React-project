import { useState,useEffect } from "react";//amen angam erb ga nor teqst menq petq texavorenq
//popoxakani mej, dra hamar ogtagorcum enq hukery
import './SingleComments.css'
import {commentDelete} from '../../redux/about/actions';
import { useDispatch } from "react-redux";

function SingleComments({data}){//amen comenti hamar stanum enq teqsty rv ID
    // console.log("single comment props >",props);
    const[commentText, setCommentText]=useState('');
    const{text,id}=data;
    const dispach =useDispatch();

    const handleUpdate=(e)=>{
        e.preventDefault();
        console.log('submit ->>', commentText);
    }

    const handleDelete = (e)=>{
        // console.log('click>>');
        e.preventDefault();
        dispach(commentDelete(id));
    }

    useEffect(()=>{//amen angam erb poxvi texty ayn kavelacvi
        if(text){
            setCommentText(text)
        }
    },[text]);

    const hendleInput = (e) => {//aysinqn erb menq kgrenq inchvor ban hin komentic heto
                                //ayn aftomat poxacvelu e yntaciq steyt
                                //popoxakan commentText-y:
        setCommentText(e.target.value)
    }

    return(
        <form onSubmit={handleUpdate} className="comment-item">
            <span onClick={handleDelete} className="comment-item-delete">X</span>
            <input type="text" value={commentText} onChange={hendleInput}/>
            <input type="submit" hidden/>
        </form>
    )

}

export default SingleComments

// erb menq grum enq koment ayn aftomat linum e render ev avelanum
//popoxakan commentText-i mej

//hima uzum enq tarmacnel erb uzum enq mer comenty
//usti formi mej bacum enq onSubmit funqcyan