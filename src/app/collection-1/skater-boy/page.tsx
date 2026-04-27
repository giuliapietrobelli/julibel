import ImageSubpage from '../../image-subpage'
import illo from '../../illustrations/illustration1.png'

export default function SkaterBoy() {
  return (
    <ImageSubpage
      title="Skater Boy"
      image={illo}
      alt="Skater Boy Illustration"
      galleryLink="/collection-1"
      prevLabel="Pattern Collection"
      prevLink="/collection-1"
      nextLabel="Bloom"
      nextLink="/collection-1/bloom"
    />
  )
}
