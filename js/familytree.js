let list;
$(document).ready(function() {
	list = new Vue({
		el: '.container-family-table',
		data: {
			members: members,
			search_term: '',
			filter_setting: 'generational'
		},
		methods: {
			processMembers: function() {
				// clone array
				let members = this.members.slice(0);
				// filter
				if (this.filter_setting) {
					members = this.filter(members, this.filter_setting);
				}
				// search
				if (this.search_term) {
					members = this.search(members, this.search_term);
				}
				return members;
			},
			filter: function(members, setting) {
				switch(setting) {
					case('alphabetical'):
						members = members.sort(function(a, b) {
							if (b.name > a.name) return -1;
							if (b.name < a.name) return 1;
							return 0;
						});
						break;
					case('generational'):
						members = members.sort(function(a, b) {
							return a.gen - b.gen;
						});
						break;
				}
				return members;
			},
			search: function(members, term) {
				members = members.filter(function(member) {
					try {
						let re = new RegExp(term, 'i');
						return member.name.match(re);	
					}
					catch(e) {
						return member.name.indexOf(term);
					}
				});
				return members;
			}
		}
	});
});