import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
const { DOM: { input, select, textarea } } = React;

const ContactForm = (props) => {

		const { handleSubmit, pristine, reset, submitting } = props
		return (
			<form onSubmit={handleSubmit}>
				<div>
        			<label>Full Name</label>
        			<div>
          				<Field name="name" component={input} type="text" placeholder="First and Last"/>
        			</div>
      			</div>
        		<div>
        			<label>Email</label>
        			<div>
          				<Field name="email" component={input} type="email" placeholder="Dealer@dealer.com"/>
        			</div>
      			</div>
        		<div>
        			<label>Phone</label>
        			<div>
          				<Field name="phone" component={input} type="tel" placeholder="802-855-8989"/>
        			</div>
      			</div>
      			<div>
        			<label>URL</label>
        			<div>
          				<Field name="url" component={input} type="url" placeholder="www.dealer.com,www.roimotors.com,ex..."/>
        			</div>
      			</div>
      			<div>
        			<label>Preferred Method of Contact</label>
        			<div>
         				<Field name="contactMethod" component={select}>
            				<option></option>
            				<option value="Phone">Phone</option>
            				<option value="email">Email</option>
          				</Field>
        			</div>
      			</div>
      			<div>
        			<label>Type of Issue</label>
        			<div>
         				<Field name="issue" component={select}>
            				<option></option>
            				<option value="defect">Defect</option>
            				<option value="customization">Customization</option>
            				<option value="configuration">Configuration</option>
          				</Field>
        			</div>
      			</div>
      			<div>
        			<label>Issue Title</label>
        			<div>
          				<Field name="issueTitle" component={input} type="text" placeholder="Inventory not showing..."/>
        			</div>
      			</div>
				 <div>
        			<label>Description of Issue</label>
        			<div>
          				<Field name="description" component={textarea} placeholder="Please be thorough in your descriptions"/>
        			</div>
      			</div>
				<div>
        			<button type="submit" disabled={pristine || submitting}>Submit</button>
        			<button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      			</div>
			</form>
		);
}

export default reduxForm({
	form: 'contact'
})(ContactForm)