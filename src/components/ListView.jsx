import PropTypes from 'prop-types'
import ShopItem from './ShopItem'

export default function ListView({ items }) {
	return (
		<div className='list-view'>
			{items.map((item, index) => (
				<ShopItem key={index} {...item} />
			))}
		</div>
	)
}

ListView.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			price: PropTypes.string.isRequired,
			color: PropTypes.string.isRequired,
			img: PropTypes.string.isRequired,
		})
	).isRequired,
}
