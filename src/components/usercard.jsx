import React from 'react';

const Usercard = () => {
  const profilePhoto =
    'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600';
  const name = 'James';
  const email = 'james@gmail.com';
  const phone = '9008007001';
  const address = 'Dubai';

  const card = {
    width: '200px',
    border: '1px solid grey',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    margin: '20px auto',
  };

  const image = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
  };

  return (
    <div style={card}>
      <img src={profilePhoto} alt="photo" style={image} />
      <h2>{name}</h2>
      <p><strong>Email: </strong>{email}</p>
      <p><strong>Phone: </strong>{phone}</p>
      <p><strong>Address: </strong>{address}</p>
    </div>
  );
};

export default Usercard;
