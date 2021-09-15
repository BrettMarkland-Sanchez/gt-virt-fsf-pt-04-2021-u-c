import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BucketForm from './BucketForm';

function Bucket({ 
  bucket, 
  completeBucketItem, 
  editBucketItem, 
  removeBucketItem,
}) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    eagerness: '',
  });

  const submitUpdate = (value) => {
    // logic to update the `edit` value in state after a user updates an entry
    editBucketItem(value.id, value);
    // the key:value pairs in the `edit` object back to empty strings
    setEdit({
      id: null,
      value: '',
      eagerness: '',
    });
  };

  // If the user is attempting to edit an item, render the bucket form with the edit variable passed as a prop
  if (edit.id) {
    return <BucketForm edit={edit} submitUpdate={submitUpdate} />;
  }
  return bucket.map((item, index) => {
    const { id, complete, eagerness, value } = item;
    
    let classList = `bucket-row ${eagerness}`; 
    if (complete) classList += ' complete';

    return (
      <div className={classList} key={index}>
        <div 
          key={id} 
          className="item-label" 
          onClick={() => completeBucketItem(id)}
        >
          {value}
        </div>
        <div className="icons">
          <p className="edit-icon" onClick={() => setEdit(item)}>✏️</p>
          <p onClick={() => removeBucketItem(id)}>🗑️</p>
        </div>
      </div>
    );
  });
}


Bucket.propTypes = {
  completeBucketItem: PropTypes.func.isRequired,
  editBucketItem: PropTypes.func.isRequired,
  removeBucketItem: PropTypes.func.isRequired,
  bucket: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
    eagerness: PropTypes.string,
    complete: PropTypes.bool,
  })),
};

export default Bucket;
