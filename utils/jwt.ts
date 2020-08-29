import { makeJwt, Jose, Payload, setExpiration, validateJwt  } from "../deps.ts";

const header: Jose = {
  alg: "HS256",
  typ: "JWT",
};

const getAuthToken = (user: any) => {
  const payload: Payload = {
    iss: "deno-api",
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
    exp: setExpiration(new Date().getTime() + parseInt("10")),
  };

  return makeJwt({ header, payload, key: "SECRETKEY" });
};

const getRefreshToken = (user: any) => {
  const payload: Payload = {
    iss: "deno-api",
    id: user.id,
    exp: setExpiration(new Date().getTime() + parseInt("10")),
  };

  return makeJwt({ header, payload, key: "SECRETKEY" });
};

const getJwtPayload = async (token: string): Promise<any | null> => {
  try {
    const jwtObject = await validateJwt(token, "SECRETKEY");
    if (jwtObject && jwtObject.jwt) { 
      return jwtObject.jwt;
    }
  } catch {}
  return null;
};

export { getAuthToken, getRefreshToken, getJwtPayload };
