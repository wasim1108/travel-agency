import React from 'react'
import { useNavigate } from 'react-router'
import { logoutUser } from '~/appwrite/auth'

const TravelPage = () => {

  const navigate = useNavigate();

  const handleLogout = async () => {
    // Perform logout logic here, e.g., clear user session, redirect to login page
    console.log('User logged out');
    await logoutUser(); // Call the logout function
    navigate('/sign-in'); // Redirect to sign-in page after logout
  }

  return (
    <div>
      <button
        onClick={handleLogout}
        className="cursor-pointer"
      >
        <img src="/assets/icons/logout.svg" alt="Logout" className="size-6" />
      </button>

      <button
        onClick={() => navigate('/dashboard')}
        >
        Dashboard
      </button>
    </div>
  )
}

export default TravelPage