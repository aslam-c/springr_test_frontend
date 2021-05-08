import axios from "axios";

const API_HOOK = "http://localhost:8000/api/";

const instance = axios.create({
  baseURL: API_HOOK,
});

instance.interceptors.request.use(
  (requestConfig) => {
    return requestConfig;
  },
  (requestError) => {
    return Promise.reject(requestError);
  }
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    let errorText = "Please check your Network Connection";
    let validation_errors = "";
    let http_status = 404;
    let errors = { errorText, validation_errors, http_status };
    try {
      if (error.response) {
        http_status = error.response.status;
        switch (http_status) {
          case 422:
            errorText = error.response.data.response;
            errors = {
              errorText: errorText,
              http_status: http_status,
            };
            break;
          case 499: //empty results
            errorText = error.response.data.response;
            errors = {
              errorText: errorText,
              http_status: http_status,
            };
            break;
          case 403:
            errorText = error.response.data.response;
            errors = {
              errorText: errorText,
              http_status: http_status,
            };
            break;
          case 500:
            errorText = error.response.data.response;
            errors = {
              errorText: errorText,
              http_status: http_status,
            };
            break;
          default:
        }
      }
      return Promise.reject(errors);
    } catch (e) {
      errors = { errorText: errorText };
      return Promise.reject(errors);
    }
  }
);

export default instance;
