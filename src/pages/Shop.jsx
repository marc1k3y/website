import { useSelector } from "react-redux"

const Shop = () => {
  const goods = useSelector(state => state?.shop)
  console.log(goods)
  return (
    <div className="shop">
      {goods.map(good =>
        <div className="shop-card" key={good.id}>
          <h4>{good.title}</h4>
          <div><img src={good.pic} alt="good pic" /></div>
          <div className="shop-card-price">{good.price}</div>
        </div>)}
    </div>
  )
}

export default Shop