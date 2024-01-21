import React from 'react'

export default function Alert(props) {

    // const sentenceCase = (word) =>{
    //     let lower = word.toLowerCase();
    //     return lower.charAt(0).toUpperCase() + lower.slice(1);
    // }

  return (
    <div style={{height: '35px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{props.alert.message}</strong>
      </div>}
    </div>
    
  )
}
