var controller = (function() {
    var EDIT_PROFILE_ITEMS = {
        firstName: document.getElementById('input-edit-first-name'),
        lastName: document.getElementById('input-edit-last-name'),
        emails: {
            primary: document.getElementById('email-container-0'),
            alt1: document.getElementById('email-container-1'),
            alt2: document.getElementById('email-container-2')
        },
        phones: {
            primary: document.getElementById('phone-container-0'),
            alt1: document.getElementById('phone-container-1'),
            alt2: document.getElementById('phone-container-2')
        },
        addresses: {
            primary: document.getElementById('address-container-0'),
            alt1: document.getElementById('address-container-1'),
            alt2: document.getElementById('address-container-2')
        }
    };

    var setUpEventListeners = function() {
        document.getElementById('btn-add-email').addEventListener('click', addEmail);
        document.getElementById('btn-add-phone').addEventListener('click', addPhone);
        document.getElementById('btn-add-address').addEventListener('click', addAddress);
        document.getElementById('exit').addEventListener('click', function(e) {
            document.getElementById('v-pills-tab-container').classList.toggle('d-none');
            e.preventDefault();
        });
        document.querySelectorAll('.btn-remove-element').forEach((item) => {
            item.addEventListener('click', removeElement);
        });
    }

    var addEmail = function() {
        for (email in EDIT_PROFILE_ITEMS.emails) {
            if (EDIT_PROFILE_ITEMS.emails[email].classList.contains('d-none')) {
                EDIT_PROFILE_ITEMS.emails[email].classList.toggle('d-none');
                break;
            }
    
            document.getElementById('btn-add-email').classList.toggle('d-none');
        }
    };

    var addPhone = function() {
        for (phone in EDIT_PROFILE_ITEMS.phones) {
            if (EDIT_PROFILE_ITEMS.phones[phone].classList.contains('d-none')) {
                EDIT_PROFILE_ITEMS.phones[phone].classList.toggle('d-none');
                break;
            }
    
            document.getElementById('btn-add-phone').classList.toggle('d-none');
        }
    }

    var addAddress = function() {
        for (address in EDIT_PROFILE_ITEMS.addresses) {
            if (EDIT_PROFILE_ITEMS.addresses[address].classList.contains('d-none')) {
                EDIT_PROFILE_ITEMS.addresses[address].classList.toggle('d-none');
                break;
            }
    
            document.getElementById('btn-add-address').classList.toggle('d-none');
        }
    }

    var removeElement = function(e) {
        e.currentTarget.parentElement.classList.toggle('d-none')
    }

    return {
        init: function() { 
            setUpEventListeners();
            console.log("Application started.");
        }
    }
})();

controller.init();