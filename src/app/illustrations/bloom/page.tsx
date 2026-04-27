import ImageSubpage from '../../image-subpage'
import illo from '../illustration2.png'

export default function Bloom() {
  return (
    <ImageSubpage
      title="Bloom"
      image={illo}
      alt="Bloom Illustration"
      galleryLink="/illustrations"
      prevLabel="Skater Boy"
      prevLink="/illustrations/skater-boy"
      nextLabel="Yoga"
      nextLink="/illustrations/yoga"
    />
  )
}
