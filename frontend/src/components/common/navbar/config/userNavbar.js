// ===============================
//This is called Configuration Driven UI
// ===============================

// ===============================
// Base Navbar Layouts
// ===============================

// ===============================
// This is called Shared Base Configuration

//const dashboardNavbar = {}

//const bookingNavbar = {}

//const detailsNavbar = {}
/*{
   ...bookingNavbar
}*/
// ===============================

const dashboardNavbar = {
  left: [{ component: "title" }],

  center: [
    {
      component: "search",
      placeholder: "Search services or providers...",
    },
  ],

  right: [
    { component: "location" },
    { component: "notification" },
    { component: "profile" },
    { component: "menu" },
  ],
};

const serviceNavbar = {
  left: [{ component: "back" }, { component: "title" }],

  center: [
    {
      component: "search",
      placeholder: "Search providers...",
    },
  ],

  right: [
    { component: "filter" },
    { component: "sort" },
    { component: "profile" },
  ],
};

const detailsNavbar = {
  left: [{ component: "back" }, { component: "title" }],

  center: [],

  right: [{ component: "profile" }],
};

const bookingNavbar = {
  left: [{ component: "back" }, { component: "title" }],

  center: [
    {
      component: "stepper",
      totalSteps: 3,
      currentStep: 1,
    },
  ],

  right: [{ component: "help" }, { component: "profile" }],
};

// ===============================
// Navbar Config
// ===============================

export const navbarConfig = [
  // Dashboard
  {
    ...dashboardNavbar,

    matcher: (path) => path.startsWith("/user/dashboard"),

    // title: "Dashboard",
  },

  // Our Services
  {
    ...serviceNavbar,

    matcher: (path) => path.startsWith("/user/our-services"),

    title: "Our Services",

    center: [
      {
        component: "search",
        placeholder: "Search services...",
      },
    ],
  },

  // Select Provider
  {
    ...serviceNavbar,

    matcher: (path) => path.includes("/select-provider"),

    title: "Select Provider",
  },

  // Provider Details
  {
    ...detailsNavbar,

    matcher: (path) => path.includes("/provider-details"),

    title: "Provider Details",
  },

  // Booking Details
  {
    ...bookingNavbar,

    matcher: (path) =>
      path.includes("/provider-details") &&
      path.includes("/booking-details") &&
      !path.includes("/payment"),

    title: "Booking Details",

    center: [
      {
        component: "stepper",
        totalSteps: 3,
        currentStep: 1,
      },
    ],
  },

  // Payment
  {
    ...bookingNavbar,

    matcher: (path) =>
      path.endsWith("/payment") && !path.includes("success-payment"),

    title: "Payment",

    center: [
      {
        component: "stepper",
        totalSteps: 3,
        currentStep: 2,
      },
    ],
  },

  // Payment Success
  {
    ...bookingNavbar,

    matcher: (path) => path.includes("/success-payment"),

    title: "Payment Success",

    center: [
      {
        component: "stepper",
        totalSteps: 3,
        currentStep: 3,
      },
    ],
  },

  // My Bookings
  {
    ...detailsNavbar,

    matcher: (path) =>
      path === "/user/my-bookings" || path.startsWith("/user/my-bookings/"),

    title: "My Bookings",
  },

  // View Booking
  {
    ...detailsNavbar,

    matcher: (path) =>
      path.includes("/my-bookings/") && path.includes("/booking-details"),

    title: "Booking Details",
  },

  // Reschedule Booking
  {
    ...detailsNavbar,

    matcher: (path) => path.includes("/reschedule-booking"),

    title: "Reschedule Booking",
  },

  // Payment History
  {
    ...detailsNavbar,

    matcher: (path) => path.startsWith("/user/payment-history"),

    title: "Payment History",
  },

  // Payment Details
  {
    ...detailsNavbar,

    matcher: (path) => path.includes("/payment-info"),

    title: "Payment Details",
  },

  // Reviews
  {
    ...detailsNavbar,

    matcher: (path) => path.startsWith("/user/reviews"),

    title: "Reviews",
  },

  // Support
  {
    ...detailsNavbar,

    matcher: (path) => path.startsWith("/user/support"),

    title: "Support",
  },

  // Profile Settings
  {
    ...detailsNavbar,

    matcher: (path) => path.startsWith("/user/profile-settings"),

    title: "Profile Settings",
  },

  // Change Password
  {
    ...detailsNavbar,

    matcher: (path) => path.includes("/change-password"),

    title: "Change Password",
  },

  // Become Provider
  {
    ...detailsNavbar,

    matcher: (path) => path.startsWith("/user/become-provider"),

    title: "Become Provider",
  },

  // Basic Info
  {
    ...detailsNavbar,

    matcher: (path) => path.includes("/basic-info"),

    title: "Basic Information",
  },

  // Upload Documents
  {
    ...detailsNavbar,

    matcher: (path) => path.includes("/upload-documents"),

    title: "Upload Documents",
  },

  // Review
  {
    ...detailsNavbar,

    matcher: (path) =>
      path.startsWith("/user/become-provider") && path.endsWith("/review"),

    title: "Review",
  },

  // Submit
  {
    ...detailsNavbar,

    matcher: (path) => path.includes("/submit"),

    title: "Submit",
  },
];
