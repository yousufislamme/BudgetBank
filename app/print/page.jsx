"use client";
import Header from "@/components/Header";
import TransitionDecs from "@/components/Transition/TransitionDecs";
import { useEffect, useState } from "react";

const Print = () => {
  const [printTransition, setPrintTransition] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [newValues, setNewValues] = useState({
    inputDataValue: "",
    commitProvide: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://budgetbank-server.onrender.com/history")
      .then((res) => res.json())
      .then((data) => {
        setPrintTransition(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (_id) => {
    setLoading(true);
    fetch(`https://budgetbank-server.onrender.com/history/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Update the state to remove the deleted item
        setPrintTransition((prev) => prev.filter((item) => item._id !== _id));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
        setLoading(false);
      });
    console.log("delete id:::", _id);
  };

  const handleEdit = (_id) => {
    console.log("Editing item with ID:", _id, "New values:", newValues);
    fetch(`https://budgetbank-server.onrender.com/history/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newValues),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `Failed to update item with status code: ${res.status}`,
          );
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        // Update the state to reflect the edited item
        setPrintTransition((prev) =>
          prev.map((item) =>
            item._id === _id ? { ...item, ...newValues } : item,
          ),
        );
        setEditItem(null); // Clear the edit state
      })
      .catch((error) => {
        console.error("Error updating item:", error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <>
      <Header />
      <h1>Print</h1>
      {loading && <div>Loading...</div>}
      {printTransition.map((item) => (
        <div key={item._id} className="mx-2 my-3">
          {editItem === item._id ? (
            <div>
              <input
                type="text"
                name="inputDataValue"
                value={newValues.inputDataValue}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="commitProvide"
                value={newValues.commitProvide}
                onChange={handleInputChange}
              />
              <button onClick={() => handleEdit(item._id)}>Save</button>
              <button onClick={() => setEditItem(null)}>Cancel</button>
            </div>
          ) : (
            <>
              <TransitionDecs
                className="bg-orange-300"
                amount={item.inputDataValue}
                commit={item.commitProvide}
              />
              <button
                className="mr-2 text-xs"
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </button>
              <button
                className="text-xs"
                onClick={() => {
                  setEditItem(item._id);
                  setNewValues({
                    inputDataValue: item.inputDataValue,
                    commitProvide: item.commitProvide,
                  });
                }}
              >
                Edit
              </button>
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default Print;
