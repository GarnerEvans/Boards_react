import React from 'react'
import { Navbar } from '../Navbar'
import { makeStyles } from '@material-ui/core';
// import boards from '../../assets/images/boards.PNG'



const useStyles = makeStyles({
    background: {
        backgroundImage: 'linear-gradient(90deg, rgba(5,230,231,1) 0%, rgba(98,229,247,1) 28%, rgba(174,238,247,1) 59%, rgba(215,245,245,1) 100%)',
        width: '100%',
        height: '90%',
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
        fontSize: '16px',
        padding: '20px'
    },
    tiles: {
        border: 'solid',
        width: '45%',
        height: '70%',
        marginTop: '15px',
     
     
        
    }
    
    
})

export const About = () => {
    const classes =useStyles() 
    return (
       
<div>
<Navbar />
<div className={`${classes.background}`}>
<div className={classes.main_text}>
Buni Surfboard company was founded by five friends around a common love for riding waves. <br></br>
We like to think of ourselves as a small army of surfboard artisans, and though 
we pride ourselves in every aspect of our work, it would be fair to say that our 
collective organizational skills could be improved. In an effort to do just this, I have created 
a surfboard inventory application that we can use to add finished boards to as opposed to our current method of 
sending a photo of a finished board to one another then forgetting about it. This list can be edited as boards are sold
and refrenced by us to identify what we need to be marketing as it sits in our inventory. <br />
{/* <img  className = {classes.tiles} src={boards} alt= 'board rack'/> */}


</div>
</div>


</div>
    )
}