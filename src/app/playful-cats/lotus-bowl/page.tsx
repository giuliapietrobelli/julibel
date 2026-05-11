import ImageSubpage from '../../image-subpage'
import illo from '../illustration6.png'

export default function LotusBowl() {
  return (
    <ImageSubpage
      title="Lotus Bowl"
      image={illo}
      alt="Lotus Bowl Illustration"
      galleryLink="/playful-cats"
      prevLabel="Preraphaelites"
      prevLink="/playful-cats/preraphaelites"
      nextLabel="Pixie Girl"
      nextLink="/playful-cats/pixie-girl"
    />
  )
}
