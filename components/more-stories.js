import PostPreview from '../components/post-preview'

export default function MoreStories({ photos }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {photos.map((photo) => (
          <PostPreview
            key={photo.slug}
            title={photo.title}
            coverImage={photo.coverImage}
            date={photo.date}
            author={photo.author}
            slug={photo.slug}
            excerpt={photo.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
