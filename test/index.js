const Metalsmith 	= require('metalsmith');
const layouts		= require('metalsmith-layouts');
const moment		= require('metalsmith-moment');

describe('metalsmith-intensedebate', function() {
 	it('should report that it loaded', function() {
 		Metalsmith(__dirname)
 			.use(intensedebate({
 				url: '',
 				acct_id: '000000000',
 				shortname: ''
 			}))
 			.use(moment({['date']}))
 			.use(layouts())
 			.build(function(err) {
 				if (err) {
 					return err;
 				} else {
 					done();
 				}
 			});
	});

	it('should load comment counter', function() {
		Metalsmith(__dirname)
			.use(intensedebate({
				url: 'quswan.net',
				acct_id: '000000000',
				shortname: ''
			}))
			.build(function(err) {
				if (err) {
					return err;
				} else {
					done();
				}
			});
	});

	it('should work with an acceptable url', function() {
		Metalsmtih(__dirname)
			.use(intensedebate({
				url: 'quswan.net',
				acct_id: '',
				shortname: ''
			}))
			.build(function(err) {
				if (err) {
					return err;
				} else {
					done();
				}
			});
	});
});