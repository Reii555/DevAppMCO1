/*** References
 * https://www.w3schools.com/js/js_events.asp
 * https://www.w3schools.com/js/js_htmldom.asp
 * https://www.w3schools.com/js/js_validation.asp
 * https://www.w3schools.com/Jquery/jquery_syntax.asp
 * https://www.w3schools.com/js/js_jquery_elements.asp
 * https://www.w3schools.com/jquery/jquery_css.asp
 */

// Dummy Data
const reservationsData = [
    { id: 'R001', 
      ref: 'WWW-1M2N', 
      passenger: 'Reina Lagos', 
      route: 'DFW → SEA', 
      seat: '7E', 
      status: 'Confirmed', 
      price: 'Php 6,999.00', 
      date: '2026-03-15', 
      meal: 'Standard', 
      extraPackage: 'Priority (+ Php 1,500.00)', 
      flightNo: 'AS123', 
      email: 'reina.lagos@email.com', 
      phone: '+63 912 345 6789', 
      passport: 'P12345678', 
      nationality: 'Filipino', 
      dob: '1992-03-15', 
      gender: 'Female', 
      emergencyName: 'James Lagos', 
      emergencyRelation: 'Spouse', 
      
      emergencyPhone: '+63 917 123 4567', 
      emergencyEmail: 'james@email.com' 
    },
    { id: 'R002', 
      ref: 'WWW-1M3N', 
      passenger: 'Nigella Rodriguez', 
      route: 'DFW → SEA', seat: '7E', 
      status: 'Cancelled', 
      price: 'Php 7,500.00', 
      date: '2026-03-16', 
      meal: 'Vegetarian', 
      extraPackage: 'None', 
      flightNo: 'AS124', 
      email: 'nigella@email.com', 
      phone: '+63 919 888 7777', 
      passport: 'P23456789', 
      nationality: 'Filipino', 
      dob: '1988-07-22', 
      gender: 'Female', 
      emergencyName: 'Marco Rodriguez', 
      emergencyRelation: 'Brother', 
      emergencyPhone: '+63 926 666 7777', 
      emergencyEmail: 'marco@email.com' 
    },
    { id: 'R003', 
      ref: 'WWW-1M4N', 
      passenger: 'Jiana Cubangbang', 
      route: 'DFW → SEA', seat: '7E', 
      status: 'Confirmed', 
      price: 'Php 7,500.00', 
      date: '2026-03-17', 
      meal: 'Halal', 
      extraPackage: 'Priority (+ Php 1,500.00)', 
      flightNo: 'AS125', email: 'jiana@email.com', 
      phone: '+63 945 012 3456', 
      passport: 'P34567890', 
      nationality: 'Filipino', 
      dob: '1995-11-08', 
      gender: 'Female', 
      emergencyName: 'Ramon Cubangbang', 
      emergencyRelation: 'Father', 
      emergencyPhone: '+63 947 234 5678', 
      emergencyEmail: 'ramon@email.com' 
    },
    { id: 'R004', 
      ref: 'WWW-1M5N', 
      passenger: 'Maria Santos', 
      route: 'MNL → CEB', 
      seat: '3A', 
      status: 'Pending', 
      price: 'Php 4,200.00', 
      date: '2026-03-20', 
      meal: 'Vegan', 
      extraPackage: 'None', 
      flightNo: 'AS126', 
      email: 'maria@email.com', 
      phone: '+63 979 890 1234', 
      passport: 'P45678901', 
      nationality: 'Filipino', 
      dob: '1990-05-12', 
      gender: 'Female', 
      emergencyName: 'Jose Santos', 
      emergencyRelation: 'Spouse', 
      emergencyPhone: '+63 983 123 4567', 
      emergencyEmail: 'jose@email.com' 
    },
    { id: 'R005', 
      ref: 'WWW-1M6N', 
      passenger: 'Jose Garcia', 
      route: 'SFO → NRT', 
      seat: '12F', status: 'Confirmed', 
      price: 'Php 32,500.00', 
      date: '2026-04-05', 
      meal: 'Kosher', 
      extraPackage: 'Priority (+ Php 1,500.00)', 
      flightNo: 'AS127', 
      email: 'jose@email.com', 
      phone: '+63 975 456 7890', 
      passport: 'P56789012', 
      nationality: 'American', 
      dob: '1985-09-25', 
      gender: 'Male', 
      emergencyName: 'Anna Garcia', 
      emergencyRelation: 'Spouse', 
      emergencyPhone: '+63 920 111 2222', 
      emergencyEmail: 'anna@email.com' 
    },
    { id: 'R006', 
      ref: 'WWW-1M7N', 
      passenger: 'Antonio Reyes', route: 'CEB → MNL', seat: '4B', 
      status: 'Confirmed', price: 'Php 3,200.00', date: '2026-04-10', meal: 'Vegetarian', 
      extraPackage: 'None', 
      flightNo: 'AS128', 
      email: 'antonio.reyes@gmail.com', 
      phone: '+63 998 877 6655', 
      passport: 'P67890123', 
      nationality: 'Filipino', 
      dob: '1987-12-03', 
      gender: 'Male', 
      emergencyName: 'Luz Reyes', 
      emergencyRelation: 'Spouse', 
      emergencyPhone: '+63 999 555 4321', 
      emergencyEmail: 'luz.reyes@gmail.com' 
    },
    { id: 'R007', 
      ref: 'WWW-1M8N', 
      passenger: 'Cynthia Lim', 
      route: 'MNL → DVO', 
      seat: '9C', 
      status: 'Pending', 
      price: 'Php 5,800.00', 
      date: '2026-04-15', 
      meal: 'Halal', 
      extraPackage: 'Priority (+ Php 1,500.00)', 
      flightNo: 'AS129', 
      email: 'cynthia.lim@yahoo.com', 
      phone: '+63 917 888 7654', 
      passport: 'P78901234', 
      nationality: 'Filipino', 
      dob: '1993-06-18', 
      gender: 'Female', 
      emergencyName: 'David Lim', 
      emergencyRelation: 'Brother', 
      emergencyPhone: '+63 918 777 6543', 
      emergencyEmail: 'david.lim@yahoo.com' 
    },
    { id: 'R008', 
      ref: 'WWW-1M9N', 
      passenger: 'Roberto Mendoza', 
      route: 'MNL → ILO', 
      seat: '2A', 
      status: 'Cancelled', 
      price: 'Php 2,500.00', 
      date: '2026-04-20', 
      meal: 'Gluten-Free', 
      extraPackage: 'None', 
      flightNo: 'AS130', 
      email: 'roberto.mendoza@outlook.com', 
      phone: '+63 995 666 5432', 
      passport: 'P89012345', 
      nationality: 'Filipino', 
      dob: '1982-09-27', 
      gender: 'Male', 
      emergencyName: 'Teresa Mendoza', 
      emergencyRelation: 'Spouse', 
      emergencyPhone: '+63 996 555 4321', 
      emergencyEmail: 'teresa.mendoza@outlook.com' 
    }
];

