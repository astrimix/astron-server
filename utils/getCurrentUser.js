import JwtDecode from "jwt-decode";

export default (token) => {
  const bareToken = token.split(" ")[1];
  return JwtDecode(bareToken).id;
};
