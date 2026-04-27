import ImageSubpage from '../../image-subpage'
import illo from '../../illustrations/illustration10.png'

export default function Deer() {
  return (
    <ImageSubpage
      title="Deer"
      image={illo}
      alt="Deer Illustration"
      galleryLink="/collection-1"
      prevLabel="Fashion Illustration"
      prevLink="/collection-1/fashion-illustration"
      nextLabel="Nymph"
      nextLink="/collection-1/nymph"
    />
  )
}
