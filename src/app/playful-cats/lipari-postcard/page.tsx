import ImageSubpage from '../../image-subpage'
import illo from '../illustration4.png'

export default function LipariPostcard() {
  return (
    <ImageSubpage
      title="Lipari Postcard"
      image={illo}
      alt="Lipari Postcard Illustration"
      galleryLink="/playful-cats"
      prevLabel="Yoga"
      prevLink="/playful-cats/yoga"
      nextLabel="Preraphaelites"
      nextLink="/playful-cats/preraphaelites"
    />
  )
}
