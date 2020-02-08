import React from 'react'
import {connect} from 'react-redux'
import {getallEmployees} from '../Actions/Empactions'

const Dashboard=(props)=>{
    React.useEffect(()=>{
      props.getallEmployees()
    },[])
        
      const emplist=props.employees?props.employees.map(emp=>(
            
                  <tr key={emp.id}>
                      <td>{emp.name}</td>
                  <td>{emp.age}</td>
                  <td>{emp.gender}</td>
                  <td>{emp.email}</td>
                  <td>{emp.phoneNo}</td>
                  </tr>
            
         ))
      :null
        
    return(
        <div className="container">
            <div style={{
    height:'20px'
}}></div>
            <div className="card text-center bold" style={{
                height:'30px'
            }}>Employee List</div>
            <div style={{
    height:'20px'
}}></div>
            <table className="table table-striped table-bordered">
            <thead>
                          <tr>
                              <td>Name </td>
                              <td>Age</td>
                              <td>Gender</td>
                              <td>Email</td>
                              <td>Phoneno</td>
                          </tr>
                      </thead><tbody>
                          {emplist}
                      </tbody>
                      </table>
        </div>
    )
}

const mapStateToProps=(state)=>{
    
    return{
        employees:state.emp.empdata
    }
}

export default connect(mapStateToProps,{getallEmployees})(Dashboard);