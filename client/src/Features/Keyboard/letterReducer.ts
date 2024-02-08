export interface LetterState{
    data: string;
}

const initialState: LetterState ={
    data: "asd"
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function letterReducer(state = initialState, action: any){
    return state;
}