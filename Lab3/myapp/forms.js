var i = 1, j = 1;

var availableForms = [{
		id : i++,
		name : 'default form which asks to enter name',
		fields : [{
			id1 : 'name',
			type1 : 'string',
			id2 : 'age',
			type2 : 'string'
		}]
	},
	{
		id : i++,
		name : 'another form',
		fields : [{
			id1 : 'ur company',
			type1 : 'string',
			id2 : 'some word',
			type2 : 'string'
		}]
	}],
	submittedForms = [
		/*id : j++,
		fields : [{
			id : 'name',
			value : 'string'*/
	];

module.exports = {
	getAvailableForms : function(){
		return availableForms;
	},
	getForm : function(id){
		for(let i = 0; i < availableForms.length; i++){
			if(availableForms[i].id == id) {
				return availableForms[i]
			}
		}
	},
	submitForm : function(req) {
		var id = req.param('formID'),
			form = this.getForm(id),
			formObj = {
				id1 : form.fields[0].id1,
				value1 : req.body.value1,
				id2 : form.fields[0].id2,
				value2 : req.body.value2
			};
		
		submittedForms.push({id : j++, fields : formObj});
		console.log(submittedForms);
	},
	getSubmittedForms : function(){
		return submittedForms;
	},
	getSubmittedForm : function(id){
		for(let i = 0; i < submittedForms.length; i++){
			if(submittedForms[i].id == id) {
				return submittedForms[i]
			}
		}
	}
}