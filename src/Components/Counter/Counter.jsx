import "./Counter.css";
import React, { useEffect } from "react";
import { loading } from "../../Assets";
import { getCount, setLoadingTrue } from "../../Redux/action";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const Counter = () => {
  const { count, loadings } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    getCountFun();
  }, []);

  const getCountFun = () => {
    dispatch(setLoadingTrue());
    axios
      .get(
        "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/nitesh.json"
      )
      .then(({ data }) => {
        dispatch(getCount(data === null ? 1 : data));
      });
  };

  const updateCountFun = (action) => {
    dispatch(setLoadingTrue());
    if (count < 1000 || action === "minus") {
      axios
        .put(
          "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json",
          { nitesh: action === "plus" ? count + 1 : count - 1 }
        )
        .then(() => {
          getCountFun();
        });
    } else {
      alert("MAX Limit Reached");
      getCountFun();
    }
  };

  return (
    <div className="mainBox">
      {loadings ? (
        <div className="header">
          <div className="loading">
            <img src={loading} alt="" />
          </div>
          <div className="loadingText">Saving counter value</div>
        </div>
      ) : (
        <></>
      )}
      <div className="buttonBox">
        <div
          onClick={() => {
            updateCountFun("minus");
          }}
        >
          -
        </div>
        <div>{count}</div>
        <div
          onClick={() => {
            updateCountFun("plus");
          }}
        >
          +
        </div>
      </div>
      <div className="counterValue">Counter value : {count}</div>
    </div>
  );
};

export default Counter;
