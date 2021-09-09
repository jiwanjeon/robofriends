import React from 'react'

const SearchBox = ({searchfield,searchChange}) => {
	return (
		<div className='tc'>
		<input
			className='pa3 bg-light-green dib br3 pa3 ma2 grow shadow-5' 
			type='search'
			placeholder='SearchBox'
			onChange={searchChange}
			/>
		</div>
		);
}

export default SearchBox;