import React, {Component} from 'react';
import connect from 'react-redux';
import CheckboxOrRadioGroup from '../components/CheckboxOrRadioGroup';
import SingleInput from '../components/SingleInput';
import TextArea from '../components/TextArea';
import Select from '../components/Select';


class FormContainer extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			dealerName: '', 
			email: '',
			phone: '',
			url: '',
			contactMethodSelection: '',
			contactMethods: ['email', 'phone'],
			issueTypeSelection: '',
			issueTypes: ['Defect','Customization','Configuration'],
			issueTitle: '',
			petSelections: [],
			selectedPets: [],
			ageOptions: [],
			ownerAgeRangeSelection: '',
			siblingOptions: [],
			siblingSelection: [],
			currentPetCount: 0,
			description: ''
		};
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleClearForm = this.handleClearForm.bind(this);
		this.handleFullNameChange = this.handleFullNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePhoneChange = this.handlePhoneChange.bind(this);
		this.handleUrlChange = this.handleUrlChange.bind(this);
		this.handleContactMethodChange = this.handleContactMethodChange.bind(this);
		this.handleIssueTypeChange = this.handleIssueTypeChange.bind(this);
		this.handleIssueTitleChange = this.handleIssueTitleChange.bind(this);
		this.handleCurrentPetCountChange = this.handleCurrentPetCountChange.bind(this);
		this.handleAgeRangeSelect = this.handleAgeRangeSelect.bind(this);
		this.handlePetSelection = this.handlePetSelection.bind(this);
		this.handleSiblingsSelection = this.handleSiblingsSelection.bind(this);
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
	}

	componentDidMount() {
		fetch('./fake_db.json')
			.then(res => res.json())
			.then(data => {
				this.setState({
					petSelections: data.petSelections,
					selectedPets: data.selectedPets,
					ageOptions: data.ageOptions,
					ownerAgeRangeSelection: data.ownerAgeRangeSelection,
					siblingOptions: data.siblingOptions,
					siblingSelection: data.siblingSelection,
					currentPetCount: data.currentPetCount,
					description: data.description
				});
			});
	}


//Start handling functions
	handleFormSubmit(e) {
		//submit logic goes here
		e.preventDefault();

		const formPayload = {
			dealerName: this.state.dealerName,
			email: this.state.email,
			phone: this.state.phone,
			url: this.state.url,
			contactMethodSelection: this.state.contactMethodSelection,
			issueTypeSelection: this.state.issueTypeSelection,
			issueTitle: this.state.issueTitle,
			description: this.state.description
		};

		console.log('Send this in a POST request:', formPayload);
		this.handleClearForm(e);
	}

	handleClearForm(e) {
		//clear form logic goes here
		e.preventDefault();
		this.setState({
			dealerName: '',
			email: '',
			phone: '',
			url: '',
			contactMethods: [],
			contactMethodSelection: '',
			issueTypeSelection: '',
			issueTitle: '',
			selectedPets: [],
			ownerAgeRangeSelection: '',
			siblingSelection: [],
			currentPetCount: 0,
			description: ''
		});
	}

	handlePetSelection(e) {

		const newSelection = e.target.value;
		let newSelectionArray;

		if(this.state.selectedPets.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.selectedPets.filter(s => s !== newSelection)
		} else {
			newSelectionArray = [...this.state.selectedPets, newSelection];
		}

		this.setState({ selectedPets: newSelectionArray });
	}

	handleFullNameChange(e) {
		this.setState({ dealerName: e.target.value });
	}

	handleEmailChange(e) {
		this.setState({ email: e.target.value });
	}

	handlePhoneChange(e) {
		this.setState({ phone: e.target.value });
	}

	handleUrlChange(e) {
		this.setState({ url: e.target.value });
	}

	handleContactMethodChange(e) {
		this.setState({ contactMethodSelection: e.target.value });
	}

	handleIssueTypeChange(e) {
		this.setState({ issueTypeSelection: e.target.value });
	}

	handleIssueTitleChange(e) {
		this.setState({	 issueTitle: e.target.value });
	}

	handleDescriptionChange(e) {
		this.setState({	 description: e.target.value });
	}


	handleCurrentPetCountChange(e) {
		this.setState({ currentPetCount: e.target.value	});
	}

	handleAgeRangeSelect(e) {
		this.setState({  ownerAgeRangeSelection: e.target.value });
	}

	handleSiblingsSelection(e) {
		this.setState({  siblingSelection: e.target.value });
	}

	


//Start handling functions

	render() {
		return (

			<form className="container" onSubmit={this.handleFormSubmit}>
				<h5>Dealer.com Support Request Form</h5>
				
				<SingleInput
		          type={'text'}
		          title={'Full name'}
		          name={'name'}
		          controlFunc={this.handleFullNameChange}
		          content={this.state.dealerName}
		          placeholder={'Type first and last name here'} />

		        <SingleInput
		          type={'text'}
		          title={'Email'}
		          name={'email'}
		          controlFunc={this.handleEmailChange}
		          content={this.state.email}
		          placeholder={'dealer@dealer.com'} />

		        <SingleInput
		          type={'phone'}
		          title={'Phone'}
		          name={'phone'}
		          controlFunc={this.handlePhoneChange}
		          content={this.state.phone}
		          placeholder={'555-555-8888'} />

		        <SingleInput
		          type={'text'}
		          title={'URL'}
		          name={'url'}
		          controlFunc={this.handleUrlChange}
		          content={this.state.url}
		          placeholder={'www.dealer.com,wwww.roimotors.com,...'} />
		        
		        <Select
		          name={'contactMethod'}
		          placeholder={'Preferred contact method'}
		          controlFunc={this.handleContactMethodChange}
		          options={this.state.contactMethods}
		          selectedOption={this.state.contactMethodSelection} />

		        <Select
		          name={'issueType'}
		          placeholder={'Type of Issue'}
		          controlFunc={this.handleIssueTypeChange}
		          options={this.state.issueTypes}
		          selectedOption={this.state.issueTypeSelection} />

		        <SingleInput
		          inputType={'text'}
		          title={'Issue Title'}
		          name={'issueTitle'}
		          controlFunc={this.handleIssueTitleChange}
		          content={this.state.issueTitle}
		          placeholder={'Inventory not showing...'} />

		        <TextArea
		          title={'Description of Issue'}
		          rows={5}
		          resize={false}
		          content={this.state.description}
		          name={'currentPetInfo'}
		          controlFunc={this.handleDescriptionChange}
		          placeholder={'Please be thorough in your descriptions'} />
		      

				<input type="submit" value="Submit" className="btn btn-primary float-right"/>
				<button className="btn btn-link float-left" onClick={this.handleClearForm}>Clear Form</button>

			</form>

		);
	}

} 


export default FormContainer;

