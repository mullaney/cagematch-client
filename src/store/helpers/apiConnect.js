export const environment = () => {
  if (!window) return "TEST";
  if (window.location.href.includes("localhost")) {
    return "DEVELOPMENT";
  }
  return "PRODUCTION";
};

export const apiBaseUrl = () => {
  if (environment() === "DEVELOPMENT") {
    return "http://localhost:3000";
  } else {
    return "https://cagematch-api.herokuapp.com";
  }
};
