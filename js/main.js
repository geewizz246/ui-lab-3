var controller = (function() {
    var EDIT_PROFILE_ITEMS = {
        firstName: document.getElementById('input-edit-first-name'),
        lastName: document.getElementById('input-edit-last-name'),
        email: {
            primary: document.getElementById('email-container-0'),
            alt1: document.getElementById('email-container-1'),
            alt2: document.getElementById('email-container-2'),
            countVisible: 1
        },
        phone: {
            primary: document.getElementById('phone-container-0'),
            alt1: document.getElementById('phone-container-1'),
            alt2: document.getElementById('phone-container-2'),
            countVisible: 1
        },
        address: {
            primary: document.getElementById('address-container-0'),
            alt1: document.getElementById('address-container-1'),
            alt2: document.getElementById('address-container-2'),
            countVisible: 1
        }
    };

    var setUpEventListeners = function() {
        document.getElementById('btn-add-email').addEventListener('click', addEmail);
        document.getElementById('btn-add-phone').addEventListener('click', addPhone);
        document.getElementById('btn-add-address').addEventListener('click', addAddress);
        document.querySelectorAll('.btn-remove-element').forEach((item) => {
            item.addEventListener('click', removeElement);
        });
    }

    var addEmail = function() {
        for (email in EDIT_PROFILE_ITEMS.email) {
            if (EDIT_PROFILE_ITEMS.email[email].classList.contains('d-none')) {
                EDIT_PROFILE_ITEMS.email[email].classList.toggle('d-none');
                EDIT_PROFILE_ITEMS.email.countVisible++;
                break;
            }
        }

        console.log(EDIT_PROFILE_ITEMS.email.countVisible);

        if (EDIT_PROFILE_ITEMS.email.countVisible === 3) { 
            let btnAddEmail = document.getElementById('btn-add-email');
            btnAddEmail.classList.toggle('d-none'); 
            btnAddEmail.classList.toggle('d-flex');
        }
    };

    var addPhone = function() {
        for (phone in EDIT_PROFILE_ITEMS.phone) {
            if (EDIT_PROFILE_ITEMS.phone[phone].classList.contains('d-none')) {
                EDIT_PROFILE_ITEMS.phone[phone].classList.toggle('d-none');
                EDIT_PROFILE_ITEMS.phone.countVisible++;
                break;
            }
        }

        if (EDIT_PROFILE_ITEMS.phone.countVisible === 3) { 
            let btnAddPhone = document.getElementById('btn-add-phone');
            btnAddPhone.classList.toggle('d-none'); 
            btnAddPhone.classList.toggle('d-flex');
        }
    }

    var addAddress = function() {
        for (address in EDIT_PROFILE_ITEMS.address) {
            if (EDIT_PROFILE_ITEMS.address[address].classList.contains('d-none')) {
                EDIT_PROFILE_ITEMS.address[address].classList.toggle('d-none');
                EDIT_PROFILE_ITEMS.address.countVisible++;
                break;
            }
        }

        if (EDIT_PROFILE_ITEMS.address.countVisible === 3) { 
            let btnAddAddress = document.getElementById('btn-add-address');
            btnAddAddress.classList.toggle('d-none'); 
            btnAddAddress.classList.toggle('d-flex');
        }
    }

    var removeElement = function(e) {
        let elementId = e.currentTarget.parentElement.id;
        let type = elementId.substr(0, elementId.indexOf('-'));
        let btn = document.getElementById(`btn-add-${type}`);

        e.currentTarget.parentElement.classList.toggle('d-none');
        EDIT_PROFILE_ITEMS[type].countVisible--;
        
        btn.classList.add('d-flex');
        btn.classList.remove('d-none');
    }

    return {
        init: function() { 
            setUpEventListeners();
            console.log("Application started.");
        }
    }
})();

controller.init();