import { navigate } from "gatsby";

export const isBrowser = () => typeof window !== "undefined"


export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}

const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

export const handleLogin = ( username, password ) => {
    var check = false
    console.log(username)
    console.log(password)
    if (username === 'john' && password === 'pass') {
      setUser({
        username: 'john',
        name: 'Johnny',
        email: 'johnny@example.org',
        admin: 'true'
      });
      check = true
    }
  
    return check;
  };


export const isLoggedIn = () => {
  const user = getUser()

  return !!user.username
}

export const logout = callback => {
  setUser({})
  navigate(`/app`);
}