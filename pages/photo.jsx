import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Layout from '../components/layout';
import { Grid, ImgWrapperModal } from '../styles/GridStyles';
import Image from 'next/image';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons';
// import { CMS_NAME } from '../lib/constants'
import { indexQuery } from '../lib/queries'
import { usePreviewSubscription } from '../lib/sanity'
import { getClient, overlayDrafts } from '../lib/sanity.server'
import { urlForImage } from '../lib/sanity'


const Photo = ({ allPhotos: initialAllPhotos, preview }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentImgUrl, setCurrentImgUrl] = useState();
  const [currentPhoto, setCurrentPhoto] = useState();

  function onClickHandler(photo) {
    onOpen();
    setCurrentImgUrl(urlForImage(photo.coverImage).url());
    setCurrentPhoto(photo);
  }

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
              <div key={photo.slug} onClick={() => onClickHandler(photo)}>
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
      <Modal onClose={onClose} size={'full'} isOpen={isOpen} >
        <ModalOverlay />
        <ModalContent style={{ color: 'white', backgroundColor: 'black', height: '100vh', display: 'flex', alignItems: 'center' }}>
          <ModalCloseButton
            style={{
              color: 'white',
              border: 'none',
              backgroundColor: 'transparent',
              position: 'absolute',
              zIndex: '2',
              cursor: 'pointer',
              width: '28px',
              height: '28px',
              top: '38px',
              right: '46px',
              mixBlendMode: 'difference'
            }} />
          <ModalBody style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
            <ImgWrapperModal >

              <div>
                <Image src={currentImgUrl} layout='responsive' width='100%' height='51%' quality='100' alt='' />
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