const photoFields = `
  _id,
  name,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`

export const indexQuery = `
*[_type == "photo"] | order(date desc, _updatedAt desc) {
  ${photoFields}
}`

export const photoQuery = `
{
  "photo": *[_type == "photo" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${photoFields}
  },
  "morephotos": *[_type == "photo" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${photoFields}
  }
}`

export const photoSlugsQuery = `
*[_type == "photo" && defined(slug.current)][].slug.current
`

export const photoBySlugQuery = `
*[_type == "photo" && slug.current == $slug][0] {
  ${photoFields}
}
`
