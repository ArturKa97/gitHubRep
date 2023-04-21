import HTTP from "./";

const login = (loginData) => HTTP.post("/user/login", loginData)
    .then(({ data }) => data)

export { login }