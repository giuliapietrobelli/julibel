import ImageSubpage from '../../image-subpage'
import illo from '../illustration10.png'

export default function Deer() {
  return (
    <ImageSubpage
      title="Deer"
      image={illo}
      alt="Deer Illustration"
      galleryLink="/illustrations"
      prevLabel="Fashion Illustration"
      prevLink="/illustrations/fashion-illustration"
      nextLabel="Nymph"
      nextLink="/illustrations/nymph"
    />
  )
}
