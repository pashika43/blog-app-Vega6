document.getElementById("signupForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  const res = await fetch("/api/users/signup", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  if (res.ok) {
    alert("Signup successful. Redirecting to login...");

    
    window.location.href = "login.html";
  } else {

    alert(data.msg || "Signup failed");
  }
});


 