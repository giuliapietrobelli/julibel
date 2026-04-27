import ImageSubpage from '../../image-subpage'
import illo from '../illustration11.png'

export default function Nymph() {
  return (
    <ImageSubpage
      title="Nymph"
      image={illo}
      alt="Nymph Illustration"
      galleryLink="/illustrations"
      prevLabel="Deer"
      prevLink="/illustrations/deer"
      nextLabel="Bubblegum Girl"
      nextLink="/illustrations/bubblegum-girl"
    />
  )
}
