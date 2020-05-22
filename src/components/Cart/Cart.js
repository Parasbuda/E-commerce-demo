import React, { Component } from 'react'
import Title from "../Title"
import CartColumn from "./CartColumn"
import EmptyCard from './EmptyCard'
import {ProductConsumer} from "../Context"
import CartList from './CartList'
import CartTotals from "./CartTotals"
export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {
                        (value)=>{
                            const {cart}=value
                            if(cart.length>0){
                                return(
                                    <React.Fragment>
                                        <Title name="Your" title="cart"/>
                                             <CartColumn/>
                                             <CartList value={value}/>
                                             <CartTotals value={value}/>
                                    </React.Fragment>
                                )
                            }
                            else{
                                return(
                                    <EmptyCard/>
                                )
                            }
                        }
                    }
                </ProductConsumer>
                
               
            </section>
        )
    }
}
