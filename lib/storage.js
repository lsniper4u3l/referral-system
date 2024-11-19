let storage = {
  referrals: {},
  referredBy: {}
};

export function saveReferral(userId, referrerId) {
  if (!storage.referrals[referrerId]) {
    storage.referrals[referrerId] = [];
  }
  storage.referrals[referrerId].push(userId);
  storage.referredBy[userId] = referrerId;
}

export function getReferrals(userId) {
  return storage.referrals[userId] || [];
}

export function getReferrer(userId) {
  return storage.referredBy[userId] || null;
}
