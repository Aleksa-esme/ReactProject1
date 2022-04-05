import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { ProfileForm } from "../../components";

export function Profile() {
    //const dispatch = useDispatch();
    const { firstName, lastName, isVisibleProfile, phone, image} = useSelector(state => state.profile);
    return (
        <>
        {/* <button onClick={() => dispatch(toggleVisibleProfile())}>toggle profile visible</button>
        {isVisibleProfile && (
            <div>
                <Avatar src={image} />
                <h3>{firstName} {lastName}</h3>
                <h3>phone: {phone}</h3>
            </div>
        )}
        <hr /> */}
        <ProfileForm firstName={firstName} lastName={lastName} phone={phone} image={image} />
        </>
    );
}