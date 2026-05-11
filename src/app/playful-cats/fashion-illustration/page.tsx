import ImageSubpage from '../../image-subpage'
import illo from '../illustration9.png'

export default function FashionIllustration() {
  return (
    <ImageSubpage
      title="Fashion Illustration"
      image={illo}
      alt="Fashion Illustration"
      galleryLink="/playful-cats"
      prevLabel="Buttercup Floral Pattern"
      prevLink="/playful-cats/buttercup-floral-pattern"
      nextLabel="Deer"
      nextLink="/playful-cats/deer"
    />
  )
}
