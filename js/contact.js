let form;
$(document).ready(function() {
	form = new Vue({
		el: '.form-contact-me',
		data: {
			name: '',
			email: '',
			subject: '',
			comment: '',
			errors: []
		},
		methods: {
			validate: function() {
				this.errors = [];
				// name is not empty
				if (!this.name) {
					this.errors.push('Name cannot be empty');
				}
				// valid email
				let email_re = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
				if (!this.email.match(email_re)) {
					this.errors.push('Invalid email')
				}
				// subject and comment are non empty
				if (!this.subject) {
					this.errors.push('Subject cannot be empty');
				}
				if (!this.comment) {
					this.errors.push('Comment cannot be empty');
				}
				return this.errors.length == 0;
			}
		}
	});
});