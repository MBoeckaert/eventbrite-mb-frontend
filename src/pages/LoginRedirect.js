import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useStore } from "../store";
import { useMutation } from "react-query";
import { backendUrl } from "../lib/functions";

//add a profilelink
const linkUserToProfile = async (data) => {
  return await fetch(`${backendUrl}/api/profiles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify(data),
  }).then((r) => r.json());
};

const checkProfileData = async (dataUser) => {
  const qs = require("qs");
  const profileQuery = qs.stringify({
    filters: {
      username: {
        $eq: dataUser.username,
      },
    },
  });

  const response = await fetch(`${backendUrl}/api/profiles?${profileQuery}`);
  const res = await response.json();
  console.log(res);
  //if not found (length = 0), add the user to profile
  if (res.data.length === 0) {
    const data = {
      username: dataUser.username,
      user_id: dataUser.id.toString(),
      events: dataUser.events,
    };
    return data;
  } else {
    return false;
  }
};

const LoginRedirect = (props) => {
  const setLoggedIn = useStore((state) => state.setLoggedIn);
  const [text, setText] = useState("Loading...");
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  const profileMutation = useMutation(linkUserToProfile, {
    onSuccess: (data) => {
      setTimeout(() => navigate("/signUp"), 1000);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  useEffect(() => {
    // Successfully logged with the provider
    // Now logging with strapi by using the access_token (given by the provider) in props.location.search
    fetch(
      `${backendUrl}/api/auth/${params.providerName}/callback${location.search}`
    )
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(`Couldn't login to Strapi. Status: ${res.status}`);
        }
        return res;
      })
      .then((res) => res.json())
      .then((res) => {
        // Successfully logged with Strapi
        // Now saving the jwt to use it for future authenticated requests to Strapi
        setLoggedIn(res.jwt, res.user.username);
        setText(
          "You have been successfully logged in. You will be redirected in a few seconds..."
        );
        return checkProfileData(res.user);
      })
      .then((data) => {
        if (data) {
          profileMutation.mutate({ data });
        } else {
          navigate("/signUp");
        }
      })
      .catch((err) => {
        console.log(err);
        setText("An error occurred, please see the developer console.");
      });
  }, [
    navigate,
    location.search,
    params.providerName,
    setLoggedIn,
    profileMutation,
  ]);

  return <p>{text}</p>;
};

export default LoginRedirect;
