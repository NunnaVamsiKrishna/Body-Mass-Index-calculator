import React, { useState } from 'react'
import '../App.css'
/*Underweight = <18.5
Normal weight = 18.5–24.9
Overweight = 25–29.9
Obesity = BMI of 30 or greater*/
const Main = () => {
    const[hei,setHei]=useState()
    const[wei,setWei]=useState()
    const[b,setB]=useState('enter')
    const[meter,setMeter]=useState(true)
    const[kilo,setKilo]=useState(true)
    const[z,setZ]=useState()
    const[p,setP]=useState()
    function bmi(){
        let x=wei/(hei*hei)
        setP(x)
        console.log(wei)
        console.log(hei)
        if(x<=18.5)
        return setZ('Under-Weight BMI')
        else if(x>=18.5&&x<=24.9)
        return setZ('Normal BMI')
        else if(x>=25&&x<=29.9)
        return setZ('Overweight BMI')
        else
        return setZ('Obese BMI')
    }
    function toMeter(w){
        return w*0.3048;
    }
    function toKilo(w){
        return w*0.453592;
    }
    const handleWeiIn=(e)=>{
        if(kilo){
            setWei(e.target.value)
            
        }
        else{
            setWei(toKilo(e.target.value))
        }
    }
    const handleHeiIn=(e)=>{
        if(!meter){
            setHei(toMeter(e.target.value))
        }
        else{
            setHei(e.target.value)
        }
    }
    const handleHei=(e)=>{
        if(e.target.value ==='feet'){
            setMeter(false);
        }
        else
        setMeter(true)
    }
    const handleWei=(e)=>{
        if(e.target.value ==='pounds'){
            setKilo(false);
        }
        else
        setKilo(true)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setB(bmi())
    }
    return (
        <>
        <div className='container'>
            <form onSubmit={handleSubmit}>
            <div className='rdiv'>
            <label>Height in:</label> 
            <input type='radio' value='feet' name='height' onChange={handleHei}/>Feet
            <input type='radio' value='meters' name='height' onChange={handleHei}/>Meters<br />
            </div>
            <div className='indiv'>
            <input type='text' placeholder={'Height'} name='hei_input' onChange={handleHeiIn}></input><br />
            </div>
            
            <div className='rdiv'>
            <label>Weight in:</label>
            <input type='radio' value='kilograms' name='weight' onChange={handleWei}/>kilograms
            <input type='radio' value='pounds' name='weight' onChange={handleWei}/>pounds
            <br />
            </div>
            <div className='indiv'>
            <input type='text' placeholder='Weight' onChange={handleWeiIn}></input>
            </div>
            <div>
            <button name='submit'>Submit</button>
            </div>
            </form>
            <h2>{p}</h2>
            <h3>{z}</h3>
        </div>
        </>
    )
}

export default Main;
