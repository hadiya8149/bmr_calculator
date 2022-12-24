import React from "react"
export default function CalorieForm (props){
        return(
            <div className=" form-container d-flex flex-column w-100"> 
            <div className="h-100">
            <form   id="calculate_calorie_form" onSubmit={props.onSubmit}>
                <div className=" form-outline form-group row mb-12">
                    <label htmlFor="gender" className="col-sm-1 col-form-label">
                        Gender
                    </label>
                    <div className="col-sm-2">
                    <select name="gender" id="gender" value={props.calform.gender} onChange={props.onChange}>
                        <option name="gender" value="female">Female</option>
                        <option name="gender" value="male">Male</option>
                    </select>
                   </div>
                    </div>
                    <div className="form-group row mb-12 " >
                       
                    <label htmlFor="weight" className="col-sm-1 col-form-label">
                        Weight
                    </label>
                    <div className="col-sm-2 ipts-group">
                    <input onChange={props.onChange} value={props.calform.weight} name="weight"  type="number" min="1"  className="form-control ipt-values" id="weightInput" aria-describedby=""/>
                    <span className="ipt-units">Kg</span>
                    </div>
                    </div>
                    <div className="form-group row mb-12 ">
                       
                    <label htmlFor="age" className="col-sm-1 col-form-label ">Age</label>
                    <div className="col-sm-2 ipts-group"  >
                    <input name="age" onChange={props.onChange} type="number" min="1"  value={props.calform.age}  className="form-control ipt-values" id="ageInput" aria-describedby=""/>
                    <span className="ipt-units">yrs</span>
                   </div>
                   </div>

                   <div className="form-group row mb-12 ">
                       
                       <label htmlFor="height" className="col-sm-1 col-form-label ipt-values">Height</label>
                       <div className="col-sm-2 ipts-group" >
                       <input name="height"  onKeyDown={props.iptFieldCheck} onChange={props.onChange} type="number" min="1"  value={props.calform.height}   className="form-control" id="ageInput" aria-describedby="" />
                       <span className="ipt-units">cm</span>
                      </div>
                      </div>

                    <div className="form-group row mb-12">
                        
                    <label htmlFor="lifestyle" className="col-sm-1 col-form-label">
                        LifeStyle
                    </label>
                    <div className="col-sm-2 ">
                    <select  name="lifestyle" onChange={props.onChange} value={props.calform.lifestyle} id="lifestyle">
                        <option   name="lifestyle" value="sedentary">Sedentary</option>
                        <option   name="lifestyle" value="lightly-active">Lightly active</option>
                        <option   name="lifestyle" value="mod-active">Moderately active</option>
                        <option   name="lifestyle" value="v-active">Very active</option>
                        <option   name="lifestyle" value="x-active">Extra active</option>
                    </select>
                    </div>
                    </div>
                    <div className="form-group row mb-12">
                        <div className="col-sm-12">
                        <button type="submit" className="btn btn-primary" onClick={props.onSubmit}>Submit</button>
                        </div>
                        

                    </div>
            </form>
            </div>
            </div>
        );
    }
