let lastRequestTime = 0;
const REQUEST_DELAY = 2000; // 2 seconds

export const checkRateLimit = () => {
  const now = Date.now();
  if (now - lastRequestTime < REQUEST_DELAY) {
    throw new Error("Please wait a moment before asking another question");
  }
  lastRequestTime = now;
};