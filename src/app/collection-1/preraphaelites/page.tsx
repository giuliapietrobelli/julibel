import ImageSubpage from '../../image-subpage'
import illo from '../../illustrations/illustration5.png'

export default function Preraphaelites() {
  return (
    <ImageSubpage
      title="Preraphaelites"
      image={illo}
      alt="Preraphaelites Illustration"
      galleryLink="/collection-1"
      prevLabel="Lipari Postcard"
      prevLink="/collection-1/lipari-postcard"
      nextLabel="Lotus Bowl"
      nextLink="/collection-1/lotus-bowl"
    />
  )
}
