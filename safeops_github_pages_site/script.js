// Mobile nav toggle
const toggle = document.querySelector(".navToggle");
const nav = document.querySelector(".nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));

    if (expanded) {
      nav.style.display = "none";
    } else {
      nav.style.display = "flex";
      nav.style.flexDirection = "column";
      nav.style.position = "absolute";
      nav.style.top = "68px";
      nav.style.right = "18px";
      nav.style.background = "rgba(11,16,32,.92)";
      nav.style.border = "1px solid rgba(255,255,255,.12)";
      nav.style.borderRadius = "14px";
      nav.style.padding = "12px";
      nav.style.gap = "10px";
      nav.style.width = "220px";
      nav.style.zIndex = "999";
    }
  });
}

// Footer year
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();

// Demo form handler (no backend)
function handleForm(event) {
  event.preventDefault();
  const fd = new FormData(event.target);
  alert(
    `Thanks, ${fd.get("name")} — your message is captured locally.\n\n` +
    `Next step: connect this form to Google Forms, HubSpot, or a serverless endpoint.`
  );
  event.target.reset();
  return false;
}
window.handleForm = handleForm;
