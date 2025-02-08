/*
  EVENT DELEGATION
  
  Teknik di mana event listener dipasang pada elemen parent,
  sehingga bisa menangani banyak child element secara efisien.
*/

// Contoh: Menangani klik pada daftar item secara dinamis
const listContainer = document.getElementById("list");

// Event listener ditempatkan pada parent (listContainer), bukan setiap LI
listContainer.addEventListener("click", (event) => {
    // Memeriksa apakah elemen yang diklik adalah LI
    if (event.target.tagName === "LI") {
        console.log("Item diklik:", event.target.textContent);
    }
});

// Menambahkan item baru secara dinamis
document.getElementById("addItem").addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = "Item Baru";
    listContainer.appendChild(newItem);
    
    // Karena event delegation, item baru langsung bisa dikenali tanpa perlu event listener tambahan
});
