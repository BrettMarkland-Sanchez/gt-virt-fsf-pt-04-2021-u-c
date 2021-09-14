import React, { useState } from 'react';
import BucketForm from './BucketForm';
import Bucket from './Bucket';

function BucketList() {
  const [bucket, setBucket] = useState([]);

  // Function to add a bucket list item
  const addBucketItem = (item) => {
    if (!item.value) return;
    setBucket(curr => [...curr, item]);
  };

  // Function to mark bucket list to toggle complete status
  const completeBucketItem = (id) => {
    // 'o' is a shorthand varible for for object to keep functions brief
    const updatedBucket = bucket.map(o => {
      if (o.id === id) o.complete = !o.complete;
      return o;
    });
    setBucket(updatedBucket);
  };

  // Function to remove bucket list item and update state
  const removeBucketItem = (id) => {
    const newBucket = bucket.filter(o => o.id !== id);
    setBucket(newBucket);
  };

  // Function to edit the bucket list item
  const editBucketItem = (id, newValue) => {
    if (!newValue.value) return;
    setBucket(bucket => bucket.map(o => o.id === id ? newValue : o));
  };

  return (
    <div>
      <h1>What is on your bucket list?</h1>
      <BucketForm addBucketItem={addBucketItem} />
      <Bucket
        bucket={bucket}
        completeBucketItem={completeBucketItem}
        removeBucketItem={removeBucketItem}
        editBucketItem={editBucketItem}
      />
    </div>
  );
}

export default BucketList;
