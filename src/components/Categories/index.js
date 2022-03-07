import React from 'react'
import Item from './Item'
import categoryItems from './const'
import kebabIcon from './icons/kebab-menu.svg'
import './styles.scss'

const Categories = () => {
	const [activeItem, setActiveItem] = React.useState(null)

	const handleClickAll = () => {
		setActiveItem(null)
	}

	return (
		<div className='categories'>
			<ul className='categories__list'>
				<li
						onClick={handleClickAll}
				    className={`categories__item ${activeItem === null ? 'active' : ''}`}>
						<span>All</span>
				</li>
				{categoryItems.map((item, index) => {
					return (
						<Item
							index={index}
							activeItem={activeItem}
							setActiveItem={setActiveItem}
							{...item}
							key={item.type}
						/>
					)
				})}
			</ul>
			<button>
				<img src={kebabIcon} alt='All Categories' />
				<span>All Categories</span>
			</button>
		</div>
	)
}

export default Categories
