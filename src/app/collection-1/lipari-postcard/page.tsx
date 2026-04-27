import ImageSubpage from '../../image-subpage'
import illo from '../../illustrations/illustration4.png'

export default function LipariPostcard() {
  return (
    <ImageSubpage
      title="Lipari Postcard"
      image={illo}
      alt="Lipari Postcard Illustration"
      galleryLink="/collection-1"
      prevLabel="Yoga"
      prevLink="/collection-1/yoga"
      nextLabel="Preraphaelites"
      nextLink="/collection-1/preraphaelites"
    />
  )
}
