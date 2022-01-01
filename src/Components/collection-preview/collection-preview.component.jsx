import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.style.scss';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
<<<<<<< HEAD
            {items.filter((item, idx) => idx < 4).map((item) => (  //{ id, ...otherItemProps }
                <CollectionItem key={item.id} item={item} />
=======
            {items.filter((item, idx) => idx < 4).map(({ id, ...otherItemProps }) => (
                <CollectionItem key={id} {...otherItemProps} />
>>>>>>> ba24d945bbf902d82fa891b2cc4d251df722764d
            ))}
        </div>
    </div>
);

export default CollectionPreview;