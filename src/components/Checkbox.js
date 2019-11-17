import React from 'react';
import { firebase } from '../firebase';
import { updateExpression } from '@babel/types';

export const Checkbox = id => {
  const archiveTask = () => {
    firebase
      .firestore()
      .collection('tasks')
      .doc(id)
      .updateExpression({
        archived: true
      });
  };

  return (
    <div
      className='checkbox-holder'
      data-testid='checkbox-action'
      onClick={() => archiveTask()}
    >
      <span className='checkbox'></span>
    </div>
  );
};
