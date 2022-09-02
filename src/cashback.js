const cashback = {
  regular: {
    bound: 1000,
    percent: 0.01,
  },
  silver: {
    bound: 10000,
    percent: 0.02,
  },
  gold: {
    bound: 100000,
    percent: 0.05,
  },
};

export default function calculateCashback(amount) {
  if (amount >= cashback.gold.bound) {
    return Math.ceil(amount * cashback.gold.percent);
  }
  if (amount >= cashback.silver.bound) {
    return Math.ceil(amount * cashback.silver.percent);
  }
  if (amount >= cashback.regular.bound) {
    return Math.ceil(amount * cashback.regular.percent);
  }
  return 0;
}
