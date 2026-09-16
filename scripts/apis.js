
function fetchServicesData() {
    $.ajax({
        url: 'https://semicode.tech/api/v1/l10nhouse/services',
        method: 'GET',
        contentType: 'application/json',
        success: function (response) {
            servicesData = response || [];
            renderServices(servicesData);
        },
        error: function (response) {
            console.error('Error fetching services:', response.error);
        }
    });
}


function fetchLanguages(){
    $.ajax({
        url: 'https://semicode.tech/api/v1/l10nhouse/languages',
        method: 'GET',
        contentType: 'application/json',
        success: function (response) {
            Languages = response || [];
            renderLanguages(Languages);
        },
        error: function (response) {
            console.error('Error fetching :', response.error);
        }
    });
}


function fetchSectors() {
    $.ajax({
        url: 'https://semicode.tech/api/v1/l10nhouse/sectors',
        method: 'GET',
        contentType: 'application/json',
        success: function (response) {
            sectors = response || [];
            renderSectors(sectors);
        },
        error: function (response) {
            console.error('Error fetching :', response.error);
        }
    });
}
