import React from 'react'
import './css/OurStory.css'

const OurStory = () => {
  return (
    <>
      <div className="top-divider container" style={{ marginTop: "17px" }}></div>
      <h1 className='story-title'>About</h1>
      <h3 className="story-subtitle">Who we are and why we do what we do!</h3>
      <div className="story-wr">
        <p className="story-desc">
          Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a,
          gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a.
          Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim.
          Proin placerat tortor lacus, ac sodales lectus placerat quis.
        </p>
        <div className="story-bl">
          <h2 className="story-bl-title">Top trends</h2>
          <div className="story-bl-img"><img src="/images/story/1.png" alt="story1" /></div>
          <p className="story-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat,
            augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit
            ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.
          </p>
          <ul className="story-bl-list">
            <li>consectetur adipiscing elit. Aliquam placerat</li>
            <li>Lorem ipsum dolor sit amet consectetur </li>
          </ul>
        </div>
        <div className="story-bl">
          <h2 className="story-bl-title">Produced with care</h2>
          <div className="story-bl-img"><img src="/images/story/2.png" alt="story2" /></div>
          <p className="story-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat,
            augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero.
            Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue.
            Morbi porta tempor odio, in molestie diam bibendu.
          </p>
        </div>
      </div>
    </>
  )
}

export default OurStory