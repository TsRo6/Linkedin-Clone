import React from 'react'
import styles from "./Sidebar.module.css"
import reactjs from "../images/reactjs.jpg"
import profile from "../images/profile.png"

function Sidebar({userData}) {

  // console.log(userData)

  return (
    <div className={styles.sidebarLeft}>
        <img className={styles.reactImg} src={reactjs} alt='react'/>
        <div className={styles.imageProfileContainer}>
            <img className={styles.profileImg} src={userData._document?.data?.value.mapValue.fields.profile_image.stringValue ?? profile} alt='profile' />
            <h3>{userData._document?.data?.value.mapValue.fields.username.stringValue}</h3>
        </div>
        <h4>{userData._document?.data?.value.mapValue.fields.designation.stringValue}</h4>
        <div className={styles.connectionsContainer}>
            <h5>Connections</h5>
            <h5>Invitations</h5>
        </div>
    </div>
  )
}

export default Sidebar