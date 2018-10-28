import React from 'react';
import Button from './Button';

const EntryEMail = ({ onClick }) => (
  <div>
    <input type="email" defaultValue="" />
    <Button onClick={onClick}>Register</Button>
  </div>
);

export default EntryEMail;
