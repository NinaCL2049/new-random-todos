import React, { useState, useEffect } from "react";

const minLiStyle = {
  marginBottom: "25px"

}


const maxLiStyle = {
  marginBottom: "30px"


}

const buttonStyle = {
  marginBottom: "30px"

}





function UserCard({ aUser }) {

  const userName = `${aUser.name.title} ${aUser.name.first} ${aUser.name.last}`;
  const userAddress = `${aUser.location.street.number} ${aUser.location.street.name}`;
  const userLocation = `${aUser.location.city}, ${aUser.location.country} ${aUser.location.postcode}`;

  const minData = ( 
    <li>
    
    <img src={aUser.picture.thumbnail} /> <p> {userName} </p> 
    <button onClick={displayMax}>show info</button>
  </li> 
);

  const maxData = (
    <li>
    <img src={aUser.picture.large} />
    <p> {userName} {userAddress} {userLocation} Email: {aUser.email} Phone: {aUser.cell}
      </p> <button style={buttonStyle} onClick={displayMin}>show less</button>
  </li>
  );


  const [userData, dataUpdate] = useState(minData);
  
  function displayMin() {
    dataUpdate(minData)
  };
  function displayMax() {
    dataUpdate(maxData)
  }
  return userData;
}

export default UserCard;













// function UserCard(props) {
//   const [minimalInfo, setMinimalInfo] = useState(true)
//   function handleClick(){setMinimalInfo(!minimalInfo)}
//   return (
//     <li style={pageStyle}>
//       <div style={layOut}>
//         <iframe style={frameStyle} src={props.website_url}></iframe>
//         <div style={textStyle}>
//           <h3 style={nameStyle}>
//             {props.name}: <span style={typeStyle}>{props.brewery_type}</span>
//           </h3>{" "}
//           <h4 style={addressStyle}>
//             {props.address_1} <br></br> {props.city}, {props.state}{" "}
//             {props.postal_code}{" "}
//           </h4>
//           <div style={lineStyle}>
//             <p style={phoneStyle}>
//               phone: <span style={numberStyle}>{props.phone}</span>
//             </p>{" "}
//           </div>
//         </div>
//         <button onClick={handleClick}>show info</button> 
// {minimalInfo ?
// <here is the minimal info div, button> : <the div plus extra info & other button></the>}
//       </div>
//     </li>
//   );
// }


