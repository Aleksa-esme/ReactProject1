/*
локальное состояние у формы, тк за ним не нужно следить. Если после заполнения формы покинуть страницу, то форму очищать не нужно, тк она очистится сама, тк компонент уничтожается
*/

import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, TextField, Avatar, InputLabel, Box } from "@mui/material";
import SaveAltSharpIcon from '@mui/icons-material/SaveAltSharp';
import { updateProfile } from "../../store/profile";
import styles from "./profileForm.module.css";

export function ProfileForm({ firstName, lastName, phone, image }) {
  const [form, setForm] = useState({ firstName, lastName, phone, image });
  const [imageFile, setImageFile] = useState({ title: '' });

  const dispatch = useDispatch();

  const handleChangeForm = (event) => {
    const field = event.target.getAttribute("data-name");

    setForm({
      ...form,
      [field]: event.target.value, //dynamic key
    });
  };

  const handleImageChange = (event) => {
    const cFiles = event.target.files;
    setImageFile({ title: cFiles[0].name });
    if (cFiles.length > 0) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        form.image = fileReader.result;
      }
      fileReader.readAsDataURL(cFiles[0]);
    } 
  };

  return (
    <div className={styles.form}>
      <div className={styles.form_image}>
        <Avatar src={form.image} sx={{ width: 156, height: 156 }} variant='circular' />
        <div className={styles.input}>
          <input 
            type="file" 
            id="file" 
            className={styles.file} 
            onChange={handleImageChange} 
            >
          </input>
          <InputLabel htmlFor="file" className={styles.input_label} >
            <SaveAltSharpIcon color='primary' />
            Select file
          </InputLabel>
          <TextField
            disabled
            fullWidth
            variant="standard"
            value={imageFile.title}
          />
          
        </div>
        <Button onClick={() => {
            dispatch(updateProfile(form));
          }}>Save image</Button>
        
      </div>

      <div className={styles.form_info}>
      <Box component="form" sx={{'& .MuiTextField-root': { m: 1 }}}>
        <TextField
          label="firstName"
          fullWidth
          inputProps={{"data-name": "firstName"}}
          onChange={handleChangeForm}
          defaultValue={form.firstName}
          variant="standard"
        />
        <TextField
          label="lastName"
          fullWidth
          inputProps={{"data-name":  "lastName"}}
          onChange={handleChangeForm}
          defaultValue={form.lastName}
          variant="standard"
        />
        <TextField
          label="phone"
          fullWidth
          inputProps={{"data-name":  "phone"}}
          onChange={handleChangeForm}
          defaultValue={form.phone}
          variant="standard"
        />
      </Box>
      <Button
        onClick={() => {
          dispatch(updateProfile(form)); //dispatch -> actionCreator(updateProfile) -> payload(new profile) in action(updateProfile) -> reducer
        }}
      >Edit profile
      </Button>
      </div>
    </div>
  );
}