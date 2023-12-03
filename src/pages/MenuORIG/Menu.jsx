import React, { useState } from 'react'
import './Menu.css'
import categories from './categories.json'

const Category = ({category}) => {
  const [open, setOpen] = useState(false)
  return (
    <div onClick={() => setOpen(!open)}>
          <h2 className="menu__category-heading">
            {category.sectionName}
          </h2>
                {open && <FoodList category={category} />}
    </div>
  )
}

const FoodList = ({category}) => {
  return category.foods.map((food) => (
    <div className="menu__food" key={food.foodId}>
    <div className="menu__food-header">
      <h4>{food.foodName}</h4>
      <h4>{food.price}</h4>
    </div>
    <div className="menu__food-text">
      <p>{food.description}</p>
    </div>
  
  </div>
  ))
}
const Menu = () => {
  return (
    <>
      
        <div className='menu__header'> <h1>Our Menu</h1> </div>

        <div className='menu__category-map'>
          {categories.map((category) =>{
            return <Category key={category.sectionName} category={category} />
          })}
        </div>
      
    </>
  )
}

export default Menu
