export default function ProjectIntro(props: any) {
  return (
    <>
    <div className="flex flex-col gap-3 text-center max-w-xl md:max-w-2xl self-center py-6">
      {props.title ? <h2 className="font-medium text-3xl md:text-4xl leading-tight">{props.title}</h2> : null}
      {props.subtitle ? <h3 className="font-medium text-lg md:text-2xl leading-tight">{props.subtitle}</h3> : null}
      <div className="font-extralight text-base leading-loose text-zinc-600 my-4">{props.children}</div>
    </div>      
    </>
  )
}
