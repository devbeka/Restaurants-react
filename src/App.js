import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import Home from './pages/Home'
import { Login, Signup } from './pages/Auth'
import { Route, useHistory } from 'react-router-dom'
import React from 'react'
import LikedRestaraunts from './pages/LikedRestaraunts'
import Restaurant from './pages/Restaurant'

function App() {
	return (
		<div className='App'>
			<Route path='/auth/login' render={() => <Login />} />
			<Route path='/auth/sign-up' render={() => <Signup />} />
			<PrivateRoute exact path='/'>
				<Header />
				<Home />
			</PrivateRoute>
			<PrivateRoute path='/profile/liked/restaraunts'>
				<LikedRestaraunts />
			</PrivateRoute>
			<PrivateRoute path='/restaurants/:id'>
				<Restaurant />
			</PrivateRoute>
		</div>
	)
}

export default App
