import ImageSubpage from '../../image-subpage'
import illo from '../../illustrations/illustration11.png'

export default function Nymph() {
  return (
    <ImageSubpage
      title="Nymph"
      image={illo}
      alt="Nymph Illustration"
      galleryLink="/collection-1"
      prevLabel="Deer"
      prevLink="/collection-1/deer"
      nextLabel="Bubblegum Girl"
      nextLink="/collection-1/bubblegum-girl"
    />
  )
}
