import Image from 'next/image'
import PaginationLinks from '../pagination-links'
import ProjectIntro from '../project-intro'

export default function MintelAdv() {
  return (
  <>
    <div className="container flex flex-col gap-10 md:gap-20 py-14 px-10">

      <ProjectIntro title="Mintel digital advertising">
      One of my daily responsibilities at Mintel was to design captivating digital banners for paid advertising. Collaborating closely with the team, we focused on creating compelling visuals and copy to generate leads and drive sales.
      </ProjectIntro>

      <div className="self-center">
        <Image id="preview-pic" className="self-center" src="/mintel_banners_tumb.png" alt="Mintel banners" width={1250} height={799} priority/>
      </div>

      <div className="self-center">
        <Image className="self-center" src="/mintel-banners-linkedin-carousel.png" alt="Mintel banners linkedin carousel" width={1021} height={799} priority/>
      </div>

    </div>
      <PaginationLinks
        prev="Comperemedia Website"
        prevLink="./comperemedia-website"
        next="Illustrations"
        nextLink="./illustrations"
      />
    </>
  )
}