var controller = (function() {
    var PASSWORD_ITEMS = {
        passwordPeeks: [ ...document.querySelectorAll('.password-peek') ]
    }

    var setUpEventListeners = function() {
        for (peek of PASSWORD_ITEMS.passwordPeeks) {
            peek.addEventListener('click', (e) => {
                e.preventDefault();
                
                e.currentTarget.classList.toggle('fa-eye');
                e.currentTarget.classList.toggle('fa-eye-slash');

                let pass = e.currentTarget.parentElement.previousElementSibling;
                pass.type = pass.type === 'password' ? 'text' : 'password';
            });
        }
    }

    return {
        init: function() { 
            setUpEventListeners();
            console.log("Application started.");
        }
    }
})();

controller.init();
