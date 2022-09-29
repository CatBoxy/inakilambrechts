export const IFrameRenderer = ({ landingPageHtml, iframeRef }) => {
  return (
    <>
      <Container>
      <iframe
        ref={iframeRef}
        src={landingPageHtml}
        title="iframe-preview"
        width="100%"
        height="100%"
        sandbox
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen="true"
      >
      </iframe>
      <Container/>
    </>
  );
};