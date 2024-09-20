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

  getUserRecordDetails:{
    url:`${backendDomain}/api/get-userRecord`,
    method: "get",
  },
  postUserRecordDetails:{
    url:`${backendDomain}/api/post-userRecord`,
    method: "post",
  },
}

export default SummaryApi;