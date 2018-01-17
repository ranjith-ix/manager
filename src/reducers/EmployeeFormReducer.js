import{
    EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE={
    name:'',
    phone:'',
    shift:'',
};

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case EMPLOYEE_UPDATE:
            console.log(action);
        //the below used technique or representation is Key Interpolation.. Key is determined at run-time 
            return { ...state, [action.payload.prop]: action.payload.value };       
        default:
            return state;
    };    
};