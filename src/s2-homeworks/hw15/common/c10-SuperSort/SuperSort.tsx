import React from 'react'
import upIcon from './../images/sort-up-svgrepo-com.svg'
import downIcon from './../images/sort-down-svgrepo-com.svg'
import noneIcon from './../images/sort-svgrepo-com.svg'
// добавить в проект иконки и импортировать
// const downIcon = '[\\/]'
// const upIcon = '[/\\]'
// const noneIcon = '[--]'

// const downIcon = downIc
// const upIcon = upIc
// const noneIcon = noneIc

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
	// if (sort === '') {
	// 	return sort = down
	// } else if (sort === down) {
	// 	return sort = up
	// } else if (sort === up) {
	// 	return sort = ''
	// } else {
	// 	return down
	// }

	if (sort === '') {
		return down
	} else if (sort === down) {
		return up
	} else if (sort === up) {
		return ''
	} else {
		return down
	}
	// return sort
    // пишет студент,
		// sort: (click) => down (click) => up (click) => '' (click) => down ...
    return down // исправить
	// return sort === '' ? down : sort === down ? up : ''
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/* сделать иконку*/}
            <img
            id={id + '-icon-' + sort}
             src={icon} />
          
        </span>
    )
}

export default SuperSort
