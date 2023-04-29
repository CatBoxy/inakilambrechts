import React from 'react';
import { useRef } from 'react';
import Header from '../components/header';
import Layout from '../components/layout';
import { Grid, GridChild } from '../styles/GridStyles';
// import { IFrameRenderer } from '../components/iframeRenderer';
// import { useIsIFrameLoaded } from '../hooks/useIsFrameLoadedHook';



const Film = () => {
  const iframeRef = useRef(null);
  // const isIFrameLoaded = useIsIFrameLoaded(iframeRef);

  return (
    <div style={{ backgroundColor: 'black' }}>
      <Layout height='88px' sticky={true}>
        <Header />
      </Layout>
      <Layout padding='0' height={'calc(100vh - 88px)'}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/LzvU1oOrXUg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}>
        </iframe>
        {/* <Grid>
          <GridChild style={{ color: "white" }}> */}
        {/* <iframe
              width="100%"
              height="100%" 
              src="https://www.youtube-nocookie.com/embed/X5zRsAaI5ck?" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen={true}>
            </iframe> */}
        {/* <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/LzvU1oOrXUg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}>
            </iframe>
          </GridChild> */}
        {/* <GridChild style={{ color: "white" }}>
            <iframe
              width="100%"
              height="100%" 
              src="https://www.youtube-nocookie.com/embed/X5zRsAaI5ck?" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen={true}>
            </iframe>
          </GridChild> */}
        {/* <GridChild>
            <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/KPZISGciOG4?" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
          </GridChild> */}
        {/* </Grid> */}
      </Layout>
    </div>
  );
};

export default Film;