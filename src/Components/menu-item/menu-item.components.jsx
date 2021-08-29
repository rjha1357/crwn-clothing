import React from 'react';
import './menu-item.style.scss';

/* 
1.  Here give focus on CSS. The vlaue here id writen in camelcase, and in css the values writen in '-' dash
    example: in css file (background-image) and here we can write in (backgroundImage).
2. the last 2 images are big, because we have passed the size value as large and in css give hight to 380px.
    whenever we have to change the size just change in css.
3.  css: for changing size with animation in style page on content

*/

const MenuItem = ({ title, imageUrl, size }) => (
    <div className={`${size} menu-item`} >
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }} />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;