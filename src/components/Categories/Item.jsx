import React from 'react'

const Item = ({ type, icon, activeItem, setActiveItem, index }) => {

	const handeClick = () => {
		setActiveItem(index)
	}

	return (
		<li onClick={handeClick} className={`categories__item ${activeItem === index ? 'active' : ''}`}>
			<img src={icon} alt={type} />
			<span>{type}</span>
		</li>
	)
}

export default Item
