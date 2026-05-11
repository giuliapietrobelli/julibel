import ImageSubpage from '../../image-subpage'
import illo from '../illustration5.png'

export default function Preraphaelites() {
  return (
    <ImageSubpage
      title="Preraphaelites"
      image={illo}
      alt="Preraphaelites Illustration"
      galleryLink="/playful-cats"
      prevLabel="Lipari Postcard"
      prevLink="/playful-cats/lipari-postcard"
      nextLabel="Lotus Bowl"
      nextLink="/playful-cats/lotus-bowl"
    />
  )
}
