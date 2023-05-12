import { DECREMENT, INCREMENT, INPUT_TEXT,COMENT_CREATE,COMMENT_DELETE } from "./type";

const initialState = {
    text:"",
    likes:0,
    comments:[],
}

export const likesReducer =(state = initialState, action)=>{
    //cankacac reducer
    //yndunum e steyty ev eqshny ev veradrdznum steyt
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                likes:state.likes +1,
            };
        case DECREMENT:
            return{
                ...state,
                likes:state.likes-1,
            };
        case INPUT_TEXT:
            return{
                ...state, //katarum enq vichaki kopyan
                text:action.text, //tarmacnum enq text-y
            };
        case COMENT_CREATE:
            return{
                ...state,
                comments:[...state.comments, action.data],
            };
        case COMMENT_DELETE:
            return(()=>{
                const { id } = action;
                const { comments } = state;
                const itemIndex = comments.findIndex((res) => res.id === id)
                console.log(itemIndex,"itemIndex");
                const nextComments = [
                    ...comments.slice(0,itemIndex),
                    ...comments.slice(itemIndex + 1),
                ]
                return{
                  ...state,
                  comments:nextComments,
                //   comments:[...state.comments, action.data] 
                }
                    

                
            })();
                
            
        default:
           return state;
    }
}