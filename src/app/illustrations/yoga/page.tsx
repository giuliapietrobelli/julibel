import ImageSubpage from '../../image-subpage'
import illo from '../illustration3.png'

export default function Yoga() {
  return (
    <ImageSubpage
      title="Yoga"
      image={illo}
      alt="Yoga Illustration"
      galleryLink="/illustrations"
      prevLabel="Bloom"
      prevLink="/illustrations/bloom"
      nextLabel="Lipari Postcard"
      nextLink="/illustrations/lipari-postcard"
    />
  )
}
