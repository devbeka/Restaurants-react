import React from 'react'
import Categories from '@components/Categories'
import emailIcon from './icons/email.svg'
import './styles.scss'
import RestarauntItem from '@components/RestarauntItem'
import Preloader from '../../components/Preloader'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
	const restaurants = useSelector(state => state.restaurants.items)
	const dispatch = useDispatch()

	React.useEffect(() => {
		dispatch({ type: 'GET_RESTAURANTS' })
		dispatch({ type: 'GET_LIKE_SAGA' })
	}, [])

	return (
		<section className='home section'>
			<div className='container'>
				<div className='home__header'>
					<h1 className='title'>
						Fast <span>Food Delivery</span> in Los Angeles
						<span>FOOD DELIVERY</span>
					</h1>
					<div className='home__newsletter'>
						<img src={emailIcon} alt='newsletter' />
						<span>Subscribe To Our Newsletter</span>
					</div>
				</div>
				<div className='home__content'>
					<Categories />
					<div className='home__restaraunts'>
						{restaurants.length ? (
							restaurants.map((restaraunt) => {
								return <RestarauntItem {...restaraunt} key={restaraunt.id} />
							})
						) : (
							<Preloader />
						)}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Home
