import React, { useState, useEffect } from "react";

const FetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/leodev8821")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div><h1>Loading...</h1></div>;
  }

  return (
    <div>
      <p>ID: {data.id}</p>
      <p>Avatar: {data.avatar_url}</p>
      <img src={data.avatar_url} alt="profile"/>
    </div>
  );
};

export default FetchData;