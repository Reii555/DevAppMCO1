/*** References
 * https://www.w3schools.com/js/js_events.asp
 * https://www.w3schools.com/js/js_htmldom.asp
 * https://www.w3schools.com/js/js_validation.asp
 * https://www.w3schools.com/Jquery/jquery_syntax.asp
 * https://www.w3schools.com/js/js_jquery_elements.asp
 * https://www.w3schools.com/jquery/jquery_css.asp
 */

let currentEditId = null;  // Tracks which passenger is being edited (for further development)

// Utility Functions

function showToast(msg, isError) {
    $('#toastText').text(msg);
    if (isError) {
        $('#toastMsg').css('background-color', '#dc2626');
    } else {
        $('#toastMsg').css('background-color', '#1e293b');
    }
    $('#toastMsg').fadeIn();
    setTimeout(function() {
        $('#toastMsg').fadeOut();
    }, 2000);
}

function escapeHtml(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        if (char === '&') {
            result += '&amp;';
        } else if (char === '<') {
            result += '&lt;';
        } else if (char === '>') {
            result += '&gt;';
        } else {
            result += char;
        }
    }
    return result;
}

// Validation Functions using Regular Expressions

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateField(id, errorMsg, validator) {
    const val = $('#' + id).val().trim();
    let isValid;
    if (validator) {
        isValid = validator(val);
    } else {
        isValid = val !== '';
    }
    if (!isValid) {
        $('#' + id).css('border-color', '#dc2626');
        if ($('#' + id).next('.field-error').length === 0) {
            $('#' + id).after('<span class="field-error text-danger small">' + errorMsg + '</span>');
        }
        return false;
    }
    $('#' + id).css('border-color', '#e2e8f0');
    $('#' + id).next('.field-error').remove();
    return true;
}

function validatePersonalInfo() {
    let valid = true;
    
    const fullName = $('#fullName').val().trim();
    if (fullName === '') {
        $('#fullName').css('border-color', '#dc2626');
        if ($('#fullName').next('.field-error').length === 0) {
            $('#fullName').after('<span class="field-error text-danger small">Full name is required</span>');
        }
        valid = false;
    } else if (fullName.length < 2) {
        $('#fullName').css('border-color', '#dc2626');
        if ($('#fullName').next('.field-error').length === 0) {
            $('#fullName').after('<span class="field-error text-danger small">Full name must be at least 2 characters</span>');
        }
        valid = false;
    } else {
        $('#fullName').css('border-color', '#e2e8f0');
        $('#fullName').next('.field-error').remove();
    }
    
    const email = $('#email').val().trim();
    if (email === '') {
        $('#email').css('border-color', '#dc2626');
        if ($('#email').next('.field-error').length === 0) {
            $('#email').after('<span class="field-error text-danger small">Email address is required</span>');
        }
        valid = false;
    } else if (!isValidEmail(email)) {
        $('#email').css('border-color', '#dc2626');
        if ($('#email').next('.field-error').length === 0) {
            $('#email').after('<span class="field-error text-danger small">Please enter a valid email address</span>');
        }
        valid = false;
    } else {
        $('#email').css('border-color', '#e2e8f0');
        $('#email').next('.field-error').remove();
    }
    
    const phone = $('#phone').val().trim();
    if (phone !== '') {
        const phoneRegex = /^\+63\s?[0-9]{3}\s?[0-9]{3}\s?[0-9]{4}$/;
        if (!phoneRegex.test(phone)) {
            $('#phone').css('border-color', '#dc2626');
            if ($('#phone').next('.field-error').length === 0) {
                $('#phone').after('<span class="field-error text-danger small">Valid phone: +63 9XX XXX XXXX</span>');
            }
            valid = false;
        } else {
            $('#phone').css('border-color', '#e2e8f0');
            $('#phone').next('.field-error').remove();
        }
    }

    const dob = $('#dob').val();
    if (dob === '') {
        $('#dob').css('border-color', '#dc2626');
        if ($('#dob').next('.field-error').length === 0) {
            $('#dob').after('<span class="field-error text-danger small">Date of birth is required</span>');
        }
        valid = false;
    } else {
        $('#dob').css('border-color', '#e2e8f0');
        $('#dob').next('.field-error').remove();
    }
    
    return valid;
}

// Passenger Item Functions

function buildPassengerHtml(name, type, iconClass) {
    let html = '';
    html += '<div class="passenger-item">';
    html += '    <div class="passenger-info">';
    html += '        <i class="fas ' + iconClass + '"></i>';
    html += '        <span>' + escapeHtml(name) + '</span>';
    html += '        <span class="passenger-badge">' + type + '</span>';
    html += '    </div>';
    html += '    <button class="btn-remove remove-passenger"><i class="fas fa-trash-alt"></i></button>';
    html += '</div>';
    return html;
}

