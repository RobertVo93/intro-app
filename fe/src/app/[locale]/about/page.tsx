import AboutComponents from "../../components/about/aboutComponents";
import MoreDetail from "../../components/about/moreDetail";
import Overview from "../../components/overview";

export default function AboutUs(){
  return(
    <div>
      <Overview />
      <MoreDetail />
      <AboutComponents />
    </div>
  )
}