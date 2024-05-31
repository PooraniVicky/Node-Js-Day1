import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'

function UserForm({user, onSave, onCancel }) {
  const [formData, setFormData] = useState({name : '', email : '' });
  useEffect(()=>{
    if(user){
      setFormData(user);
    }
  }, [user]);
  const handlechange = (e) =>{
    const { name, value } = e.target;
    setFormData({...formData, [name]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  }
  return (
    <Dialog open onClose={onCancel}>
      <DialogTitle>
        {user._id ? 'Edit user' : 'Add user'}
      </DialogTitle>
      <DialogContent>
        <TextField autoFocus margin='dense' name='name' label='name' type='text' fullwidth='true' value={formData.name} onChange={handlechange}></TextField>
        <TextField autoFocus margin='dense' name='email' label='email' type='email' fullwidth='true' value={formData.email} onChange={handlechange}></TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color='primary'>Cancel</Button>
        <Button onClick={handleSubmit} color='primary'>Save</Button>
      </DialogActions>
    </Dialog>
  )
}

export default UserForm