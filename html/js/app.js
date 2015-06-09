var m = require('mithril');

var notelist = {};
var editnote = {};

editnote.controller = function () {
	this.note = m.prop('');
    this.save = function () {
        console.log(this.note())
        this.note('')
    }.bind(this);
};

editnote.view = function (ctrl) {
	return m('.container',
			m('.row',
				m('.col-md-6',
					m('div.form-group',
						m('textarea.form-control', {
							oninput: m.withAttr("value", ctrl.note),
      						value: ctrl.note(),
    						placeholder:'Add notes',
							rows: 3
						})),
					m('button.btn.btn-default', {
							type: 'submit',
                            onclick: ctrl.save
						}, 'Save')
				)
			)
	);
};

m.mount(document.getElementById('content'), editnote);