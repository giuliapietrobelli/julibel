export default function ProjectIntro(props: any) {
  return (
    <>
    <div className="flex flex-col gap-3 text-center max-w-3xl xl:max-w-4xl self-center py-6">
      {props.title ? <h2 className="font-normal md:font-medium text-2xl md:text-3xl lg:text-4xl leading-snug">{props.title}</h2> : null}
      {props.subtitle ? <h3 className="font-normal md:font-medium text-lg md:text-2xl leading-snug">{props.subtitle}</h3> : null}
      <div className="font-extralight text-lg lg:text-xl leading-relaxed xl:leading-relaxed my-4">{props.children}</div>
    </div>      
    </>
  )
}
