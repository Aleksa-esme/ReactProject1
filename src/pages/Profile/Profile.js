import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Avatar } from "@mui/material";
import { toggleVisibleProfile } from "../../store/profile";

export function Profile() {
    const dispatch = useDispatch();
    const { firstName, lastName, isVisibleProfile} = useSelector(state => state.profile);
    return (
        <>
        <button onClick={() => dispatch(toggleVisibleProfile())}>toggle profile visible</button>
        {isVisibleProfile && (
            <div>
                <Avatar src="/broken-image.jpg" />
                <h3>{firstName} {lastName}</h3>
            </div>
        )}
        </>
    );
}