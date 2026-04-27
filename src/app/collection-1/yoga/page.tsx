import ImageSubpage from '../../image-subpage'
import illo from '../../illustrations/illustration3.png'

export default function Yoga() {
  return (
    <ImageSubpage
      title="Yoga"
      image={illo}
      alt="Yoga Illustration"
      galleryLink="/collection-1"
      prevLabel="Bloom"
      prevLink="/collection-1/bloom"
      nextLabel="Lipari Postcard"
      nextLink="/collection-1/lipari-postcard"
    />
  )
}
