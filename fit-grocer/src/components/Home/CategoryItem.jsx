import React from 'react'

const CategoryItem = ({ img, name, color }) => {
   return (
      <div className={`rounded-xl w-[135px] h-[70px] text-[15px] px-4 py-3 bg-no-repeat cursor-pointer`} style={{ backgroundImage: `url(${img})`, backgroundPosition: '110% -160%', backgroundSize: '75px', backgroundColor: color }} >
         {name}
      </div>
   )
}

export default CategoryItem