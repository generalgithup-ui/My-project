// admin data base
let users = [
    { name: "System Admin", phone: "012000000", email: "visal22@gmail.com", password: "Sal22", role: "Admin" },
    { name: "System Admin", phone: "0976370492", email: "cheatjoker177@gmail.com", password: "chhay1", role: "Admin" },
];

let currentUser = null;

// 21 Initial Cars Data
let cars = [
    { id: 1, name: "Toyota Prius 2010", type: "Sedan", price: 30, available: true, img: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=600&q=80"},
    { id: 2, name: "Lexus RX 350", type: "SUV", price: 85, available: true, img: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80" },
    { id: 3, name: "Ford Ranger Wildtrak", type: "Pickup", price: 70, available: true, img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80" },
    { id: 4, name: "Mercedes-Benz C-Class", type: "Luxury", price: 120, available: true, img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80" },
    { id: 5, name: "BMW X5", type: "SUV", price: 110, available: true, img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80" },
    { id: 6, name: "Audi A6", type: "Sedan", price: 95, available: true, img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=600&q=80" },
    { id: 7, name: "Toyota Highlander", type: "SUV", price: 75, available: true, img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80" },
    { id: 8, name: "Hyundai Tucson", type: "SUV", price: 50, available: true, img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=600&q=80" },
    { id: 9, name: "Honda Civic", type: "Sedan", price: 40, available: true, img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=600&q=80" },
    { id: 10, name: "Mazda CX-5", type: "SUV", price: 55, available: true, img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80" },
    { id: 11, name: "Toyota Land Cruiser", type: "SUV", price: 150, available: true, img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=600&q=80" },
    { id: 12, name: "Kia Carnival", type: "SUV", price: 80, available: true, img: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80" },
    { id: 13, name: "Chevrolet Colorado", type: "Pickup", price: 60, available: true, img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80" },
    { id: 14, name: "Porsche Cayenne", type: "Luxury", price: 200, available: true, img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80" },
    { id: 15, name: "Nissan GT-R", type: "Luxury", price: 250, available: true, img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80" },
    { id: 16, name: "Toyota Camry", type: "Sedan", price: 45, available: true, img: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=600&q=80" },
    { id: 17, name: "Lexus LX 570", type: "Luxury", price: 220, available: true, img: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80" },
    { id: 18, name: "Ford Mustang", type: "Luxury", price: 130, available: true, img: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=600&q=80" },
    { id: 19, name: "Mitsubishi Triton", type: "Pickup", price: 55, available: true, img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80" },
    { id: 20, name: "Hyundai Elantra", type: "Sedan", price: 35, available: true, img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=600&q=80" },
    { id: 21, name: "Hyundai Elantra", type: "Sedan", price: 35, available: true, img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=600&q=80" },
];

let rentals = [];

document.addEventListener("DOMContentLoaded", () => {
    refreshAllViews();
});