let currentPage = 1, currentCancelId = null, currentEditId = null;
const rowsPerPage = 3;
let filteredReservations = [...reservationsData];

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
    }, 2500);
}

function formatDate(dateStr) {
    const parts = dateStr.split('-');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[parseInt(parts[1]) - 1] + ' ' + parseInt(parts[2]) + ', ' + parts[0];
}

function findReservation(id) {
    for (let i = 0; i < reservationsData.length; i++) {
        if (reservationsData[i].id === id) return reservationsData[i];
    }
    return null;
}

// Validations Functions
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
    return /^\+63\s?[0-9]{3}\s?[0-9]{3}\s?[0-9]{4}$/.test(phone);
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

function clearFieldError(id) {
    $('#' + id).css('border-color', '#e2e8f0');
    $('#' + id).next('.field-error').remove();
}

function validateForm() {
    let valid = true;
    const fields = [
        ['editFullName', 'Full name is required'],
        ['editEmail', 'Valid email is required'],
        ['editPhone', 'Valid phone (+63 9XX XXX XXXX) required'],
        ['editPassport', 'Passport number is required'],
        ['editNationality', 'Nationality is required'],
        ['editDob', 'Date of birth is required'],
        ['editEmergencyName', 'Emergency contact name required'],
        ['editEmergencyRelation', 'Relationship is required'],
        ['editEmergencyPhone', 'Valid emergency phone required'],
        ['editEmergencyEmail', 'Valid emergency email required']
    ];
    
    for (let i = 0; i < fields.length; i++) {
        const id = fields[i][0];
        const msg = fields[i][1];
        let isValid = true;
        const val = $('#' + id).val().trim();
        
        if (val === '') {
            isValid = false;
        } else if (id === 'editEmail' && !isValidEmail(val)) {
            isValid = false;
        } else if ((id === 'editPhone' || id === 'editEmergencyPhone') && !isValidPhone(val)) {
            isValid = false;
        }
        
        if (!isValid) {
            $('#' + id).css('border-color', '#dc2626');
            if ($('#' + id).next('.field-error').length === 0) {
                $('#' + id).after('<span class="field-error text-danger small">' + msg + '</span>');
            }
            valid = false;
        } else {
            clearFieldError(id);
        }
    }
    
    if (!$('input[name="editGender"]:checked').val()) {
        valid = false;
        showToast('Please select a gender', true);
    }
    
    return valid;
}

