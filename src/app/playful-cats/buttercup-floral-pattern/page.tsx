import ImageSubpage from '../../image-subpage'
import illo from '../illustration8.png'

export default function ButtercupFloralPattern() {
  return (
    <ImageSubpage
      title="Buttercup Floral Pattern"
      image={illo}
      alt="Buttercup Floral Pattern Illustration"
      galleryLink="/playful-cats"
      prevLabel="Pixie Girl"
      prevLink="/playful-cats/pixie-girl"
      nextLabel="Fashion Illustration"
      nextLink="/playful-cats/fashion-illustration"
    />
  )
}
