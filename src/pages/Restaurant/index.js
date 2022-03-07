import React from 'react'
import { useParams } from 'react-router-dom'

const Restaurant = () => {
	const { id } = useParams()
	const [restaurant, setRestaurant] = React.useState({})

	React.useEffect(() => {

	}, [])

	return (
		<div className='section'>
			<div className="container">
        <div>
          <div>
            <h1>{restaurant.name}</h1>
            <img src={restaurant.image} alt="" />
            <div>
              {restaurant.cookTime}
            </div>
            <div>
              {restaurant.grade}
            </div>
          </div>
        </div>
      </div>
		</div>
	)
}

export default Restaurant
