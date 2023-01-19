import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Navbar } from '../../components/Navbar'
import { Link } from 'react-router-dom';
// import { background } from '../../assets/images/background.jpg'



interface Props {
    title: string;
}

const useStyles = makeStyles({
    background: {
        backgroundImage: 'linear-gradient(180deg, rgba(5,230,231,1) 0%, rgba(98,229,247,1) 28%, rgba(174,238,247,1) 59%, rgba(215,245,245,1) 100%)',
        width: '100%',
        height: '80%',
        backgroundPosition: 'center',
        position: 'absolute',
        // backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    main_text: {
        textAlign: 'center',
        position: 'relative',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'Black',
        fontSize: '25px',
        padding: '30px'
       
    },
    button_text: {
        color: 'white',
        fontSize: '12px',
        padding: '10px',
        fontWeight: 'bold',
        textDecoration: 'none',
        border: 'white 1px',
        borderRadius: '10px',
        backgroundColor: 'black',
        "&:hover": {
            borderRadius: 30,
            backgroundColor: "white",
            color:'black',
            fontWeight: 'bold'
          }
       
      
    
    },
    
    
})

export const Home = ( props: Props ) => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            

            <div className={`${classes.background}`}>
            <div className={classes.main_text}>
                <h1>{ props.title }</h1> 
                <Button>
                    <Link to='/inventory' className={classes.button_text}>Inventory</Link>
                </Button>

                
            </div>

            </div>
          
            
            
           
        </>
    )
}