// Filter and Rendering
function applyFilters() {
    const search = $("#searchInput").val().toLowerCase().trim();
    const status = $("#filterStatus").val();
    const sort = $("#sortBy").val();
    currentPage = 1;
    
    filteredReservations = reservationsData.filter(function(f) {
        let matchesSearch = f.passenger.toLowerCase().includes(search) || f.ref.toLowerCase().includes(search);
        let matchesStatus = status === "all" || f.status === status;
        return matchesSearch && matchesStatus;
    });
    
    if (sort === "name") {
        filteredReservations.sort(function(a, b) {
            return a.passenger.localeCompare(b.passenger);
        });
    } else if (sort === "date") {
        filteredReservations.sort(function(a, b) {
            return new Date(b.date) - new Date(a.date);
        });
    }
    
    currentCancelId = null;
    currentEditId = null;
    renderReservations(filteredReservations);
}

function renderReservations(data) {
    const start = (currentPage - 1) * rowsPerPage;
    const paginated = data.slice(start, start + rowsPerPage);
    let html = "";
    
    if (!paginated.length) {
        html = '<div class="text-center py-4 text-muted">No reservations found</div>';
    } else {
        for (let r of paginated) {
            let badge = 'status-confirmed';
            if (r.status === 'Cancelled') {
                badge = 'status-cancelled';
            } else if (r.status === 'Pending') {
                badge = 'status-pending';
            }
            html += `<div class="reservation-item" data-id="${r.id}">
                <div class="res-summary">
                    <div><span class="res-ref">${r.ref}</span> <span class="res-passenger">— ${r.passenger}</span></div>
                    <div class="res-route"><i class="fas fa-plane"></i> ${r.route} | Seat ${r.seat}</div>
                    <div><span class="res-status ${badge}">${r.status}</span></div>
                    <div class="res-price">${r.price} <i class="fas fa-chevron-down res-expand-icon"></i></div>
                </div>
                <div class="res-detail">
                    <div class="detail-row">
                        <div><span class="label">Flight Date:</span> <span class="value">${formatDate(r.date)}</span></div>
                        <div><span class="label">Meal:</span> <span class="value">${r.meal}</span></div>
                    </div>
                    <div class="detail-row">
                        <div><span class="label">Extra Package:</span> <span class="value">${r.extraPackage || 'None'}</span></div>
                        <div><span class="label">Flight #:</span> <span class="value">${r.flightNo}</span></div>
                    </div>
                    <div class="detail-actions">
                        <button class="btn-action btn-view view-details" data-id="${r.id}"><i class="fas fa-eye me-1"></i>View Details</button>
                        <button class="btn-action btn-edit edit-reservation" data-id="${r.id}"><i class="fas fa-edit me-1"></i>Edit</button>
                        <button class="btn-action btn-cancel cancel-reservation" data-id="${r.id}" data-ref="${r.ref}" data-passenger="${r.passenger}"><i class="fas fa-times-circle me-1"></i>Cancel</button>
                    </div>
                </div>
            </div>`;
        }
    }
    
    $("#reservationsList").html(html);
    updatePagination(data.length);
    attachEvents();
}

function updatePagination(total) {
    const totalPages = Math.ceil(total / rowsPerPage) || 1;
    let html = '';
    for (let p = 1; p <= totalPages; p++) {
        let activeClass = '';
        if (p === currentPage) {
            activeClass = 'active-page';
        }
        html += `<button class="page-btn ${activeClass}" data-page="${p}">${p}</button>`;
    }
    $('#paginationControls').html(html);
}

