import ImageSubpage from '../../image-subpage'
import illo from '../illustration9.png'

export default function FashionIllustration() {
  return (
    <ImageSubpage
      title="Fashion Illustration"
      image={illo}
      alt="Fashion Illustration"
      galleryLink="/illustrations"
      prevLabel="Buttercup Floral Pattern"
      prevLink="/illustrations/buttercup-floral-pattern"
      nextLabel="Deer"
      nextLink="/illustrations/deer"
    />
  )
}
