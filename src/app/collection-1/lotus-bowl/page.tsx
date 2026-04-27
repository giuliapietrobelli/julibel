import ImageSubpage from '../../image-subpage'
import illo from '../../illustrations/illustration6.png'

export default function LotusBowl() {
  return (
    <ImageSubpage
      title="Lotus Bowl"
      image={illo}
      alt="Lotus Bowl Illustration"
      galleryLink="/collection-1"
      prevLabel="Preraphaelites"
      prevLink="/collection-1/preraphaelites"
      nextLabel="Pixie Girl"
      nextLink="/collection-1/pixie-girl"
    />
  )
}
