import ImageSubpage from '../../image-subpage'
import illo from '../../illustrations/illustration7.png'

export default function PixieGirl() {
  return (
    <ImageSubpage
      title="Pixie Girl"
      image={illo}
      alt="Pixie Girl Illustration"
      galleryLink="/collection-1"
      prevLabel="Lotus Bowl"
      prevLink="/collection-1/lotus-bowl"
      nextLabel="Buttercup Floral Pattern"
      nextLink="/collection-1/buttercup-floral-pattern"
    />
  )
}
