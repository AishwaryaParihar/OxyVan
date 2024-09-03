const backendDomain = "http://localhost:8080";

const SummaryApi = {
  signUp: {
    url: `${backendDomain}/api/signUp`,
    method: "post",
  },
  contactAll: {
    url: `${backendDomain}/api/get-contact`,
    method: "get",
  }
}

export default SummaryApi;