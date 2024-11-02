// Automatically set current date and time
window.onload = function() {
    const now = new Date();
    
    // Format date as YYYY-MM-DD
    const formattedDate = now.toISOString().split('T')[0];
    document.getElementById("date").value = formattedDate;

    // Format time as HH:MM
    const formattedTime = now.toTimeString().split(' ')[0].substring(0, 5);
    document.getElementById("time").value = formattedTime;
};

document.getElementById("printButton").addEventListener("click", function () {
    // Get the form data
    const slNo = document.getElementById("slNo").value || ''; // Fallback to empty string
    const date = document.getElementById("date").value || ''; // Fallback to empty string
    const time = document.getElementById("time").value || ''; // Fallback to empty string
    const vehicleNo = document.getElementById("vehicleNo").value || ''; // Fallback to empty string
    const material = document.getElementById("material").value || ''; // Fallback to empty string
    const party = document.getElementById("party").value || ''; // Fallback to empty string
    const charges = document.getElementById("charges").value || ''; // Fallback to empty string
    const firstWt = document.getElementById("firstWt").value || ''; // Fallback to empty string
    const secondWt = document.getElementById("secondWt").value || ''; // Fallback to empty string

    // Calculate Nett Weight
    const nettWt = secondWt - firstWt || ''; // Calculate or fallback to empty string
    document.getElementById("nettWt").value = nettWt;

    // Format the date to DD/MM/YYYY for display
    const formattedDate = new Date(date).toLocaleDateString('en-GB'); // UK format

    // Prepare bill content using your specified format
    const billContent = `
        <div class="bill-copy">
            <p><span>  <span>${slNo}</p>
            <p><span>  <span>${formattedDate}</p>
            <p><span>  <span>${time}</p>
            <p><span>  <span>${vehicleNo}</p>
            <p><span>  <span>${material}</p>
            <p><span>  <span>${party}</p>
            <p><span>  <span>${charges}</p>
            <p><span>  <span>${firstWt}</p>
            <p><span>  <span>${secondWt}</p>
            <p><span>  <span> ${nettWt}</p>
        </div>
        <div class="bill-copy">
            <p>${slNo}</p>
            <p>${formattedDate}</p>
            <p>${time}</p>
            <p>${vehicleNo}</p>
            <p>${material}</p>
            <p>${party}</p>
            <p>${charges}</p>
            <p>${firstWt}</p>
            <p>${secondWt}</p>
            <p>${nettWt}</p>
        </div>
        <div class="bill-copy">
            <p>${slNo}</p>
            <p>${formattedDate}</p>
            <p>${time}</p>
            <p>${vehicleNo}</p>
            <p>${material}</p>
            <p>${party}</p>
            <p>${charges}</p>
            <p>${firstWt}</p>
            <p>${secondWt}</p>
            <p>${nettWt}</p>
        </div>
    `;

    // Create a print layout for the bill copies
    const printContents = `
        <div style="display: flex; gap: 20px; padding: 20px;">
            ${billContent}
        </div>
    `;

    // Print the bill copies
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload(); // Reload page to reset form
});
// Add event listeners for the print button
document.getElementById("printButton").addEventListener("click", function () {
    alert("Print button clicked!"); // Test if the click works
    printBill(); // Call the print function
});

// Also handle touch events for mobile devices
document.getElementById("printButton").addEventListener("touchstart", function () {
    alert("Print button clicked!"); // Test if the touch works
    printBill(); // Call the print function
});
