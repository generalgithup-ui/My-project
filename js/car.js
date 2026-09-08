// Render Car Cards
function renderCars(filterText = '') {
    const container = document.getElementById('car-list-container');
    container.innerHTML = '';

    const filtered = cars.filter(car =>
        car.name.toLowerCase().includes(filterText.toLowerCase()) ||
        car.type.toLowerCase().includes(filterText.toLowerCase())
    );

    filtered.forEach(car => {
        const badge = car.available
            ? `<span class="badge bg-success">Available</span>`
            : `<span class="badge bg-danger">Rented</span>`;

        const btn = car.available
            ? `<button class="btn btn-primary w-100 fw-bold" onclick="openRentalModal(${car.id})"><i class="bi-key me-1"></i> Rent Now</button>`
            : `<button class="btn btn-secondary w-100" disabled>Not Available</button>`;

        container.innerHTML += `
          <div class="col-12 col-sm-6 col-lg-4">
            <div class="card car-card h-100 shadow-sm border-0">
              <img src="${car.img}" class="card-img-top" alt="${car.name}">
              <div class="card-body d-flex flex-column">
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <h6 class="card-title fw-bold mb-0">${car.name}</h6>
                  ${badge}
                </div>
                <p class="text-muted small mb-2">Type: ${car.type}</p>
                <p class="fw-bold text-primary fs-5 mt-auto mb-3">$${car.price} <span class="fs-6 text-muted fw-normal">/day</span></p>
                ${btn}
              </div>
            </div>
          </div>
        `;
    });
}

function filterCars() {
    const text = document.getElementById('searchInput').value;
    renderCars(text);
}
