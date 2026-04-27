import ImageSubpage from '../../image-subpage'
import illo from '../illustration4.png'

export default function LipariPostcard() {
  return (
    <ImageSubpage
      title="Lipari Postcard"
      image={illo}
      alt="Lipari Postcard Illustration"
      galleryLink="/illustrations"
      prevLabel="Yoga"
      prevLink="/illustrations/yoga"
      nextLabel="Preraphaelites"
      nextLink="/illustrations/preraphaelites"
    />
  )
}
