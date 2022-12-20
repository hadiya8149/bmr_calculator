import {useState} from "react"
import React from "react"
import CalorieForm from "./cal2form"
// now we want to display the result on the main page

 const CalcForm = props=>{

    var bmr;
    const [calform, setCalForm] =useState({
        gender:"female",
        age:undefined,
        height:undefined,
        weight:undefined,
        lifestyle:"sedentary"
    
    })
    function iptFiedCheck(event){
        console.log("hi this is iptfield chek")
        console.log(event);
    }
    function calculateBMR(event){
        switch(calform.gender){
            case 'male':
                bmr  = (10 * calform.weight + (6.25 * calform.height) - (5 * calform.age) + 5)
                break;
            case 'female':
                bmr  = (10 * calform.weight + (6.25 * calform.height) - (5 * calform.age) -161)
                break;
            default:
                break;
        }
        switch(calform.lifestyle){
            case 'sedentary':
                //1.2, 1.375, 1.55, 1.725and1.9
                bmr*=1.2;
                break;
            case 'lightly-active':
                bmr*=1.375;
                break;
            case 'mod-active':
                bmr*=1.55;
                break;
            case 'v-active':
                bmr*= 1.725;
                break;
            case 'x-active':
                bmr*=1.9;
                break;
            default:
                break;
            
        }
        return bmr
    }
    const root = document.getElementById('root')
    function paraBMR(ans){
        const element = (
            <p>
                Your BMR is : {ans}
            </p>
        )
        root.render(element);
    }
    function handleChange(event){
        const updatedForm = {...calform, [event.target.name]:event.target.value}
        setCalForm(updatedForm)
        console.log(calform)
    }
     
    function handleSumbit(event){
        event.preventDefault();
        console.log(calform)
        console.log("bmr calculate suuceesfully")
        var ans = calculateBMR();
        console.log(ans)
        const p = document.getElementById("bmr")
        p.textContent+=ans;

    }
    return(
        <div className="main-content">
            
        <p id="info">
        <h5>BMR(Basal Metabolic Rate)</h5>
            Basal metabolic rate is the number of calories your body needs to accomplish its most basic (basal) life-sustaining functions.</p>
        <CalorieForm calform={calform} onChange={handleChange} onSubmit ={handleSumbit} onKeyDown={iptFiedCheck} />

        <p id="bmr"> Your bmr is :  </p>
        </div>
    );
}
export default CalcForm;