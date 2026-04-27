import ImageSubpage from '../../image-subpage'
import illo from '../illustration5.png'

export default function Preraphaelites() {
  return (
    <ImageSubpage
      title="Preraphaelites"
      image={illo}
      alt="Preraphaelites Illustration"
      galleryLink="/illustrations"
      prevLabel="Lipari Postcard"
      prevLink="/illustrations/lipari-postcard"
      nextLabel="Lotus Bowl"
      nextLink="/illustrations/lotus-bowl"
    />
  )
}
