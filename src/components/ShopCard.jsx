import PropTypes from 'prop-types'

export default function ShopCard({ name, price, color, img }) {
	return (
		<div className='shop-card'>
			<img src={img} alt={name} className='shop-card-image' />
			<h3 className='shop-card-name'>{name}</h3>
			<p className='shop-card-color'>{color}</p>
			<p className='shop-card-price'>${price}</p>
			<button className='shop-card-button'>Add to Cart</button>
		</div>
	)
}

ShopCard.propTypes = {
	name: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
}