// Event Attachments
function attachEvents() {
    $('.reservation-item').off('click').on('click', function(e) {
        if (!$(e.target).closest('.detail-actions').length) {
            $(this).toggleClass('expanded');
        }
    });
    $('.view-details').off('click').on('click', function(e) {
        e.stopPropagation();
        openDetailsModal($(this).data('id'));
    });
    $('.edit-reservation').off('click').on('click', function(e) {
        e.stopPropagation();
        openEditModal($(this).data('id'));
    });
    $('.cancel-reservation').off('click').on('click', function(e) {
        e.stopPropagation();
        currentCancelId = $(this).data('id');
        $('#modalBookingRef').text($(this).data('ref'));
        $('#modalBookingPassenger').text($(this).data('passenger'));
        $('#cancelModal').modal('show');
    });
    $('.page-btn').off('click').on('click', function() {
        currentPage = parseInt($(this).data('page'));
        renderReservations(filteredReservations);
    });
}

// Modal Functions
function openDetailsModal(id) {
    const b = findReservation(id);
    if (!b) return;
    let content = '';
    const fields = [
        ['Reference', b.ref], ['Passenger', b.passenger], ['Flight Route', b.route],
        ['Seat Number', b.seat], ['Flight #', b.flightNo], ['Date', formatDate(b.date)],
        ['Status', `<span class="res-status status-${b.status.toLowerCase()}">${b.status}</span>`],
        ['Meal', b.meal], ['Extra Package', b.extraPackage || 'None'],
        ['Total Price', `<strong>${b.price}</strong>`]
    ];
    for (let i = 0; i < fields.length; i++) {
        const f = fields[i];
        content += `<div class="modal-detail-row"><span class="label">${f[0]}</span><span class="value">${f[1]}</span></div>`;
    }
    content += `<input type="hidden" id="detailsBookingId" value="${b.id}">`;
    $('#detailsContent').html(content);
    $('#detailsModal').modal('show');
}

