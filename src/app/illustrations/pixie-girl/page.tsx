import ImageSubpage from '../../image-subpage'
import illo from '../illustration7.png'

export default function PixieGirl() {
  return (
    <ImageSubpage
      title="Pixie Girl"
      image={illo}
      alt="Pixie Girl Illustration"
      galleryLink="/illustrations"
      prevLabel="Lotus Bowl"
      prevLink="/illustrations/lotus-bowl"
      nextLabel="Buttercup Floral Pattern"
      nextLink="/illustrations/buttercup-floral-pattern"
    />
  )
}
