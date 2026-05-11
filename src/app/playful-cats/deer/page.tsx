import ImageSubpage from '../../image-subpage'
import illo from '../illustration10.png'

export default function Deer() {
  return (
    <ImageSubpage
      title="Deer"
      image={illo}
      alt="Deer Illustration"
      galleryLink="/playful-cats"
      prevLabel="Fashion Illustration"
      prevLink="/playful-cats/fashion-illustration"
      nextLabel="Nymph"
      nextLink="/playful-cats/nymph"
    />
  )
}
