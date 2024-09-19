const backendDomain = "http://localhost:8080";

const SummaryApi = {
  signUp: {
    url: `${backendDomain}/api/signUp`,
    method: "post",
  },
  contactAll: {
    url: `${backendDomain}/api/get-contact`,
    method: "get",
  },
  donorAll: {
    url: `${backendDomain}/api/doner-get`,
    method: "get",
  },
  volunteersAll: {
    url: `${backendDomain}/api/get-Volunteers`,
    method: "get",
  },
  volunteersUpdate: {
    url: `${backendDomain}/api/update-volunteer/:id`,
    method: "put",
  },
  volunteersDelete: {
    url: `${backendDomain}/api/delete-volunteer/:id`,
    method: "delete",
  },
  imgURL:{
    url:`${backendDomain}`
  }
}

export default SummaryApi;