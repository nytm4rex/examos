// engines/shopEngine.js

/* =========================================
   CONSTANTS
========================================= */

export const SHOP_ITEMS = {
  STREAK_EXTENSION_12:
    "streak_extension_12",

  STREAK_EXTENSION_16:
    "streak_extension_16",

  STREAK_RECOVERY:
    "streak_recovery",
};

/* =========================================
   12 HOUR EXTENSION
========================================= */

export const get12HourExtensionCost =
  (balance) => {
    if (
      balance < 50000000
    ) {
      return 100000;
    }

    return Math.floor(
      balance * 0.075
    );
  };

/* =========================================
   16 HOUR EXTENSION
========================================= */

export const get16HourExtensionCost =
  (balance) => {
    if (
      balance < 50000000
    ) {
      return 200000;
    }

    return Math.floor(
      balance * 0.1
    );
  };

/* =========================================
   STREAK RECOVERY
========================================= */

export const getRecoveryCost =
  (balance) => {
    if (
      balance < 50000000
    ) {
      return 10000000;
    }

    return Math.floor(
      balance * 0.5
    );
  };

/* =========================================
   PURCHASE CHECK
========================================= */

export const canAfford =
  (
    balance,
    cost
  ) => {
    return balance >= cost;
  };

/* =========================================
   COOLDOWN
========================================= */

export const canBuyExtension =
  (
    lastPurchaseTime,
    now = Date.now()
  ) => {
    if (!lastPurchaseTime) {
      return true;
    }

    const hours =
      (now -
        lastPurchaseTime) /
      (1000 * 60 * 60);

    return hours >= 24;
  };

/* =========================================
   PURCHASE
========================================= */

export const purchaseItem =
  ({
    balance,
    cost,
  }) => {
    return {
      success:
        balance >= cost,

      newBalance:
        balance >= cost
          ? balance - cost
          : balance,
    };
  };

/* =========================================
   EXTENSION OBJECTS
========================================= */

export const create12HourExtension =
  () => {
    return {
      type: "12h",

      hours: 12,

      purchasedAt:
        Date.now(),
    };
  };

export const create16HourExtension =
  () => {
    return {
      type: "16h",

      hours: 16,

      purchasedAt:
        Date.now(),
    };
  };

/* =========================================
   RECOVERY OBJECT
========================================= */

export const createRecoveryPurchase =
  () => {
    return {
      type: "recovery",

      purchasedAt:
        Date.now(),
    };
  };