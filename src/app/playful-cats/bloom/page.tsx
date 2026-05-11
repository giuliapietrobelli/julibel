import ImageSubpage from '../../image-subpage'
import illo from '../illustration2.png'

export default function Bloom() {
  return (
    <ImageSubpage
      title="Bloom"
      image={illo}
      alt="Bloom Illustration"
      galleryLink="/playful-cats"
      prevLabel="Skater Boy"
      prevLink="/playful-cats/skater-boy"
      nextLabel="Yoga"
      nextLink="/playful-cats/yoga"
    />
  )
}
