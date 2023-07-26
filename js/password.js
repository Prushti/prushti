const passwordBtn = document.querySelector("button#passwordBtn");
const inputEl = document.querySelector("input#password");

async function digestMessage(message) {
  const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8); // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join(""); // convert bytes to hex string
  return hashHex;
  // ... (same as before)
}

passwordBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const text = inputEl.value;
  console.log(text);

  digestMessage(text).then((digestHex) => {
    const correctPasswordHash = "489f719cadf919094ddb38e7654de153ac33c02febb5de91e5345cbe372cf4a0"; // Hash for "Happy"
      console.log("489f719cadf919094ddb38e7654de153ac33c02febb5de91e5345cbe372cf4a0");
      console.log(digestHex);

    if (digestHex === correctPasswordHash) {
      console.log("Awsome!");
      // Add the code here to redirect the user to the particular case study page.
      window.location.href = "http://prushti.com/tenable.html";
    } else {
      console.log("Incorrect password. Please try again.");
    }
  });
});
