import ImageSubpage from '../../image-subpage'
import illo from '../illustration3.png'

export default function Yoga() {
  return (
    <ImageSubpage
      title="Yoga"
      image={illo}
      alt="Yoga Illustration"
      galleryLink="/playful-cats"
      prevLabel="Bloom"
      prevLink="/playful-cats/bloom"
      nextLabel="Lipari Postcard"
      nextLink="/playful-cats/lipari-postcard"
    />
  )
}
