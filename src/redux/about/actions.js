import { 
    INPUT_TEXT,
    INCREMENT,
    DECREMENT,
    COMMENT_DELETE,
    COMENT_CREATE,
} from "./type";


export function incrementLikes(){
    return{
        type: INCREMENT,
    }
}
export function decrementLikes(){
    return{
        type: DECREMENT,
    }
}
export function inputText(text){
    return{
        type: INPUT_TEXT,
        text,
    }
}
export function commentDelete(id) {
    return{
        type:COMMENT_DELETE,
        id,
    }
}
export function commentCreate(text,id){
    return{
        type:COMENT_CREATE,
        data:{text,id},
    }
}