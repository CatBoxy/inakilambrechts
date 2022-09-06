import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';
import { Grid, ImgWrapperModal } from '../styles/GridStyles';
import Image from 'next/image';
import ImgSrc from '../public/filmic-shot2.jpg';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react';

// import { CMS_NAME } from '../lib/constants'
import { indexQuery } from '../lib/queries'
import { usePreviewSubscription } from '../lib/sanity'
import { getClient, overlayDrafts } from '../lib/sanity.server'
import { urlForImage } from '../lib/sanity'


const Photo = ({ allPhotos: initialAllPhotos, preview }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data: allPhotos } = usePreviewSubscription(indexQuery, {
    initialData: initialAllPhotos,
    enabled: preview,
  })

  const [...morePhotos] = allPhotos || []

  return (
    <div style={{ backgroundColor: 'black', height: '100vh' }}>
      <Layout height='88px' sticky={true}>
        <Header />
      </Layout>
      <Layout padding='0'>
        <Grid>
          {morePhotos.length > 0 &&
            morePhotos.map((photo) => (
              <div key={photo.slug} onClick={onOpen}>
                <Image
                  src={urlForImage(photo.coverImage).url()}
                  layout='fill'
                  objectFit='cover'
                  quality='100'
                  sizes="(min-width: 768px) 50vw, 100vw"
                  alt={photo.title} />
              </div>
            ))}
        </Grid>
      </Layout>
      <Modal onClose={onClose} size={'full'} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent style={{ color: 'white', height: '100%', width: '100%', backgroundColor: 'black' }}>
          <ModalCloseButton
            style={{
              color: 'white',
              border: 'none',
              backgroundColor: 'transparent',
              position: 'absolute',
              top: '33px',
              right: '33px',
              zIndex: '2',
              cursor: 'pointer',
              top: '38px',
              right: '46px',
              width: '28px'
            }} />
          <ModalBody>
            <ImgWrapperModal >

              <div>
                <Image src={ImgSrc} layout='responsive' placeholder='blur' quality='100' alt='' />
              </div>

            </ImgWrapperModal>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div >
  );
};

export default Photo;

export async function getStaticProps({ preview = false }) {
  const allPhotos = overlayDrafts(await getClient(preview).fetch(indexQuery))
  return {
    props: { allPhotos, preview },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  }
}