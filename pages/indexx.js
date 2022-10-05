import Head from 'next/head'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { CMS_NAME } from '../lib/constants'
import { indexQuery } from '../lib/queries'
import { usePreviewSubscription } from '../lib/sanity'
import { getClient, overlayDrafts } from '../lib/sanity.server'

export default function Index({ allPhotos: initialAllPhotos, preview }) {
  const { data: allPhotos } = usePreviewSubscription(indexQuery, {
    initialData: initialAllPhotos,
    enabled: preview,
  })
  const [heroPhoto, ...morePhotos] = allPhotos || []
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroPhoto && (
            <HeroPost
              title={heroPhoto.title}
              coverImage={heroPhoto.coverImage}
              date={heroPhoto.date}
              author={heroPhoto.author}
              slug={heroPhoto.slug}
              excerpt={heroPhoto.excerpt}
            />
          )}
          {morePhotos.length > 0 && <MoreStories photos={morePhotos} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPhotos = overlayDrafts(await getClient(preview).fetch(indexQuery))
  return {
    props: { allPhotos, preview },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  }
}
