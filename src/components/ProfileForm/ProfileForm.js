/*
локальное состояние у формы, тк за ним не нужно следить. Если после заполнения формы покинуть страницу, то форму очищать не нужно, тк она очистится сама, тк компонент уничтожается
*/

import { useState } from "react";
import { useDispatch } from "react-redux";
import { Input, Button } from "@mui/material";
import { updateProfile } from "../../store/profile";

export function ProfileForm({ firstName, lastName, phone }) {
  const [form, setForm] = useState({ firstName, lastName, phone });

  const dispatch = useDispatch();

  const handleChangeForm = (event) => {
    const field = event.target.getAttribute("data-name");

    setForm({
      ...form,
      [field]: event.target.value, //dynamic key
    });
  };
  //style={{ width: 300 }} переделать стили
  return (
    <div style={{ width: 300 }}>
      <h1>Edit profile</h1>

      <Input
        placeholder="firstName"
        fullWidth
        inputProps={{
          "data-name": "firstName",
        }}
        onChange={handleChangeForm}
        value={form.firstName}
      />
      <Input
        placeholder="lastName"
        fullWidth
        inputProps={{
          "data-name": "lastName",
        }}
        onChange={handleChangeForm}
        value={form.lastName}
      />
      <Input
        placeholder="phone"
        fullWidth
        inputProps={{
          "data-name": "phone",
        }}
        onChange={handleChangeForm}
        value={form.phone}
      />

      <Button
        onClick={() => {
          dispatch(updateProfile(form)); //dispatch -> actionCreator(updateProfile) -> payload(new profile) in action(updateProfile) -> reducer
        }}
      >
        save
      </Button>
    </div>
  );
}