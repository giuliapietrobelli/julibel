import ImageSubpage from '../../image-subpage'
import illo from '../../illustrations/illustration9.png'

export default function FashionIllustration() {
  return (
    <ImageSubpage
      title="Fashion Illustration"
      image={illo}
      alt="Fashion Illustration"
      galleryLink="/collection-1"
      prevLabel="Buttercup Floral Pattern"
      prevLink="/collection-1/buttercup-floral-pattern"
      nextLabel="Deer"
      nextLink="/collection-1/deer"
    />
  )
}
