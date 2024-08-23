import PropTypes from 'prop-types'

export default function IconSwitch({ icon, onSwitch }) {
	return (
		<span
			className='material-icons'
			onClick={onSwitch}
			style={{ cursor: 'pointer', fontSize: '36px' }}
		>
			{icon}
		</span>
	)
}

IconSwitch.propTypes = {
	icon: PropTypes.string.isRequired,
	onSwitch: PropTypes.func.isRequired,
}
