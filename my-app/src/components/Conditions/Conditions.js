import React from 'react'

export const Conditions = (props) => {
    return (
        <div>
            {props.responseObj.cod === 200} ?
        <div><p><strong>
            {props.responsObj.name}
        </strong> </p>
        <p>
            It is currently {Math.round(props.responseObj.main.temp)} degrees out
        </p>
        </div>
        
        </div>

    )
}