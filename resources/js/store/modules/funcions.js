module.exports = {
    AlertMessage : (status,data) =>{
        switch (status) {
            case 201 :
                state.alert_form.show       = true;
                state.alert_form.color      = 'success';
                state.alert_form.message    = data;
                break;
            case 409 || 404 :
                state.alert_form.show       = true;
                state.alert_form.color      = 'warn';
                state.alert_form.message    = data;
                break;
            case 500 :
                state.alert_form.show       = true;
                state.alert_form.color      = 'danger';
                state.alert_form.message    = data;
                break;
        };
    }
}

AlertMessage(status,data)
