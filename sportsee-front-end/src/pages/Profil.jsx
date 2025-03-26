import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getUserInfos } from "../utils/api";
import Header from "../components/Header";
import Aside from "../components/SideBar";

const Profil = () => {
  const [data, setData] = useState([]);
  const userId = useParams();

  useEffect(() => {
    const data = async () => {
      const request = await getUserInfos(userId.id);
      if (!request) return alert("data error");
      setData(request.data.userInfos);
    };
    data();
  }, [userId]);

  console.log(data);

  // if (data.length === 0) return null;

  return (
    <div className="container">
      <Header />
      <main className="main">
        <Aside />
      </main>
    </div>
  );
};

export default Profil;
