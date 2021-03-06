import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Form from './form/Form';

function BucketForm({ addBucketItem, edit, submitUpdate }) {
  // Sets initial value of form if there is an edit object available
  const handleSubmit = (data) => {
    // If props.edit exists use id otherwise generate an id
    if (!edit) {
      addBucketItem({ ...data, id: uuidv4() });
    } else {
      submitUpdate({ ...data, id: edit.id });
    }
  };

  if (!edit) {
    return <Form onSubmit={handleSubmit}/>;
  }
  return (
    <Form 
      eagerness={edit.eagerness}
      title={edit.value}
      placeholder={'Update Bucket List'}
      onSubmit={handleSubmit}
    />
  );
}

BucketForm.propTypes = {
  addBucketItem: PropTypes.func,
  submitUpdate: PropTypes.func,
  edit: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
    eagerness: PropTypes.string,
    complete: PropTypes.bool,
  }),
};

export default BucketForm;
