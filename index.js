// Function to generate WhatsApp link
function generateWhatsAppLink() {
  // Prevent the form from submitting
  event.preventDefault();

  // Check if the link already exists in local storage
  if (localStorage.getItem("whatsappLink")) {
    alert("Link already generated. You cannot generate another one.");
    return;
  }

  // Get the username and phone number values
  const username = document.getElementById("username").value;
  const phoneNumber = document.getElementById("number").value;

  // Validate input fields
  if (!username || !phoneNumber) {
    alert("Please enter both username and phone number.");
    return;
  }

  // Confirm with the user before proceeding
  const isConfirmed = confirm(
    "Are you sure the information is correct? You can only generate the link once."
  );
  if (!isConfirmed) return;

  // Define the message and WhatsApp link
  const message = `Hi, I joined your referral contest through contestant ${username}, ${phoneNumber}, I will save your contact and send a screenshot shortly.`;
  const yourWhatsAppNumber = "+2349065427752"; // Replace with your WhatsApp number
  const whatsappLink = `https://wa.me/${yourWhatsAppNumber}?text=${encodeURIComponent(
    message
  )}`;

  // Set the WhatsApp link in the readonly input field and save to local storage
  const linkInput = document.getElementById("link");
  linkInput.value = whatsappLink;

  // Save the user data and link to local storage
  localStorage.setItem("username", username);
  localStorage.setItem("phoneNumber", phoneNumber);
  localStorage.setItem("whatsappLink", whatsappLink);
}

// Function to copy the link
function copyLink() {
  const linkInput = document.getElementById("link");

  // Check if there's a link to copy
  if (!linkInput.value) {
    alert("Nothing to copy");
    return;
  }

  // Select and copy the link text
  linkInput.select();
  linkInput.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand("copy");

  // Show an alert message
  alert("Link copied to clipboard");
}

// Function to load user data from local storage on page load
function loadUserDataFromLocalStorage() {
  const storedLink = localStorage.getItem("whatsappLink");

  // If a link is already stored, load it into the readonly input
  if (storedLink) {
    document.getElementById("username").value =
      localStorage.getItem("username") || "";
    document.getElementById("number").value =
      localStorage.getItem("phoneNumber") || "";
    document.getElementById("link").value = storedLink;
  }
}

// Call the function to load data when the page loads
window.onload = loadUserDataFromLocalStorage;
