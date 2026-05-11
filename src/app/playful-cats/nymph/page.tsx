import ImageSubpage from '../../image-subpage'
import illo from '../illustration11.png'

export default function Nymph() {
  return (
    <ImageSubpage
      title="Nymph"
      image={illo}
      alt="Nymph Illustration"
      galleryLink="/playful-cats"
      prevLabel="Deer"
      prevLink="/playful-cats/deer"
      nextLabel="Bubblegum Girl"
      nextLink="/playful-cats/bubblegum-girl"
    />
  )
}
