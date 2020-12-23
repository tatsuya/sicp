const firstDenomination = (kindsOfCoins: number): number => {
  switch (kindsOfCoins) {
    case 1:
      return 1;
    case 2:
      return 5;
    case 3:
      return 10;
    case 4:
      return 25;
    case 5:
      return 50;
    default:
      throw new Error('Unknown kinds of coins');
  }
};

// Count change
const cc = (amount: number, kindsOfCoins: number): number => {
  if (amount === 0) {
    return 1;
  }
  if (amount < 0 || kindsOfCoins === 0) {
    return 0;
  }
  return cc(amount, kindsOfCoins - 1) + cc(amount - firstDenomination(kindsOfCoins), kindsOfCoins);
};

export { cc as default };
