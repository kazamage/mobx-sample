import React from 'react';
import Button from '@/components/Button';

const EntryEMail = ({ onClick }) => (
  <div>
    <input type="email" defaultValue="" />
    <Button onClick={onClick}>Register</Button>
  </div>
);

export default EntryEMail;
