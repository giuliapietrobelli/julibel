import ImageSubpage from '../../image-subpage'
import illo from '../../illustrations/illustration8.png'

export default function ButtercupFloralPattern() {
  return (
    <ImageSubpage
      title="Buttercup Floral Pattern"
      image={illo}
      alt="Buttercup Floral Pattern Illustration"
      galleryLink="/collection-1"
      prevLabel="Pixie Girl"
      prevLink="/collection-1/pixie-girl"
      nextLabel="Fashion Illustration"
      nextLink="/collection-1/fashion-illustration"
    />
  )
}
