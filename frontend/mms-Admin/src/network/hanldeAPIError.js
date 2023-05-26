const handleApiError = (errorData) => {
  let message = "";
  if (errorData && errorData.data) {
    message = errorData.data.message ? errorData.data.message : "ERROR";
  } else {
    message = "ERROR";
  }
  return message;
};

export { handleApiError };
