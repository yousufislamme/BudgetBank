"use client";
import Header from "@/components/Header";
import TransitionDecs from "@/components/Transition/TransitionDecs";
import { useEffect, useState } from "react";

const Print = () => {
  const [printTransition, setPrintTransition] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/history")
      .then((res) => res.json())
      .then((data) => {
        setPrintTransition(data);
        console.log(data);
      });
  }, []);

  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/history/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Update the state to remove the deleted item
        setPrintTransition((prev) => prev.filter((item) => item._id !== _id));
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
    console.log("delete id:::", _id);
  };

  return (
    <>
      <Header />
      <h1>Print</h1>
      {printTransition.map((item) => (
        <div key={item._id} className="mx-2 my-3">
          <TransitionDecs
            className="bg-orange-300"
            amount={item.inputDataValue}
            commit={item.commitProvide}
          />
          <button onClick={() => handleDelete(item._id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default Print;
