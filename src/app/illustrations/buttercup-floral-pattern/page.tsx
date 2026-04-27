import ImageSubpage from '../../image-subpage'
import illo from '../illustration8.png'

export default function ButtercupFloralPattern() {
  return (
    <ImageSubpage
      title="Buttercup Floral Pattern"
      image={illo}
      alt="Buttercup Floral Pattern Illustration"
      galleryLink="/illustrations"
      prevLabel="Pixie Girl"
      prevLink="/illustrations/pixie-girl"
      nextLabel="Fashion Illustration"
      nextLink="/illustrations/fashion-illustration"
    />
  )
}