function openEditModal(id) {
    const b = findReservation(id);
    if (!b) return;
    currentEditId = id;
    
    const mealOptions = ['Standard', 'Vegetarian', 'Vegan', 'Halal', 'Kosher', 'Gluten-Free'];
    const mealDesc = {
        'Standard': 'Classic in-flight meal: Chicken or Pasta with Salad',
        'Vegetarian': 'Fresh all-fry vegetables with quinoa & green salad',
        'Vegan': 'Plant-based protein bowl, roasted veggies, dairy-free',
        'Halal': 'Certified Halal chicken with saffron rice',
        'Kosher': 'Glatt Kosher meal, pre-packaged under supervision',
        'Gluten-Free': 'Gluten-free pasta, fresh vegetables, GF dessert'
    };
    const mealPrices = {'Standard':0, 'Vegetarian':150, 'Vegan':200, 'Halal':150, 'Kosher':250, 'Gluten-Free':200};
    
    let mealHtml = '';
    for (let i = 0; i < mealOptions.length; i++) {
        const m = mealOptions[i];
        let selectedClass = '';
        let checkedAttr = '';
        if (m === b.meal) {
            selectedClass = 'selected';
            checkedAttr = 'checked';
        }
        mealHtml += `<label class="meal-option ${selectedClass}">
            <input type="radio" name="mealChoice" value="${m}" ${checkedAttr}>
            <div><div class="meal-name">${m} <span class="text-muted small">(+Php ${mealPrices[m]}.00)</span></div>
            <div class="meal-desc">${mealDesc[m]}</div></div>
        </label>`;
    }
    
    const base = 6999;
    let mealPrice = mealPrices[b.meal];
    if (mealPrice === undefined) {
        mealPrice = 0;
    }
    let extraPrice = 0;
    if (b.extraPackage && b.extraPackage !== 'None') {
        extraPrice = 1500;
    }
    const total = base + mealPrice + extraPrice;
    let extraRow = '';
    if (extraPrice > 0) {
        extraRow = `<div class="summary-row"><span>Extra Package</span><span>+ Php ${extraPrice}.00</span></div>`;
    }
    
    let checkedExtra = '';
    if (b.extraPackage && b.extraPackage !== 'None') {
        checkedExtra = 'checked';
    }
    
    let genderMaleChecked = '';
    let genderFemaleChecked = '';
    if (b.gender === 'Male') {
        genderMaleChecked = 'checked';
    } else if (b.gender === 'Female') {
        genderFemaleChecked = 'checked';
    }
    
    let content = `
        <div class="edit-form-section">
            <h6><i class="fas fa-user me-2"></i>Traveler Information</h6>
            <div class="row g-3">
                <div class="col-md-6"><label class="form-label">Full Name</label><input type="text" class="form-control" id="editFullName" value="${b.passenger}"></div>
                <div class="col-md-6"><label class="form-label">Email Address</label><input type="email" class="form-control" id="editEmail" value="${b.email}"></div>
                <div class="col-md-6"><label class="form-label">Contact Number</label><input type="text" class="form-control" id="editPhone" value="${b.phone}"></div>
                <div class="col-md-6"><label class="form-label">Passport Number</label><input type="text" class="form-control" id="editPassport" value="${b.passport}"></div>
                <div class="col-md-6"><label class="form-label">Nationality</label><input type="text" class="form-control" id="editNationality" value="${b.nationality}"></div>
                <div class="col-md-6"><label class="form-label">Date of Birth</label><input type="date" class="form-control" id="editDob" value="${b.dob}"></div>
                <div class="col-md-6">
                    <label class="form-label">Gender</label>
                    <div class="radio-group">
                        <label><input type="radio" name="editGender" value="Male" ${genderMaleChecked}> Male</label>
                        <label><input type="radio" name="editGender" value="Female" ${genderFemaleChecked}> Female</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="edit-form-section">
            <h6><i class="fas fa-phone-alt me-2"></i>Emergency Contact</h6>
            <div class="row g-3">
                <div class="col-md-6"><label class="form-label">Full Name</label><input type="text" class="form-control" id="editEmergencyName" value="${b.emergencyName}"></div>
                <div class="col-md-6"><label class="form-label">Relationship</label><input type="text" class="form-control" id="editEmergencyRelation" value="${b.emergencyRelation}"></div>
                <div class="col-md-6"><label class="form-label">Contact Number</label><input type="text" class="form-control" id="editEmergencyPhone" value="${b.emergencyPhone}"></div>
                <div class="col-md-6"><label class="form-label">Email Address</label><input type="email" class="form-control" id="editEmergencyEmail" value="${b.emergencyEmail}"></div>
            </div>
        </div>
        <div class="edit-form-section">
            <h6><i class="fas fa-utensils me-2"></i>Your Meal Preference</h6>
            <div class="meal-options">${mealHtml}</div>
        </div>
        <div class="edit-form-section">
            <h6><i class="fas fa-suitcase me-2"></i>Extra Package</h6>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="editExtraPackage" ${checkedExtra}>
                <label class="form-check-label" for="editExtraPackage">Priority Boarding + Extra Legroom <span class="text-muted">(+Php 1,500.00)</span></label>
            </div>
        </div>
        <div class="edit-form-section">
            <h6><i class="fas fa-receipt me-2"></i>Booking Summary</h6>
            <div class="summary-box">
                <div class="summary-row"><span>Flight #${b.flightNo} - Seat No. ${b.seat} - Economy</span><span>Php ${base.toLocaleString()}.00</span></div>
                <div class="summary-row"><span>Meal: ${b.meal}</span><span id="editMealPrice">+ Php ${mealPrice}.00</span></div>
                ${extraRow}
                <div class="summary-row"><span><strong>Total</strong></span><span><strong id="editTotalPrice">Php ${total.toLocaleString()}.00</strong></span></div>
            </div>
        </div>
    `;
    
    $('#editContent').html(content);
    $('#editModal').modal('show');
    
    $('.form-control').on('blur', function() {
        const id = $(this).attr('id');
        const val = $(this).val().trim();
        const emailFields = ['editEmail', 'editEmergencyEmail'];
        const phoneFields = ['editPhone', 'editEmergencyPhone'];
        let valid = true;
        if (val === '') {
            valid = false;
        } else if (emailFields.includes(id) && !isValidEmail(val)) {
            valid = false;
        } else if (phoneFields.includes(id) && !isValidPhone(val)) {
            valid = false;
        }
        if (valid) {
            $(this).css('border-color', '#e2e8f0');
        } else {
            $(this).css('border-color', '#dc2626');
        }
        if (!valid && val !== '') {
            if ($(this).next('.field-error').length === 0) {
                $(this).after('<span class="field-error text-danger small">Invalid format</span>');
            }
        } else {
            $(this).next('.field-error').remove();
        }
    });
    
    // Update summary on price change
    $('input[name="mealChoice"], #editExtraPackage').on('change', updateEditSummary);
    $('.meal-option').on('click', function() {
        $('.meal-option').removeClass('selected');
        $(this).addClass('selected').find('input[type="radio"]').prop('checked', true);
        updateEditSummary();
    });
}

