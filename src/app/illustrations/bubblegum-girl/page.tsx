import ImageSubpage from '../../image-subpage'
import illo from '../illustration12.png'

export default function BubblegumGirl() {
  return (
    <ImageSubpage
      title="Bubblegum Girl"
      image={illo}
      alt="Bubblegum Girl Illustration"
      galleryLink="/illustrations"
      prevLabel="Nymph"
      prevLink="/illustrations/nymph"
      nextLabel="Illustrations"
      nextLink="/illustrations"
    />
  )
}
