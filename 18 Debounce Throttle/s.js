/*
  Debouncing dan Throttling adalah teknik optimasi event handling.
  
  - Debouncing: Menunda eksekusi fungsi sampai beberapa waktu setelah event terakhir terjadi.
  - Throttling: Memastikan fungsi hanya berjalan sekali dalam interval waktu tertentu.
*/

// DEBOUNCING FUNCTION
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

// THROTTLING FUNCTION
function throttle(func, interval) {
    let lastTime = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastTime >= interval) {
            func.apply(this, args);
            lastTime = now;
        }
    };
}

// Contoh penggunaan DEBOUNCING di input search
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", debounce((event) => {
    console.log("Fetching data for:", event.target.value);
}, 500)); // Menunggu 500ms setelah user berhenti mengetik

// Contoh penggunaan THROTTLING di scroll event
window.addEventListener("scroll", throttle(() => {
    console.log("User scrolling...");
}, 1000)); // Menjalankan fungsi maksimal sekali per detik
