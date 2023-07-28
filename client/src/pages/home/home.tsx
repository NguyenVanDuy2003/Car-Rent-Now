/* eslint-disable react-hooks/rules-of-hooks */
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../../components/common/header/header";
import Footer from "../../components/footer/footer";
import DashBoard from "../../components/home/dashboard";
import { carsUser, dataUser } from "../../api/api";

function Home() {
  if (!localStorage.getItem("accessToken")) {
    return <Navigate to="/login" />;
  }
  // const accessToken = localStorage.getItem("accessToken");

  const [user, setUser] = useState<any>();
  const [cars, setCars] = useState<any>();

  useEffect(() => {
    carsUser(`${localStorage.getItem("uid")}`).then((e) => setCars(e));
    dataUser(`${localStorage.getItem("uid")}`).then((e) => setUser(e));
  }, []);

  // console.log(data);

  return (
    <>
      <Header user={user} />
      <DashBoard dataCars={cars} />
      <Footer />
    </>
  );
}
export default Home;
