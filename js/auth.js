// Login Form Action
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        currentUser = user;
        updateUserUI();

        const modal = bootstrap.Modal.getInstance(document.getElementById('authModal'));
        modal.hide();
        this.reset();
    } else {
        alert("Invalid Email or Password! Please try again.");
    }
});

// Customer Registration Action
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('regName').value;
    const phone = document.getElementById('regPhone').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        alert("This Email is already registered!");
        return;
    }

    const newUser = { name: name, phone: phone, email: email, password: password, role: 'Customer' };
    users.push(newUser);
    currentUser = newUser;

    updateUserUI();
    alert(`Account created successfully! Welcome ${name}.`);

    const modal = bootstrap.Modal.getInstance(document.getElementById('authModal'));
    modal.hide();
    this.reset();
});

// Logout Function
function logout() {
    currentUser = null;
    updateUserUI();
    showSection('customer-browse');
}

// UI State Update
function updateUserUI() {
    const userDisplay = document.getElementById('user-display');
    const authBtn = document.getElementById('auth-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const adminNav = document.getElementById('nav-admin');

    if (currentUser) {
        userDisplay.innerHTML = `<i class="bi-person-circle text-warning"></i> ${currentUser.name} (${currentUser.role})`;
        authBtn.classList.add('d-none');
        logoutBtn.classList.remove('d-none');

        if (currentUser.role === 'Admin') {
            adminNav.classList.remove('d-none');
            showSection('admin-dashboard');
        } else {
            adminNav.classList.add('d-none');
        }
    } else {
        userDisplay.innerHTML = `<i class="bi-person-circle"></i> Guest`;
        authBtn.classList.remove('d-none');
        logoutBtn.classList.add('d-none');
        adminNav.classList.add('d-none');
    }
}