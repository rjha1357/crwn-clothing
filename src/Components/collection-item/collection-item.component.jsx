import React from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.style.scss';

const CollectionItem = ({ item, addItem }) => {  //id, name, price, imageUrl = item
    const { name, price, imageUrl } = item;
    return (
        <div className='collection-item'>
            <div className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
        </div>
        // https://www.javatpoint.com/git-pull
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
=======
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.style.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
    <div className='collection-item'>
        <div className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButton inverted>Add to Cart</CustomButton>
    </div>
);

export default CollectionItem;
>>>>>>> ba24d945bbf902d82fa891b2cc4d251df722764d
