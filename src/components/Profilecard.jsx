import React from "react";

function Profilecard({ name, email, password, purchasedProductIds, image }) {
  return (
    <div className="user-information-container">
      <h1 className="heading-profile-card">Profile- of membership</h1>
      <img src={image} alt={`${name}'s profile`} className="image-profile" />

      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Phone: </strong>
        {email}
      </p>

      <p>
        <strong>Password:</strong> {password}
      </p>
      <p>
        <strong>Purchase-Product:</strong>{" "}
        {purchasedProductIds.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </p>
    </div>
  );
}
export default Profilecard;
