export default function ServiceHeaderComponent ({description}: {description: string}) {
  return(
    <div className="w-full xs:h-[500px] xs:text-ellipsis xs:overflow-auto">
      {description}
    </div>
  )
}