import ImageSubpage from '../../image-subpage'
import illo from '../../illustrations/illustration2.png'

export default function Bloom() {
  return (
    <ImageSubpage
      title="Bloom"
      image={illo}
      alt="Bloom Illustration"
      galleryLink="/collection-1"
      prevLabel="Skater Boy"
      prevLink="/collection-1/skater-boy"
      nextLabel="Yoga"
      nextLink="/collection-1/yoga"
    />
  )
}
