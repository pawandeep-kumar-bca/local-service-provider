import api from "./api";

const cleanFilters = (filters = {}) => {
  return Object.fromEntries(
    Object.entries(filters).filter(([, value]) => {
      if (value === "" || value === null || value === undefined) {
        return false;
      }

      if (Array.isArray(value) && value.length === 0) {
        return false;
      }

      return true;
    }),
  );
};

export const getAllProviders = async (params = {}) => {
  const response = await api.get("/providers", {
    params,
  });

  return response.data;
};

export const getProviderById = async (providerId) => {
  const response = await api.get(`/providers/${providerId}`);

  return response.data;
};

export const createProvider = async (formData) => {
  const response = await api.post("/providers", formData);

  return response.data;
};

export const getSelectProviderByCategory = async (slug) => {
  const response = await api.get(`/providers/category/${slug}`);

  return response.data;
};

export const getRecommendedProviders = async (filters = {}) => {
  const params = cleanFilters(filters);

  const response = await api.get("/providers/recommended", {
    params,
  });

  return response.data;
};

export const getNearbyProviders = async (filters = {}) => {
  const params = cleanFilters(filters);

  const response = await api.get("/providers/nearby", {
    params,
  });

  return response.data;
};

export const getProviderDashboardOverview = async () => {
  const response = await api.get("/providers/dashboard/overview");
  return response.data;
};

export const getProviderTodayBookings = async () => {
  const response = await api.get("/providers/dashboard/today-bookings");
  return response.data;
};

export const getProviderBookingAnalytics = async (params = {}) => {
  const response = await api.get("/providers/dashboard/booking-analytics", {
    params,
  });
  return response.data;
};

export const getProviderScheduleSummary = async () => {
  const response = await api.get("/providers/schedule/summary");

  return response.data;
};

export const getProviderScheduleBooking = async (params ={})=>{
  const response = await api.get('/providers/schedule',{params})
  return response.data
}

export const getProviderTodayUpcomingBooking =async ()=>{
  const response = await api.get('/providers/schedule/upcoming-bookings')
  return response.data
}

export const setProviderAvailability = async ({time})=>{
  const response = await api.patch('/providers/schedule/availability',time)
  return response.data
}

export const getProviderSlots = async ()=>{
  const response = await api.get('/providers/schedule/slots')
  return response.data
}

export const getProviderEarningSummary = async ()=>{
  const response = await api.get('/providers/earnings/summary')
  return response.data
}

export const getProviderEarningOverview = async (params = {})=>{
  const response = await api.get('/providers/earnings/overview',{params})

  return response.data
}

export const getProviderTransitions = async(params={})=>{
  const response  = await api.get('/providers/earnings/transactions',{params})

  return response.data
}

export const getProviderPaymentMethod = async ()=>{
  const response = await api.get('/providers/earnings/payment-methods')
  return response.data
}

export const getProviderNextPayout = async ()=>{
  const response = await api.get('/providers/earnings/next-payout')
  return response.data
}

export const addProviderBankAccountDetails = async (bankDetails)=>{
  const response = await api.post('/providers/bank-account',bankDetails)

  return response.data
}

// hold api
export const getProviderWithdrawalsHistory = async ()=>{
  const response = await api.get('/providers/earnings/withdraw')
  return response.data
}

export const createWithdrawalAmount = async(amount)=>{
  const response = await api.post("/providers/earnings/withdraw",amount)
  return response.data
}