const USER_COMMISSION_RATE = 0.02;     
const PROVIDER_COMMISSION_RATE = 0.03; 


function calculatePricing(serviceCharge,discount=0) {
  

  const platformFee = Math.round(serviceCharge * USER_COMMISSION_RATE);
  const providerCommission = Math.round(serviceCharge * PROVIDER_COMMISSION_RATE);

  const totalAmount = serviceCharge + platformFee - discount; 
  const providerPayout = serviceCharge - providerCommission; 

  return {
    serviceCharge,
    discount,
    platformFee,
    totalAmount,
    providerCommission,
    providerPayout,
  };
}

module.exports = { calculatePricing };