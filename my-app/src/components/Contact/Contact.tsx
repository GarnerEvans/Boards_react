import React from 'react'
import { Navbar } from '../Navbar'
import { makeStyles } from '@material-ui/core';



const useStyles = makeStyles({
    
    background: {
        backgroundImage: 'linear-gradient(180deg, rgba(5,230,231,1) 0%, rgba(98,229,247,1) 28%, rgba(174,238,247,1) 59%, rgba(215,245,245,1) 100%)',
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        position: 'absolute',
        zIndex: -1,
    },
    main_text: {
        textAlign: 'center',
        position: 'relative',
        top: '45%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'black',
        lineHeight: "24px",
        marginTop: '30px',
        marginBottom: '10px',
        fontSize: '16px'
    },
    heart: {
        width: '20%',
        marginTop: '40px',
     
     
        
    }
    
    
    
})

export const Contact = () => {
    const classes =useStyles() 
    return (
       
<div>
<Navbar />
<div className={`${classes.background}`}>
<div className={classes.main_text}>
Buni surfboards can be found on instagram at (@buniboards) or contacted through one of our beloved shapers.
You'll probably have the best odds just looking for us out in the ocean though. <br></br>
Thanks for lending us your eyes
        
<div>

</div>


</div>
</div>


</div>
    )
}