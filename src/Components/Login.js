import React from 'react'
import {connect} from 'react-redux'
import {getlogininfo} from '../Actions/Empactions'


const Login=(props)=>{

    React.useEffect(()=>{
        props.getlogininfo()
    },[])
    
    const [email,setEmail]= React.useState("");
    const [password,setPasswrd]=React.useState("")
    
        return(
        <div className="container">
               <div style={{
    height:'20px'
}}></div>
            <div className="login">
                <div className="container">
                    <div className="row jumbotron">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">One of Us?</h1>
                            <p className="lead text-center">Already have an account..Just SignIn</p>
                            <form onSubmit={(e)=>{
                                e.preventDefault();
                                if(email===props.cred.username&&password===props.cred.password){
                                    props.history.push('/dashboard')
                                }
                                else{
                                    alert("Invalid Username or password")
                                }
                            }}> 
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-lg bg-dark text-white" placeholder="Email Address" name="email" defaultValue="" required
                                    onChange={(e)=>{
                                        setEmail(e.target.value)
                                    }}/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control form-control-lg bg-dark text-white" placeholder="Password" name="password"  defaultValue="" required
                                    onChange={(e)=>{
                                        setPasswrd(e.target.value)
                                    }}/>
                                </div>
                                    <input type="submit" className="btn btn-info btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    console.log(state.emp.cred)
    return({
        cred:state.emp.cred
    })
}
export default connect(mapStateToProps,{getlogininfo})(Login);