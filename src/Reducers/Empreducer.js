const initState={
    cred:'',
    empdata:''
}

const Empreducer=(state=initState,action)=>{

    switch (action.type){
        case 'GET_LOGIN_INFO':
            {
          
            return{
                ...state,
                cred:action.payload
            }}

        case 'GET_ALL_EMPLOYEES':
            {
               
                return{
                    ...state,
                    empdata:action.payload
                }
            }    
        default:
      return state;
    }
}

export default Empreducer;