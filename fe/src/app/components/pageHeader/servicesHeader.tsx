import { useTranslations } from "next-intl"

export default function ServiceHeaderComponent ({description}: {description: string}) {
  return(
    <div className="w-full">
      {description}
    </div>
  )
}