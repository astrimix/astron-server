import getCurrentUser from "./getCurrentUser.js";

export default (req) => {
  if (req.params.id === "@me") return getCurrentUser(req.headers.authorization);
  else return req.params.id;
};
