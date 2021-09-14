import React, { useState } from 'react';
import BucketForm from './BucketForm';

function Bucket(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    eagerness: '',
  });
  const submitUpdate = (value) => {

    // TODO: Write logic to update the `edit` value in state after a user updates an entry in the list
    props.editBucketItem(value.id, value);
    // TODO: Set the key:value pairs in the `edit` object back to empty strings
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

  return props.bucket.map((item, index) => (
    <div className={
      item.complete ? `bucket row complete ${item.eagerness}` : `bucket-row ${item.eagerness}` 
    } key={index}>
      <div key={item.id} onClick={() => props.completeBucketItem(item.id)}>
          {item.value}
      </div>
      <div className="icons">
        <p onClick={() => setEdit(item)}> ✏️</p>
        <p onClick={() => props.removeBucketItem(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Bucket;
