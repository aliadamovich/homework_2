import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
					width: 200,
					height: '6px',
					color: '#0c2',
					'& .MuiSlider-rail': {
						color: ' #8b8b8b',
						
					},
					'& .MuiSlider-thumb': {
						width: '20px',
						height: '20px',
						backgroundColor: '#fff',
						border: '2px solid currentColor',

						'&::before': {
							content: '""',
							width: '6px',
							height: '6px',
							backgroundColor: '#0c2',
							display: 'block',
							boxShadow: 'none'
						},
            }}}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
