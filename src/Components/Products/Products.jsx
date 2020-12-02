import React from 'react'
import {Grid} from '@material-ui/core'
import Product from './Product/Product'
import useStyles from './Styles'

const products=[
    {id:1, name:'shoes' , description: 'Running Shoes' , Price: '$10', image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fshoes%2F&psig=AOvVaw2DsoOAamcNdqnNmEAHi9zb&ust=1606988490497000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKiR3-OAr-0CFQAAAAAdAAAAABAF"},
    {id:2, name:'Macbook' , description: 'Apple Macbook' , Price: '$125' , image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.apple.com%2Fshop%2Fbuy-mac%2Fmacbook-pro&psig=AOvVaw0waMzYHiww0KkYKJX4KezM&ust=1606988560535000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPC9g4iBr-0CFQAAAAAdAAAAABAD"}
]

const Products = () => {

    const classes = useStyles()

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify='center' spacing={4}>
              {products.map((product)=> (
                  <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                      <Product product={product} />
                 </Grid>     
              ))}
            </Grid>
            
        </main>
    )
}

export default Products
