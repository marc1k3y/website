import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

const Shop = () => {
  const goods = useSelector(state => state?.shop)
  return (
    <div className="shop-page">
      {goods.map(good =>
        <div className="shop-page-card" key={good.id}>
          <NavLink to={`/shop-item/${good.id}`}>
            <h4>{good.title}</h4>
          </NavLink>
          <div><img src={good.pic} alt="good pic" /></div>
          <div className="shop-page-card-price">{good.price}</div>
        </div>)}
    </div>
  )
}

export default Shop