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
            ? `
                <button 
                    class="btn btn-primary w-100 fw-bold"
                    onclick="event.stopPropagation(); openRentalModal(${car.id})">
                    <i class="bi-key me-1"></i> Rent Now
                </button>
              `
            : `
                <button 
                    class="btn btn-secondary w-100"
                    disabled>
                    Not Available
                </button>
              `;

        container.innerHTML += `
            <div class="col-12 col-sm-6 col-lg-4">

                <div class="card car-card h-100 shadow-sm border-0"
                     onclick="showCarDetail(${car.id})"
                     style="cursor: pointer;">

                    <img src="${car.img}"
                         class="card-img-top"
                         alt="${car.name}">

                    <div class="card-body d-flex flex-column">

                        <div class="d-flex justify-content-between align-items-center mb-2">

                            <h6 class="card-title fw-bold mb-0">
                                ${car.name}
                            </h6>

                            ${badge}

                        </div>

                        <p class="text-muted small mb-2">
                            Type: ${car.type}
                        </p>

                        <p class="fw-bold text-primary fs-5 mt-auto mb-3">
                            $${car.price}
                            <span class="fs-6 text-muted fw-normal">
                                /day
                            </span>
                        </p>

                        ${btn}

                    </div>
                </div>

            </div>
        `;
    });
}


// Search Car
function filterCars() {
    const text = document.getElementById('searchInput').value;
    renderCars(text);
}

// Show Car Detail
function showCarDetail(carId) {

    // Find car
    const car = cars.find(c => c.id === carId);

    if (!car) {
        return;
    }


    // Car Name
    document.getElementById('detailCarName').textContent =
        car.name;

    document.getElementById('detailCarTitle').textContent =
        car.name;


    // Image
    document.getElementById('detailCarImage').src =
        car.img;


    // Information
    document.getElementById('detailCarBrand').textContent =
        car.brand || 'Toyota';

    document.getElementById('detailCarType').textContent =
        car.type;

    document.getElementById('detailCarYear').textContent =
        car.year || '2010';

    document.getElementById('detailCarSeats').textContent =
        car.seats || '5';

    document.getElementById('detailCarTransmission').textContent =
        car.transmission || 'Automatic';

    document.getElementById('detailCarFuel').textContent =
        car.fuel || 'Hybrid';


    // Price
    document.getElementById('detailCarPrice').textContent =
        car.price;


    // Description
    document.getElementById('detailCarDescription').textContent =
        car.description ||
        'Comfortable and reliable car for your trip.';


    // Rent Now button
    document.getElementById('detailRentBtn').onclick = function () {

        // Close Detail
        const detailModal =
            bootstrap.Modal.getInstance(
                document.getElementById('carDetailModal')
            );

        if (detailModal) {
            detailModal.hide();
        }

        // Open Rental
        openRentalModal(car.id);
    };


    // Open Detail Modal
    const modal =
        new bootstrap.Modal(
            document.getElementById('carDetailModal')
        );

    modal.show();
}