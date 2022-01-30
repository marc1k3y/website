import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"

const AboutItem = () => {
  const { pathname } = useLocation()
  const goods = useSelector(state => state?.shop)
  const item = goods.filter(good => good.id.toString() === pathname.split("/")[2])
  return (
    <div className="about-item-page">
      <h2>{item[0].title}</h2>
      <p>{item[0].descr}</p>
      <p>{item[0].price}</p>
      <button>buy</button>
    </div>
  )
}

export default AboutItem