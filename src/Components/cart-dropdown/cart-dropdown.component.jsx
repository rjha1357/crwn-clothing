<<<<<<< HEAD
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { withRouter } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems, selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items' >
            {
                cartItems.length ?
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                    :
                    <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => { history.push('/checkout'); dispatch(toggleCartHidden()); }}>GO TO CHECKOUT</CustomButton>
    </div>
);

/* const mapStateToProps = state => ({  // ({ cart: { cartItems } }) //before
    cartItems: selectCartItems(state)
}); */

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
=======
import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.style.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton> GO TO CHECKOUT </CustomButton>
    </div>
);

export default CartDropdown;
>>>>>>> ba24d945bbf902d82fa891b2cc4d251df722764d
