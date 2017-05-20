import React from 'react';
import PropTypes from "prop-types";

const TextArea = (props) => (
	<div className="form-group">
		<label className="form-label">{props.title}</label>
		<textarea 
			className="form-input"
			name={props.name}
			rows={props.rows}
			style={props.resize ? null : {resize: 'none'}}
			value={props.content}
			onChange={props.controlFunc}
			placeholder={props.placeholder} />
	</div>
);

TextArea.PropTypes = {
	title: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	rows: PropTypes.number.isRequired,
	content: PropTypes.string.isRequired,
	controlFunc: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	resize: PropTypes.bool
}; 

export default TextArea;