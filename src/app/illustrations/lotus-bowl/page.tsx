import ImageSubpage from '../../image-subpage'
import illo from '../illustration6.png'

export default function LotusBowl() {
  return (
    <ImageSubpage
      title="Lotus Bowl"
      image={illo}
      alt="Lotus Bowl Illustration"
      galleryLink="/illustrations"
      prevLabel="Preraphaelites"
      prevLink="/illustrations/preraphaelites"
      nextLabel="Pixie Girl"
      nextLink="/illustrations/pixie-girl"
    />
  )
}
