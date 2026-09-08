    function openRentalModal(carId) {
      if (!currentUser) {
        const authModal = new bootstrap.Modal(
          document.getElementById('authModal')
        );
        authModal.show();
        return;
      }
      const car = cars.find(c => c.id === carId);
      if (car) {
        document.getElementById('modalCarId').value = car.id;
        document.getElementById('modalCarName').innerText = car.name;
        document.getElementById('modalCarRate').innerText = `Daily Rate: $${car.price}`;
        document.getElementById('rentalDays').value = 1;
        calculateTotal();
        const rentalModal = new bootstrap.Modal(
          document.getElementById('rentalModal')
        );

        rentalModal.show();
      }
    }

    function calculateTotal() {
      const carId = parseInt(document.getElementById('modalCarId').value);
      const days = parseInt(document.getElementById('rentalDays').value) || 1;
      const car = cars.find(c => c.id === carId);

      if (car) {
        const total = car.price * days;
        document.getElementById('modalTotalCost').innerText = `$${total}`;
      }
    }

    // Process Rental
    document.getElementById('checkoutForm').addEventListener('submit', function (e) {
      e.preventDefault();

      const carId = parseInt(document.getElementById('modalCarId').value);
      const days = parseInt(document.getElementById('rentalDays').value);
      const paymentMethod = document.getElementById('paymentMethod').value;
      const car = cars.find(c => c.id === carId);

      if (car && car.available) {
        car.available = false;
        const totalCost = car.price * days;

        rentals.push({
          id: Date.now(),
          carId: car.id,
          carName: car.name,
          renterName: currentUser.name,
          renterEmail: currentUser.email,
          renterPhone: currentUser.phone || 'N/A',
          days: days,
          totalPrice: totalCost,
          paymentMethod: paymentMethod,
          status: "Active"
        });

        refreshAllViews();

        const modal = bootstrap.Modal.getInstance(document.getElementById('rentalModal'));
        modal.hide();

        alert(`Payment Successful! You rented ${car.name} for ${days} day(s). Total: $${totalCost} via ${paymentMethod}.`);
        showSection('customer-dashboard');
      }
    });

    // Return Car Function
    function returnCar(rentalId) {
      const rentalIndex = rentals.findIndex(r => r.id === rentalId);
      if (rentalIndex !== -1) {
        const rental = rentals[rentalIndex];

        const car = cars.find(c => c.id === rental.carId);
        if (car) car.available = true;

        rentals.splice(rentalIndex, 1);
        refreshAllViews();

        alert(`Vehicle "${rental.carName}" successfully returned!`);
      }
    }

    // Render Customer Rented Table
    function renderCustomerRentals() {
      const tbody = document.getElementById('rented-table-body');
      tbody.innerHTML = '';

      if (!currentUser) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center text-muted p-3">Please login to view your rentals.</td></tr>`;
        return;
      }

      const userRentals = rentals.filter(r => r.renterEmail === currentUser.email);

      if (userRentals.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center text-muted p-3">No active rentals found.</td></tr>`;
        return;
      }

      userRentals.forEach((r) => {
        tbody.innerHTML += `
          <tr>
            <td class="fw-bold">${r.carName}</td>
            <td>${r.days} Days</td>
            <td class="text-success fw-bold">$${r.totalPrice}</td>
            <td>${r.renterName}</td>
            <td><span class="badge bg-warning text-dark">${r.status}</span></td>
            <td>
              <button class="btn btn-sm btn-outline-danger" onclick="returnCar(${r.id})">
                <i class="bi-arrow-return-left"></i> Return Car
              </button>
            </td>
          </tr>
        `;
      });
    }