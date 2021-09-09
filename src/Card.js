import React from 'react';

const Card = (props) => {
	// const Card = ({name, email, id}) => 
	// and erase props below
	// or

	// const {name,email,id} = props;
	// and erase props below
	return (

		<div className='tc bg-light-green dib br3 pa3 ma2 grow shadow-5'>
		{/*this is tachyons css props*/}
			<img alt='robots' src={`https://robohash.org/${props.id}?200*200`} />
			<div>
				<h2>{props.name}</h2> {/*Have to wrapping{} because jsx syntax*/}
				<p>{props.email}</p>
			</div>
		</div>

		);
}

export default Card;

