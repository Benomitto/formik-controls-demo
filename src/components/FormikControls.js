import React from 'react'

function FormikControls(props){
const {control,...rest} = props
switch(control){
	case 'input': return <input {...rest}/>
	case 'textarea':
	case 'select':
	case 'radio':
	case 'checkbox':
	case 'date':
	default:return null
}
	return(
	
	<div>
	
	
	</div>
	
	)
}

export default FormikControls