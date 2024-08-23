import { useState } from 'react'
import CardsView from './components/CardsView'
import IconSwitch from './components/IconSwitch'
import ListView from './components/ListView'
import './index.css'

const products = [
	{ name: 'Nike Metcon 2', price: '130', color: 'red', img: './src/img/1.jpg' },
	{
		name: 'Nike Metcon 2',
		price: '130',
		color: 'green',
		img: './src/img/2.jpg',
	},
	{
		name: 'Nike Metcon 2',
		price: '130',
		color: 'blue',
		img: './src/img/3.jpg',
	},
	{
		name: 'Nike Metcon 2',
		price: '130',
		color: 'black',
		img: './src/img/4.jpg',
	},
	{
		name: 'Nike free run',
		price: '170',
		color: 'black',
		img: './src/img/7.jpg',
	},
	{
		name: 'Nike Metcon 3',
		price: '150',
		color: 'green',
		img: './src/img/5.jpg',
	},
]

const App = () => {
	const [view, setView] = useState('module') // 'module' или 'list'

	const handleSwitch = () => {
		setView(prevView => (prevView === 'module' ? 'list' : 'module'))
	}

	return (
		<div className='store-container'>
			<IconSwitch
				icon={view === 'module' ? 'view_list' : 'view_module'}
				onSwitch={handleSwitch}
			/>
			{view === 'module' ? (
				<CardsView cards={products} />
			) : (
				<ListView items={products} />
			)}
		</div>
	)
}

export default App
