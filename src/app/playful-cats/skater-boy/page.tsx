import ImageSubpage from '../../image-subpage'
import illo from '../illustration1.png'

export default function SkaterBoy() {
  return (
    <ImageSubpage
      title="Skater Boy"
      image={illo}
      alt="Skater Boy Illustration"
      galleryLink="/playful-cats"
      prevLabel="Illustrations"
      prevLink="/playful-cats"
      nextLabel="Bloom"
      nextLink="/playful-cats/bloom"
    />
  )
}
