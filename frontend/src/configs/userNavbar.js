export const navbarConfig = [
  {
    matcher: (pathname) => pathname.startsWith("/user/dashboard"),

    title: "Dashboard",

    left: [
      {
        component: "title",
      },
    ],

    center: [
      {
        component: "search",
        placeholder: "Search services or providers...",
      },
    ],

    right: [
      {
        component: "location",
      },
      {
        component: "notification",
      },
      {
        component: "profile",
      },
      {
        component: "menu",
      },
    ],
  },

  {
    matcher: (pathname) =>
      pathname.startsWith("/user/our-services") ||
      pathname.includes("/select-provider"),

    title: "Our Services",

    left: [
      {
        component: "back",
      },
      {
        component: "title",
      },
    ],

    center: [
      {
        component: "search",
        placeholder: "Search providers...",
      },
    ],

    right: [
      {
        component: "filter",
      },
      {
        component: "sort",
      },
      {
        component: "profile",
      },
    ],
  },

  {
    matcher: (pathname) => pathname.includes("/booking-details"),

    title: "Booking Details",

    left: [
      {
        component: "back",
      },
      {
        component: "title",
      },
    ],

    center: [
      {
        component: "stepper",
        totalSteps: 3,
        currentStep: 1,
      },
    ],

    right: [
      {
        component: "help",
      },
      {
        component: "profile",
      },
    ],
  },
];