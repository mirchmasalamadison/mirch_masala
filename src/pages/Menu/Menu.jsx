import React, { useState } from 'react'
import './Menu.css'
import categories from './categories.json'
import { IoIosArrowDropdownCircle} from "react-icons/io";


const Category = ({category}) => {
  const [open, setOpen] = useState(false)
  return (
    <div onClick={() => setOpen(!open)}>
      <div className='menu__category'>
                  <h2 className="menu__category-heading">
        {category.sectionName} 
      </h2>
      <div className='menu__category-dropdown'>
      <h2> <IoIosArrowDropdownCircle /></h2>
      </div>
      </div>


      
                {open && <FoodList category={category} />}
    </div>
  )
}

const FoodList = ({category}) => {
  return (
    <div className="menu__food-map">
    {category.foods.map((food) => (
    <div className="menu__food" key={food.foodId}>
    <div className="menu__food-header">
      <h4 className='menu__food-title'>{food.foodName}</h4>
      <h4>{food.price}</h4>
    </div>
    <div className="menu__food-text">
      <p>{food.description}</p>
    </div>
  
    </div>
    
    
  ))
}
  </div>
    
  )
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


// .menu__food{
//   box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
//   transition: 0.3s;
  
// }
// .menu__food:hover{
// box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
// }