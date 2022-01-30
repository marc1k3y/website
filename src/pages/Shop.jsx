import { useSelector } from "react-redux"

const Shop = () => {
  const goods = useSelector(state => state?.shop)
  console.log(goods)
  return (
    <div className="shop-page">
      {goods.map(good =>
        <div className="shop-page-card" key={good.id}>
          <h4>{good.title}</h4>
          <div><img src={good.pic} alt="good pic" /></div>
          <div className="shop-page-card-price">{good.price}</div>
        </div>)}
    </div>
  )
}

export default Shop