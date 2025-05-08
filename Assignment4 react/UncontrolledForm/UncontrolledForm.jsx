import React from'react';
import'./UncontrolledForm.css'
class EmployeeForm extends React.Component{
    constructor(props) {
        super(props);
        this.nameInputRef = React.createRef();
        this.eidInputRef=React.createRef();
        this.dateInputRef=React.createRef();
        this.departmentInputRef=React.createRef();
    }
    onSubmit=(e) =>{
        e.preventDefault();
        let emp={};
        emp.name=this.nameInputRef.current.value;
        emp.eid=this.eidInputRef.current.value;
        emp.date=this.dateInputRef.current.value;
        emp.department=this.departmentInputRef.current.value;
        alert(JSON.stringify(emp));
    }
    render() {
        return(
            <div id="EmployeeForm">
            <form onSubmit={(e) =>this.onSubmit(e)}>
                <label for="name">Title</label>
                <input type="text"id="name"name="name"placeholder="Enter Employee title"
                ref={this.nameInputRef}/>
                <label for="id">ID</label>
                <input type="number"id="eid"name="eid"placeholder="Enter Employee ID"
                ref={this.eidInputRef}/>
                <label for="date">Joining Date</label>
                <input type="date"id="date"name="date"placeholder="Enter date"
                ref={this.dateInputRef}/>
                <label for="department ">department </label>
                <select id="department"name="department"
                ref={this.departmentInputRef}>
                    <option value="">Select</option>
                    <option value="HR">HR</option>
                    <option value="Sales">Sales</option>
                    <option value="Accounts">Accounts</option>
                    </select>
                    <input type="submit"value="Submit"/>
                    </form>
                    </div>
                    )
                }
            }
            
            export default EmployeeForm;

                