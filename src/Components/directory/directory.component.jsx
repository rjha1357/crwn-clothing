// import { render } from '@testing-library/react';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.components';
import './directory.styles.scss';

const Directory = ({ sections }) => (
    <div className="directory-menu">
        {
            /* one way
            this.state.sections.map(section => (
              // title={section.title}  if we want to pass only title then we can write in this method..
                 <MenuItem  />
             )) */

            /* another way by destructuring sections */
            sections.map(({ title, imageUrl, id, size }) => (
                //passing the values of id, title and imgUrl to menuitem component..
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);