let currentEditId = null;

// Toast notification
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

function addPassenger() {
    const name = $('#newPassengerName').val().trim();
    const type = $('#passengerType').val();
    if (name === '') {
        showToast('Please enter passenger name', true);
        return;
    }
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

function removePassenger() {
    const name = $(this).closest('.passenger-item').find('.passenger-info span').first().text();
    $(this).closest('.passenger-item').remove();
    showToast(name + ' removed', false);
}

function savePersonalInfo() {
    const fullName = $('#fullName').val().trim();
    const email = $('#email').val().trim();
    if (fullName === '' || email === '') {
        showToast('Full name and email are required!', true);
    } else {
        showToast('Personal information saved!', false);
    }
}

function uploadAvatar(e) {
    const file = e.target.files[0];
    if (file) {
        if (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg') {
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

function toggleNotification() {
    const label = $(this).closest('.d-flex').find('span').first().text().trim();
    if ($(this).is(':checked')) {
        showToast(label + ' enabled', false);
    } else {
        showToast(label + ' disabled', false);
    }
}

function goBack() {
    showToast('Returning to dashboard...', false);
    $('html, body').animate({ scrollTop: 0 }, 300);
}

function validateFormField() {
    const id = $(this).attr('id');
    if ($(this).val().trim() === '' && id !== 'newPassengerName') {
        $(this).css('border-color', '#ef4444');
    } else {
        $(this).css('border-color', '#e2e8f0');
    }
}

$(document).ready(function() {

    // Avatar Upload
    $('#uploadBtn').on('click', function() {
        $('#avatarUpload').click();
    });

    $('#avatarUpload').on('change', uploadAvatar);

    // Save Personal Info
    $('#savePersonalBtn').on('click', savePersonalInfo);

    // Remove Passenger
    $(document).on('click', '.remove-passenger', removePassenger);

    // Add Passenger
    $('#addPassengerBtn').on('click', addPassenger);

    // Payment Methods
    $('.payment-card').on('click', selectPaymentCard);
    $('#setDefaultBtn').on('click', setDefaultPayment);
    $('.payment-card').first().addClass('active');

    // Travel History Tabs
    $('.tab-btn').on('click', switchTab);

    // Notification Toggles
    $('#promoNotif').on('change', toggleNotification);
    $('#flightAlerts').on('change', toggleNotification);
    $('#loyaltyNotif').on('change', toggleNotification);

    // Go Back Button
    $('#goBackBtn').on('click', goBack);

    // Form validation
    $('.form-control').on('blur', validateFormField);

});