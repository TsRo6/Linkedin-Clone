import React, { useState } from 'react';
import styles from "./Signin.module.css"
import { Button, Grid, TextField } from '@mui/material';
import linkedin from "../images/linkedin.jpeg"
import developer from "../images/developer.jpg"
import { signInWithPopup } from 'firebase/auth';
import { auth, database, googleProvider } from '../firebase/setup';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Signin() {

    const navigate = useNavigate()

    const[username,setUserame] = useState("")
    const[designation,setDesignation] = useState("")

    const addUser = async() => {
        const userRef = doc(database,`User-${auth.currentUser?.uid}`,auth.currentUser?.uid)
        try{
            await setDoc(userRef,{
                username:username,
                email:auth.currentUser?.email,
                designation:designation,
                profile_image:auth.currentUser?.photoURL
            })
        }catch(err){
            console.error(err)
        }
    }

    const signInWithGoogle = async() => {
        !username && toast.warning("Please enter username")
        try{
            username && await signInWithPopup(auth,googleProvider)
            username && addUser()
            navigate("/main")
        }catch(err){
            console.error(err)
        }
    }

  return (
    <div>
        <Grid container>
            <Grid className={styles.leftSigninContainer} item xs={6}>
                <ToastContainer autoClose={2000} position='top-right' />
                <img className={styles.logo} src={linkedin} alt="Logo" />
                <h2 className={styles.signinH2}>Find jobs through this in c clone</h2>
                <label className={styles.usernameLabel}>Enter username</label>
                <br/>
                <TextField onChange={(e)=> setUserame(e.target.value)} className={styles.usernameText} variant='outlined' label='Username' />
                <br/>
                <label className={styles.designationLabel}>Enter Designation</label>
                <br/>
                <TextField onChange={(e)=> setDesignation(e.target.value)} className={styles.usernameText} variant='outlined' label='Designation' />
                <Button onClick={signInWithGoogle} id={styles.signinBtn} variant='contained'>Signin</Button>
            </Grid>
            <Grid item xs={6}>
                <img className={styles.developerImg} src={developer} alt='Developer'/>
            </Grid>
        </Grid>
    </div>
  )
}

export default Signin;
