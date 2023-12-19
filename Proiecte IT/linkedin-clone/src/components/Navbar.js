import React from 'react'
import styles from "./Navbar.module.css"
import { Grid } from '@mui/material'
import navlogo from "../images/navlogo.png"
import lens from "../images/lens.png"
import home from "../images/home.png"
import message from "../images/message.png"
import network from "../images/network.png"
import profile from "../images/profile.png"

function Navbar({userData}) {
  return (
    <div className={styles.navbarContainer}>
        <Grid container>
            <Grid item xs={6}>
                <img className={styles.navLogo} src={navlogo} alt='Logo'/>
                <img className={styles.lens} src={lens} alt='lens' />
            </Grid>
            <Grid className={styles.rightSideNavbar} item xs={6}>
                <img src={home}/>
                <img src={network}/>
                <img src={message}/>
                <img className={styles.profileImgNavbar} src={userData._document?.data?.value.mapValue.fields.profile_image.stringValue ?? profile}/>
            </Grid>
        </Grid>
    </div>
  )
}

export default Navbar