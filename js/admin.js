// Render Admin Fleet & Active Customer Rentals
function renderAdminTable() {
    // Fleet Inventory Table
    const tbody = document.getElementById('admin-table-body');
    tbody.innerHTML = '';

    cars.forEach(car => {
        const statusBadge = car.available
            ? `<span class="badge bg-success">Available</span>`
            : `<span class="badge bg-danger">Rented</span>`;

        tbody.innerHTML += `
          <tr>
            <td>${car.id}</td>
            <td class="fw-bold">${car.name}</td>
            <td>${car.type}</td>
            <td>$${car.price}</td>
            <td>${statusBadge}</td>
            <td>
              <button class="btn btn-sm btn-danger" onclick="deleteCar(${car.id})">
                <i class="bi-trash"></i>
              </button>
            </td>
          </tr>
        `;
    });

    // Customer Rentals Overview for Admin
    const rentalsTbody = document.getElementById('admin-rentals-table-body');
    rentalsTbody.innerHTML = '';

    if (rentals.length === 0) {
        rentalsTbody.innerHTML = `<tr><td colspan="6" class="text-center text-muted p-3">No active customer rentals.</td></tr>`;
        return;
    }

    rentals.forEach(r => {
        rentalsTbody.innerHTML += `
          <tr>
            <td class="fw-bold">${r.renterName}</td>
            <td><a href="mailto:${r.renterEmail}">${r.renterEmail}</a></td>
            <td>${r.renterPhone}</td>
            <td class="fw-bold text-primary">${r.carName}</td>
            <td>${r.days} Days ($${r.totalPrice})</td>
            <td>
              <button class="btn btn-sm btn-danger" onclick="returnCar(${r.id})">
                Force Return
              </button>
            </td>
          </tr>
        `;
    });
}

function deleteCar(carId) {
    if (confirm('Are you sure you want to delete this vehicle?')) {
        cars = cars.filter(c => c.id !== carId);
        refreshAllViews();
    }
}

// Add Car Action
document.getElementById('addCarForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const newCar = {
        id: cars.length ? Math.max(...cars.map(c => c.id)) + 1 : 1,
        name: document.getElementById('carName').value,
        type: document.getElementById('carType').value,
        price: parseFloat(document.getElementById('carPrice').value),
        available: true,
        img: document.getElementById('carImage').value || 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80'
    };

    cars.push(newCar);
    refreshAllViews();

    this.reset();
    const modal = bootstrap.Modal.getInstance(document.getElementById('addCarModal'));
    modal.hide();
});

// Update Stats
function updateStats() {
    const total = cars.length;
    const rented = cars.filter(c => !c.available).length;
    const available = total - rented;

    document.getElementById('stat-total-cars').innerText = total;
    document.getElementById('stat-rented-cars').innerText = rented;
    document.getElementById('stat-available-cars').innerText = available;
}