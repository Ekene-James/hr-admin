import React from 'react'
import './boxComponent.css'
import Grid from '@material-ui/core/Grid';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import Divider from '@material-ui/core/Divider';
import { colors } from '@material-ui/core';

function BoxComponent(props) {
    const {color, text , number} = props
    return (
        
             <div  className='box-main-cont'>
           <div className='box-grid-cont' item >
               <div className='box-contents-cont'>
                   
               <div className={`icon ${color}`}><PeopleAltIcon/></div>
               <div className='text-cont'>
                   <span>{text}</span>
                   <h1>{number}</h1>
               </div>
               </div>


           </div>
               <Divider className='divider'/>

           
       </div>
     
       
    )
}

export default BoxComponent
