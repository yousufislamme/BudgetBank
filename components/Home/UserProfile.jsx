'use client'
const UserProfile = ({ userData }) => {
  return (
    <div>
      <h2>User Profile in another component...</h2>
      {userData && (
        <div>
          <h2>Profile Name: {userData.displayName}</h2>
          <p>Email: {userData.email}</p>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
