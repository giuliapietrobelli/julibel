import ImageSubpage from '../../image-subpage'
import illo from '../illustration1.png'

export default function SkaterBoy() {
  return (
    <ImageSubpage
      title="Skater Boy"
      image={illo}
      alt="Skater Boy Illustration"
      galleryLink="/illustrations"
      prevLabel="Illustrations"
      prevLink="/illustrations"
      nextLabel="Bloom"
      nextLink="/illustrations/bloom"
    />
  )
}
