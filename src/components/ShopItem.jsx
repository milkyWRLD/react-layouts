import PropTypes from 'prop-types'

export default function ShopItem({ name, price, color, img }) {
	return (
		<div className='shop-item'>
			<img src={img} alt={name} className='shop-item-image' />
			<div className='shop-item-details'>
				<h3 className='shop-item-name'>{name}</h3>
				<p className='shop-item-color'>{color}</p>
			</div>
			<p className='shop-item-price'>${price}</p>
			<button className='shop-item-button'>Add to Cart</button>
		</div>
	)
}

ShopItem.propTypes = {
	name: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
}
