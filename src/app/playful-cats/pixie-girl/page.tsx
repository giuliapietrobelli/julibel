import ImageSubpage from '../../image-subpage'
import illo from '../illustration7.png'

export default function PixieGirl() {
  return (
    <ImageSubpage
      title="Pixie Girl"
      image={illo}
      alt="Pixie Girl Illustration"
      galleryLink="/playful-cats"
      prevLabel="Lotus Bowl"
      prevLink="/playful-cats/lotus-bowl"
      nextLabel="Buttercup Floral Pattern"
      nextLink="/playful-cats/buttercup-floral-pattern"
    />
  )
}
