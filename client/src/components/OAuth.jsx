import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { signInSuccess, signInFailure } from '../redux/user/userSlice';

function OAuth() {
    const dispatch = useDispatch();

    const handleGoogleClick = async () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();

        try {
            // Open Google Sign-In popup
            const result = await signInWithPopup(auth, provider);

            // Send user data to your backend
            const res = await fetch('http://localhost:3000/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL,
                }),
            });

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await res.json();

            // Handle successful sign-in
            dispatch(signInSuccess(data));
        } catch (err) {
            console.error('Could not sign in with Google:', err);
            dispatch(signInFailure(err.message));
        }
    };

    return (
        <button
            type="button"
            className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
            onClick={handleGoogleClick}
        >
            Continue with Google
        </button>
    );
}

export default OAuth;
