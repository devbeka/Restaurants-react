import React from 'react'
import RestarauntItem from '@/components/RestarauntItem'
import Preloader from '../../components/Preloader'

const LikedRestaraunts = () => {
	const [rests, setRests] = React.useState([])



	return (
		<section className='section'>
			<div className='container'>
				<div className='home__restaraunts'>
					{rests.length ? (
						rests.map((restaraunt) => {
							return <RestarauntItem bool={true} {...restaraunt} key={restaraunt.id} />
						})
					) : (
						<Preloader />
					)}
				</div>
			</div>
		</section>
	)
}

export default LikedRestaraunts
