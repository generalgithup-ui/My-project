// =========================
// NAVIGATION
// =========================

function showSection(sectionId) {

    document
        .getElementById('customer-browse')
        .classList.add('d-none');

    document
        .getElementById('customer-dashboard')
        .classList.add('d-none');

    document
        .getElementById('admin-dashboard')
        .classList.add('d-none');

    document
        .getElementById(sectionId)
        .classList.remove('d-none');
}


// =========================
// REFRESH ALL VIEWS
// =========================

function refreshAllViews() {

    renderCars();
    renderCustomerRentals();
    renderAdminTable();
    updateStats();
}


// =========================
// START APP
// =========================

refreshAllViews();
updateUserUI();