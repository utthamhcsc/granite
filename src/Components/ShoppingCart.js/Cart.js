import React from 'react';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CartList from './../ShoppingCart.js/CartList'
import Checkboxes from './../ShoppingCart.js/Checkbox';
import Discription from './../ShoppingCart.js/Disp';
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Routers from './../Router/Router';
import Payment from './../ShoppingCart.js/Payment';
import SideLeft from './../ShoppingCart.js/Side_Left';
import { useCart } from '../../hooks/useCart';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    
    padding: theme.spacing(2),
  
   
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
 const {cartItems}=useCart();

  return (
    
      <div className="Cart" style={{ marginTop:"50px" }}>
    
    <div className={classes.root}>
      <Grid container spacing={4}>
      
       
        <Grid item xs={4}>
       <SideLeft/>
        </Grid>
      
        <Grid  item xs={8}>
        <p className="MY-Shopping-CART">MY Shopping CART</p>
        {cartItems?.map((value) => (
        <div className="side_right">
   
       
        <div className={classes.root}>
        <Grid container spacing={3}>
        <Grid item xs={1}>
        <Checkboxes/>        
        </Grid>
        <Grid item xs={4}>
        <CartList/>        
        </Grid>
        <Grid item xs={7}>
         <Discription {...value}/>
        </Grid>
        
        </Grid>
        </div>
        
        
        </div>
        ))}
        <Link to="/Payment"> <Button className="Path-890" variant="contained" color="#ffeb3b" style={{ backgroundColor:"#ffc107",marginBottom:"100px",marginTop:"100px",objectPosition:"center"}}>
    <b>Checkout</b>
  </Button> </Link>
       </Grid>
     


      </Grid>
      
    </div>

    
    </div>
    
  );
}