function addPassenger() {
    const name = $('#newPassengerName').val().trim();
    const type = $('#passengerType').val();
    
    if (name === '') {
        showToast('Please enter passenger name', true);
        $('#newPassengerName').css('border-color', '#dc2626');
        return;
    }
    if (name.length < 2) {
        showToast('Passenger name must be at least 2 characters', true);
        $('#newPassengerName').css('border-color', '#dc2626');
        return;
    }
    $('#newPassengerName').css('border-color', '#e2e8f0');
    
    let iconClass = 'fa-user-circle';
    if (type === 'Child') {
        iconClass = 'fa-child';
    } else if (type === 'Infant') {
        iconClass = 'fa-baby';
    }
    
    const passengerHtml = buildPassengerHtml(name, type, iconClass);
    $('#passengersList').append(passengerHtml);
    $('#newPassengerName').val('');
    showToast(name + ' added as ' + type, false);
}

function removePassenger() {
    const name = $(this).closest('.passenger-item').find('.passenger-info span').first().text();
    $(this).closest('.passenger-item').remove();
    showToast(name + ' removed', false);
}

// Personal Information Function

function savePersonalInfo() {
    if (!validatePersonalInfo()) {
        showToast('Please fix the errors before saving', true);
        return;
    }
    showToast('Personal information saved successfully!', false);
}

// User Picture Upload

function uploadAvatar(e) {
    const file = e.target.files[0];
    if (file) {
        if (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg') {
            if (file.size > 2 * 1024 * 1024) {
                showToast('File size must be less than 2MB', true);
                return;
            }
            const reader = new FileReader();
            reader.onload = function(event) {
                $('#avatarPreview').html('<img src="' + event.target.result + '" alt="avatar">');
                showToast('Profile photo updated!', false);
            };
            reader.readAsDataURL(file);
        } else {
            showToast('Please select a valid image (PNG/JPG)', true);
        }
    }
}

// Payment Method Function (selects default when clicked)

function selectPaymentCard() {
    $('.payment-card').removeClass('active');
    $(this).addClass('active');
    const cardType = $(this).data('card');
    showToast('Default payment: ' + cardType.toUpperCase(), false);
}

function setDefaultPayment() {
    if ($('.payment-card.active').length === 0) {
        $('.payment-card').first().addClass('active');
    }
    showToast('Default payment method updated', false);
}

function switchTab() {
    const tab = $(this).data('tab');
    $('.tab-btn').removeClass('active');
    $(this).addClass('active');
    if (tab === 'upcoming') {
        $('#upcomingTab').show();
        $('#pastTab').hide();
    } else {
        $('#upcomingTab').hide();
        $('#pastTab').show();
    }
}

// Notification Function

function toggleNotification() {
    const label = $(this).closest('.d-flex').find('span').first().text().trim();
    if ($(this).is(':checked')) {
        showToast(label + ' enabled', false);
    } else {
        showToast(label + ' disabled', false);
    }
}


// Navigates back to the homepage (index)
function goBack() {
    window.location.href = 'index.html';
}


// Validates form fields 
function validateFormField() {
    const id = $(this).attr('id');
    const val = $(this).val().trim();
    let isValid = true;
    
    if (id === 'newPassengerName') {
        return;
    }

    if (val === '') {
        isValid = false;
    }
    
    if (id === 'email' && val !== '' && !isValidEmail(val)) {
        isValid = false;
    }
    
    if (id === 'phone' && val !== '') {
        const phoneRegex = /^\+63\s?[0-9]{3}\s?[0-9]{3}\s?[0-9]{4}$/;
        if (!phoneRegex.test(val)) {
            isValid = false;
        }
    }
    
    if (!isValid && val !== '') {
        $(this).css('border-color', '#dc2626');
        if ($(this).next('.field-error').length === 0) {
            let errorMsg = 'Invalid format';
            if (id === 'email') {
                errorMsg = 'Please enter a valid email address';
            }
            if (id === 'phone') {
                errorMsg = 'Valid phone: +63 9XX XXX XXXX';
            }
            $(this).after('<span class="field-error text-danger small">' + errorMsg + '</span>');
        }
    } else if (val === '') {
        $(this).css('border-color', '#e2e8f0');
        $(this).next('.field-error').remove();
    } else {
        $(this).css('border-color', '#e2e8f0');
        $(this).next('.field-error').remove();
    }
}

// Sets up event handlers 

$(document).ready(function() {

    $('#uploadBtn').on('click', function() {
        $('#avatarUpload').click();
    });
    
    $('#avatarUpload').on('change', uploadAvatar);

    $('#savePersonalBtn').on('click', savePersonalInfo);
    
    $('#fullName, #email, #phone, #dob').on('blur', validateFormField);

    $(document).on('click', '.remove-passenger', removePassenger);
    
    $('#addPassengerBtn').on('click', addPassenger);

    $('#newPassengerName').on('keypress', function(e) {
        if (e.which === 13) {
            addPassenger();
        }
    });

    $('.payment-card').on('click', selectPaymentCard);
    
    $('#setDefaultBtn').on('click', setDefaultPayment);
    
    $('.payment-card').first().addClass('active');

    $('.tab-btn').on('click', switchTab);

    $('#promoNotif').on('change', toggleNotification);
    $('#flightAlerts').on('change', toggleNotification);
    $('#loyaltyNotif').on('change', toggleNotification);

    $('#goBackBtn').on('click', goBack);

});