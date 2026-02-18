import gsap from "gsap";
import emailjs from "@emailjs/browser";


const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

emailjs.init({ publicKey: PUBLIC_KEY }); 

export function initContactForm(gridEl) {
    const root = gridEl.querySelector("[data-contact-root]");
    if (!root) return;

    const form = root.querySelector("[data-contact-form]");
    if (!form) return;

    const btnSend = gridEl.querySelector("[data-contact-send]");
    const btnReset = gridEl.querySelector("[data-contact-reset]");
    if (!btnSend || !btnReset) return;

    const errorBox = form.querySelector("[data-contact-errors]");
    const statusBox = form.querySelector("[data-contact-status]");

    const fields = {
        firstName: form.querySelector('[name="firstName"]'),
        lastName: form.querySelector('[name="lastName"]'),
        email: form.querySelector('[name="email"]'),
        phone: form.querySelector('[name="phone"]'),
        message: form.querySelector('[name="message"]'),
  };

  const showBox = (el, html) => {
    if (!el) return;
    el.innerHTML = html;
    el.classList.remove("is-hidden");
    gsap.fromTo(el, { 
        autoAlpha: 0, 
        y: -10 
    }, 
    { autoAlpha: 1, 
        y: 0, 
        duration: 0.25,
        ease: "power2.out" 
    });
  }

  const hideBox = (el) => {
    if (!el) return;
    el.classList.add("is-hidden");
    el.innerHTML = "";
  }

  const clearInvalidUI = () => {
    form.querySelectorAll(".contact-field.is-invalid").forEach((w) => w.classList.remove("is-invalid"));
  };

    const markInvalid = (inputEl) => {
        const wrapper = inputEl?.closest(".contact-field");
        if (wrapper) wrapper.classList.add("is-invalid");
    };

  const isEmailValid = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const trim = (v) => String(v ?? "").trim();

  function validate() {
    clearInvalidUI();
    hideBox(statusBox);
    hideBox(errorBox);

    const errs = [];
    
    const firstName = trim(fields.firstName?.value);
    const lastName = trim(fields.lastName?.value);
    const email = trim(fields.email?.value);
    const phone = trim(fields.phone?.value);
    const message = trim(fields.message?.value);

    if (!firstName) {
        errs.push("Vorname ist erforderlich.");
        markInvalid(fields.firstName);
    }

    if (!lastName) {
        errs.push("Nachname ist erforderlich.");

        markInvalid(fields.lastName);
    }

    if (!email) {
      errs.push("Email ist erforderlich.");
      markInvalid(fields.email);
    } 
    else if (!isEmailValid(email)) {
      errs.push("Email Format sieht falsch aus.");
      markInvalid(fields.email);
    }

    if (!message) {
        errs.push("Nachricht ist erforderlich.");
        markInvalid(fields.message);
    }
    if (message && message.length < 10) { 
        errs.push("Nachricht ist zu kurz (mindestens 10 Zeichen)."); 
        markInvalid(fields.message); 
    }

    if (errs.length) {
      const html = `<strong>Verbesser diese: </strong><ul>${errs.map(e => `<li>${e}</li>`).join("")}</ul>`;
      showBox(errorBox, html);
      return { ok: false };
    }

    return {
      ok: true,
      values: { firstName, lastName, email, phone, message }
    };

  }

    btnReset.addEventListener("click", () => {
        form.reset();
        clearInvalidUI();
        hideBox(errorBox);
        hideBox(statusBox);
    });


    btnSend.addEventListener("click", async () => {
    const result = validate();
    if (!result.ok) return;

    if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
        showBox(errorBox, "Der E-Mail-Dienst ist nicht konfiguriert. Bitte versuchen Sie es später noch einmal.");
        return;
    }
    btnSend.disabled = true;

    try {
        await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form);

        showBox(statusBox, "Nachricht erfolgreich gesendet. Ich melde mich bald bei Ihnen.");
        hideBox(errorBox);
        form.reset();
    } catch (error) {
        console.error("EmailJS error:", error);
        showBox(errorBox, "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später noch einmal.");
    }
    finally {
        btnSend.disabled = false;
    }
  });
}