import ImageSubpage from '../../image-subpage'
import illo from '../../illustrations/illustration12.png'

export default function BubblegumGirl() {
  return (
    <ImageSubpage
      title="Bubblegum Girl"
      image={illo}
      alt="Bubblegum Girl Illustration"
      galleryLink="/collection-1"
      prevLabel="Nymph"
      prevLink="/collection-1/nymph"
      nextLabel="Pattern Collection"
      nextLink="/collection-1"
    />
  )
}
