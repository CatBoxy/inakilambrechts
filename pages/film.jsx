import React from 'react';
import { useRef } from 'react';
import Header from '../components/header';
import Layout from '../components/layout';
import { Grid, GridChild } from '../styles/GridStyles';
import { IFrameRenderer } from '../components/iframeRenderer';
import { useIsIFrameLoaded } from '../hooks/useIsFrameLoadedHook';



const Film = () => {
  const iframeRef = useRef(null);
  const isIFrameLoaded = useIsIFrameLoaded(iframeRef);

  return (
    <div style={{ backgroundColor: 'black' }}>
    <Layout height='88px' sticky={true}>
      <Header />
    </Layout>
    <Layout padding='0'>
      <Grid>
        <GridChild style={{color: "white"}}>
          {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/M_IZM4Q17TI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe> */}
          <IFrameRenderer landingPageHtml="https://www.youtube.com/embed/M_IZM4Q17TI" iframeRef={iframeRef} isIFrameLoaded={isIFrameLoaded}/>
        </GridChild>
        <GridChild>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/CAZpECdjWDs" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
        </GridChild>
        <GridChild>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/7AQaWgdSIzs" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
        </GridChild>
        <GridChild>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/BRc_fDk92qQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
        </GridChild>
        <GridChild>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5KykxzewwFI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
        </GridChild>
      </Grid>
    </Layout>
  </div>
  );
};

export default Film;