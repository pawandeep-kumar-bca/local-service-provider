// Loads the Razorpay checkout.js script once and reuses it on future calls
let razorpayScriptPromise = null;

export const loadRazorpayScript = () => {
  if (window.Razorpay) {
    return Promise.resolve(true);
  }

  if (razorpayScriptPromise) {
    return razorpayScriptPromise;
  }

  razorpayScriptPromise = new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    script.onload = () => resolve(true);
    script.onerror = () => {
      razorpayScriptPromise = null; // allow retry on next call
      resolve(false);
    };

    document.body.appendChild(script);
  });

  return razorpayScriptPromise;
};