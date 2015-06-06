var m = require('mithril');

var notelist = {};
var editnote = {};

editnote.view = function () {
	return m('input', 'Enter');
};

m.mount(document.getElementById('content'), editnote);