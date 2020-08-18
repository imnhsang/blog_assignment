import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

import './style.scss'

const ButtonArrowRight = ({ name, fluid, small, onClick, type }) => {
	return (
		<Button
			fluid={fluid}
			type={type}
			className={`button-arrow-right ${small ? 'small' : ''}`}
			onClick={onClick}
		>
			{name} <Icon name='arrow right' />
		</Button>
	)
}

export default ButtonArrowRight
