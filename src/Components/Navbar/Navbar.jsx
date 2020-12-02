import React from 'react'
import { AppBar, Toolbar, IconButton, Badge , MenuItem, Menu, Typography} from '@material-ui/core'
import logo from '../../Assets/logo.png'
import useStyle from './Style'

import { ShoppingCart } from '@material-ui/icons'
const Navbar = () => {
    const classes= useStyle()
    return (
        <>
        <AppBar className={classes.appBar} position='fixed' color='inherit'>
          <Toolbar>
              <Typography varient='h6' className={classes.title} color='inherit'>
                  <img src={logo} alt='logo' height='25px' className={classes.image}/>
                  E-Store
              </Typography>
              <div className={classes.grow}/>
              <div className={classes.button}>
                  <IconButton aria-label='Show Cart items' color='inherit'>
                      <Badge badgeContent={2} color='secondary'>
                          <ShoppingCart />
                      </Badge>
                  </IconButton>
              </div>
          </Toolbar>
        </AppBar>
            
        </>
    )
}

export default Navbar
