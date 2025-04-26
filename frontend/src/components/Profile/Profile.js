import React from 'react';

const Profile = () => {
  const user = {
    name: "a",
    email: "a@gmail.com",
    bio: "a",
    postsCount: 1,
    followers: 2,
    following: 3
  };

  const styles = {
    page: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #e0f7fa, #fafafa)',
      minHeight: '100vh',
      padding: '40px'
    },
    card: {
      display: 'flex',
      backgroundColor: '#ffffff',
      borderRadius: '15px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
      overflow: 'hidden',
      width: '700px',
      height: '300px'
    },
    left: {
      backgroundColor: '#4caf50',
      width: '40%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      padding: '20px'
    },
    right: {
      width: '60%',
      padding: '30px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    profilePic: {
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      backgroundColor: 'white',
      marginBottom: '20px'
    },
    userName: {
      fontSize: '24px',
      fontWeight: 'bold'
    },
    userInfo: {
      fontSize: '16px',
      color: '#555',
      margin: '8px 0'
    },
    stats: {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '20px'
    },
    statBlock: {
      textAlign: 'center'
    },
    statNumber: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#4caf50'
    },
    statLabel: {
      fontSize: '14px',
      color: '#777'
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* Left Side */}
        <div style={styles.left}>
          <div style={styles.profilePic}>
            {/* You can add an image here later */}
          </div>
          <div style={styles.userName}>{user.name}</div>
        </div>

        {/* Right Side */}
        <div style={styles.right}>
          <p style={styles.userInfo}><strong>Email:</strong> {user.email}</p>
          <p style={styles.userInfo}><strong>Bio:</strong> {user.bio}</p>
          <div style={styles.stats}>
            <div style={styles.statBlock}>
              <div style={styles.statNumber}>{user.postsCount}</div>
              <div style={styles.statLabel}>Posts</div>
            </div>
            <div style={styles.statBlock}>
              <div style={styles.statNumber}>{user.followers}</div>
              <div style={styles.statLabel}>Followers</div>
            </div>
            <div style={styles.statBlock}>
              <div style={styles.statNumber}>{user.following}</div>
              <div style={styles.statLabel}>Following</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
