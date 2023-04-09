import React from "react"

const CardForm = ({userName,userLastName,userMail}) => {
    return (
    <div className="formCard">
        <h4>Successful registration:</h4>
        <h5>We will contact you  {userName} {userLastName},</h5>
        <h5>through your email address {userMail}</h5>
    </div>
    )
}

export default CardForm