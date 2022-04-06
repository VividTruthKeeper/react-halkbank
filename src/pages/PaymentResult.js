// IMPORT MODULES
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// IMPORT COMPONENTS
import Loader from "../components/global/Loader";

const PaymentResult = () => {
  const [loader, setLoader] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("userToken");
  const params = new URLSearchParams(window.location.search);
  const status = params.get("status");
  const paymentId = params.get("paymentId");
  const orderId = params.get("orderId");

  useEffect(() => {
    if (paymentStatus === "success") {
      setTimeout(() => {
        navigate("/success");
      }, 1000);
    } else if (paymentStatus === "failed") {
      setTimeout(() => {
        navigate("/error");
      }, 1000);
    }
  }, [paymentStatus]);
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setLoader(true);
      axios
        .get(
          `https://shahsyotag.halkbank.gov.tm/app/api/check-payment?token=${token}&status=${status}&paymentId=${paymentId}&orderId=${orderId}`
        )
        .then((res) => {
          if (res.data) {
            setPaymentStatus(res.data.status);
            setTimeout(() => {
              setLoader(false);
            }, 1000);
          }
        })
        .catch(() => {
          setPaymentStatus("failed");
        });
    }
    return () => {
      isMounted = false;
    };
  });

  return <section className="payment">{loader ? <Loader /> : ""}</section>;
};

export default PaymentResult;
