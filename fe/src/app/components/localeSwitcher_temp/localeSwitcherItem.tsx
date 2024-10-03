import { startTransition } from "react"
import { usePathname, useRouter } from "@/src/navigation";
import { useParams } from "next/navigation";

export default function LocaleSwitcherItem({
  lang
}: {
  lang: string
}){
  const router= useRouter()
  const pathname = usePathname()
  const params = useParams()
  const nextLocale = lang === 'English' ? 'en' : 'vi'

  function onClickChange(nextLocale: string) {
    startTransition(() => {
      router.replace(
        //@ts-expect-error avoid build
        {pathname, params},
        {locale: nextLocale}
      )
    })
  }

  return(
    <div 
      className={`h-[40px] py-[10px] cursor-pointer hover:text-red-600 transition duration-500`}
      onClick={() => onClickChange(nextLocale)}
    >
      {lang}
    </div>
  )
}