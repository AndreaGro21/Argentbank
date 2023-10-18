import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEditProfile } from "../redux/profileInfoSlice";

export default function RenameBtn({ showForm, setShowForm }) {

    const token = useSelector(state => state.userToken.token);
    const profile = useSelector(state => state.profile);
    const [newUserName, setNewUserName] = useState((profile.userName || ""));
    const [error, setError] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        setNewUserName(profile.userName);
    }, [profile.userName]);

    const editUserName = async (e) => {
        e.preventDefault();
        if (!newUserName) {
            setError("This field cannot be empty.");
            return error;
        }
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ userName: newUserName })
            });
            if (response) {

                dispatch(setEditProfile(newUserName));
            }
            if (!response) {
                throw new Error("Something went wrong.");
            }
            dispatch(setEditProfile(newUserName));
            /* setIsLoading(false);  */
            setShowForm(false);
        } catch (err) {
            console.log(err);
        }

    };

    return (
        <div className="edit-content">
            <button
                className="sign-in-button"
                onClick={() => setShowForm(!showForm)}
            >
                {showForm ? "Cancel" : "Edit"}
            </button>
            {showForm && (
                <form onSubmit={editUserName}>
                    <div className="input-wrapper">
                        <div className="input-wrapper">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                autoComplete="given-name"
                                value={profile.firstName}
                                readOnly
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                autoComplete="family-name"
                                value={profile.lastName}
                                readOnly
                            />
                        </div>
                        <label htmlFor="userName">Username</label>
                        <input
                            type="text"
                            id="userName"
                            autoComplete="userName"
                            value={newUserName}
                            onChange={(e) => setNewUserName(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="sign-in-button"
                        >
                            Save
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}