function updateEditSummary() {
    const mealPrices = {'Standard':0, 'Vegetarian':150, 'Vegan':200, 'Halal':150, 'Kosher':250, 'Gluten-Free':200};
    let meal = $('input[name="mealChoice"]:checked').val();
    if (!meal) {
        meal = 'Standard';
    }
    const base = 6999;
    let mealPrice = mealPrices[meal];
    if (mealPrice === undefined) {
        mealPrice = 0;
    }
    let extraPrice = 0;
    if ($('#editExtraPackage').is(':checked')) {
        extraPrice = 1500;
    }
    const total = base + mealPrice + extraPrice;
    let extraRow = '';
    if (extraPrice > 0) {
        extraRow = `<div class="summary-row"><span>Extra Package</span><span>+ Php ${extraPrice}.00</span></div>`;
    }
    const html = `
        <div class="summary-row"><span>Flight # - Seat No. - Economy</span><span>Php ${base.toLocaleString()}.00</span></div>
        <div class="summary-row"><span>Meal: ${meal}</span><span>+ Php ${mealPrice}.00</span></div>
        ${extraRow}
        <div class="summary-row"><span><strong>Total</strong></span><span><strong>Php ${total.toLocaleString()}.00</strong></span></div>
    `;
    $('.summary-box').html(html);
}

// Saves or cancels the reservation data
function saveEdit() {
    if (!currentEditId) {
        showToast('No booking selected', true);
        return;
    }
    const b = findReservation(currentEditId);
    if (!b) {
        showToast('Booking not found', true);
        return;
    }
    
    if (!validateForm()) return;
    
    let meal = $('input[name="mealChoice"]:checked').val();
    if (!meal) {
        meal = 'Standard';
    }
    const extra = $('#editExtraPackage').is(':checked');
    const mealPrices = {'Standard':0, 'Vegetarian':150, 'Vegan':200, 'Halal':150, 'Kosher':250, 'Gluten-Free':200};
    
    b.passenger = $('#editFullName').val().trim();
    b.email = $('#editEmail').val().trim();
    b.phone = $('#editPhone').val().trim();
    b.passport = $('#editPassport').val().trim();
    b.nationality = $('#editNationality').val().trim();
    b.dob = $('#editDob').val();
    b.gender = $('input[name="editGender"]:checked').val();
    b.emergencyName = $('#editEmergencyName').val().trim();
    b.emergencyRelation = $('#editEmergencyRelation').val().trim();
    b.emergencyPhone = $('#editEmergencyPhone').val().trim();
    b.emergencyEmail = $('#editEmergencyEmail').val().trim();
    b.meal = meal;
    if (extra) {
        b.extraPackage = 'Priority (+ Php 1,500.00)';
    } else {
        b.extraPackage = 'None';
    }
    
    const base = 6999;
    let mealPrice = mealPrices[meal];
    if (mealPrice === undefined) {
        mealPrice = 0;
    }
    let extraPrice = 0;
    if (extra) {
        extraPrice = 1500;
    }
    const total = base + mealPrice + extraPrice;
    b.price = 'Php ' + total.toLocaleString() + '.00';
    
    $('#editModal').modal('hide');
    showToast('Booking ' + b.ref + ' updated successfully!', false);
    applyFilters();
    currentEditId = null;
}

function confirmCancel() {
    if (currentCancelId) {
        const b = findReservation(currentCancelId);
        if (b) {
            if (b.status !== 'Cancelled') {
                b.status = 'Cancelled';
                showToast('Reservation ' + b.ref + ' cancelled successfully', false);
            } else {
                showToast('This reservation is already cancelled', true);
            }
        }
        currentCancelId = null;
        $('#cancelModal').modal('hide');
        applyFilters();
    }
}

function editFromDetails() {
    const id = $('#detailsBookingId').val();
    if (id) {
        $('#detailsModal').modal('hide');
        setTimeout(function() {
            openEditModal(id);
        }, 300);
    } else {
        showToast('No booking selected', true);
    }
}

function goBack() {
    window.location.href = 'index.html';
}

// Event Handlers
$(document).ready(function() {
    applyFilters();
    $('#searchInput').on('input', function() {
        currentPage = 1;
        applyFilters();
    });
    $('#filterStatus').on('change', function() {
        currentPage = 1;
        applyFilters();
    });
    $('#sortBy').on('change', applyFilters);
    $('#saveEditBtn').on('click', saveEdit);
    $('#modalConfirmCancel').on('click', confirmCancel);
    $('#editFromModal').on('click', editFromDetails);
    $('#goBackBtn').on('click', goBack);
});