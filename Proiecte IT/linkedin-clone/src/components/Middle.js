import React, { useEffect, useRef, useState } from 'react'
import styles from "./Middle.module.css"
import profile from "../images/profile.png"
import { Card, CardContent, CardMedia, TextField, Typography } from '@mui/material'
import galery from "../images/galery.png"
import video from "../images/video.png"
import event from "../images/event.png"
import article from "../images/article.png"
import family from "../images/family.jpg"
import Post from './Post'
import { collection, doc, getDocs } from 'firebase/firestore'
import { auth, database } from '../firebase/setup'


function Middle({userData}) {

  const postRef = useRef(null)

  const [posts,setPost] = useState([])

  const getPost = () => {
    setTimeout(async() => {
      const postDocument = doc(database,`User-${auth.currentUser?.uid}`, `${auth.currentUser?.uid}`)
      const postRef = collection(postDocument,"Posts")
      try{
        const data = await getDocs(postRef)
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id:doc.id
        }))
        setPost(filteredData)
      }catch(err){
        console.log(err)
      }
    },1000)
  }

  useEffect(() => {
    getPost()
  },[])

  return (
    <div>
        <div className={styles.middleProfileTopSection}>
          <img className={styles.profileImageMiddle} src={userData._document?.data?.value.mapValue.fields.profile_image.stringValue ?? profile} />
          <TextField onClick={() => postRef.current?.click()} className={styles.textPostField} variant='outlined' label="Start a post" InputProps={{sx:{borderRadius:150}}}/>
          <Post ref={postRef}/>
          <img className={styles.middleIconsSection} src={galery} alt='galery'/>
          <img className={styles.middleIconsSection} src={video} alt='video'/>
          <img className={styles.middleIconsSection} src={event} alt='event'/>
          <img className={styles.middleIconsSection} src={article} alt='article'/>
        </div>
        <div className={styles.cardContainer}>
          {posts.map((post) => {
              return <Card sx={{mt:"10px"}}>
                <CardContent>
                  <div className={styles.middleMiddleSection}>
                    <img src={post.profile_image ?? profile} style={{width:"50px",borderRadius:"40px"}} alt='profile img'/>
                    <div style={{marginLeft:"10px"}}>
                      <Typography>{post.username}</Typography>
                      <Typography sx={{color:"#BFBFBF"}}>{post.designation}</Typography>
                    </div>
                  </div>
                  <h5>{post.textPost}</h5>
                </CardContent>
                {post.photo && <CardMedia 
                  className={styles.cardMediaMS} 
                  component="img" 
                  image={family}>
                </CardMedia>}
              </Card>
          })}
        </div>
    </div>
  )
}

export default Middle