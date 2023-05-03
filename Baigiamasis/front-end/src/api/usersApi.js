import HTTP from "./";

const login = (loginData) => HTTP.post("/user/login", loginData)
    .then(({ data }) => data)

const createUser = (user) => HTTP.post("/user", user)

export { login, createUser }