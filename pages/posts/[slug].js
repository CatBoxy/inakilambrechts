import Head from 'next/head'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import MoreStories from '../../components/more-stories'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import PostTitle from '../../components/post-title'
import { CMS_NAME } from '../../lib/constants'
import { photoQuery, photoSlugsQuery } from '../../lib/queries'
import { urlForImage, usePreviewSubscription } from '../../lib/sanity'
import { sanityClient, getClient, overlayDrafts } from '../../lib/sanity.server'

export default function Post({ data = {}, preview }) {
  const router = useRouter()

  const slug = data?.photo?.slug
  const {
    data: { photo, morePhotos },
  } = usePreviewSubscription(photoQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug,
  })

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {photo.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                {photo.coverImage?.asset?._ref && (
                  <meta
                    key="ogImage"
                    property="og:image"
                    content={urlForImage(photo.coverImage)
                      .width(1200)
                      .height(627)
                      .fit('crop')
                      .url()}
                  />
                )}
              </Head>
              <PostHeader
                title={photo.title}
                coverImage={photo.coverImage}
                date={photo.date}
                author={photo.author}
              />
              <PostBody content={photo.content} />
            </article>
            <SectionSeparator />
            {morePhotos.length > 0 && <MoreStories photos={morePhotos} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const { photo, morePhotos } = await getClient(preview).fetch(photoQuery, {
    slug: params.slug,
  })

  return {
    props: {
      preview,
      data: {
        photo,
        morePhotos: overlayDrafts(morePhotos),
      },
    },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  }
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(photoSlugsQuery)
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}
