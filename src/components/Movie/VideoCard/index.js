import React from 'react'
import styles from './VideoCard.module.css';
import image from '../../assets/img12.png';
import video from '../../assets/star-war.mp4'
function Card({movie}) {

  const videoCards = [...document.querySelectorAll('.video-card')];

  videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
      let video = item.children[1];
      video.play();
    })
    item.addEventListener('mouseleave', () => {
      let video = item.children[1];
      video.pause();
    })
  })



  return (
    <div className={styles['video-card-container']}>
      <div className={styles['video-card']}>
        <img src={image} className={styles['video-card-image']} alt="" />
        <video src={video} mute loop className={styles['card-video']} ></video>
      </div>
    </div>
  )
}

export default Card
