import ItemTable from "./ItemTable";
import { useState, useEffect } from "react";

function App() {
  //add useState for all state variables

  //load locationStorage
  useEffect(() => {
    const items = localStorage.getItem("items");
  }, [localStorage.getItem("List")]);

  return (
    <div className="card" style={{ width: 400 }}>
      <div className="card-content">
        <p className="is-4 title has-text-centered">Add Person</p>
        <div className="field">
          <label className="label">Name</label>
          <input
            id="name"
            className="input"
            type="text"
            placeholder="e.q John Smith"
            //update related state based on event
          ></input>
        </div>

        <div className="field">
          <label className="label">Gender</label>
          <select className="input" type="text" placeholder="Please select ..">
            <option id="gender" value="" disabled selected hidden>
              -- Select Gender --
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div className="field">
          <label id="age" className="label">
            Age
          </label>
          <input className="input" type="number" placeholder="e.q 30"></input>
        </div>

        <button
          className="button is-primary is-fullwidth"
          onClick={() => () => {
            var getItem = [
              {
                localName: document.getElementById("name").value,
                localGender: document.getElementById("gender").value,
                localAge: document.getElementById("age").value
              }
            ];
            localStorage.setItem("List", JSON.stringify(getItem));
          }}
        >
          Submit
        </button>

        <div className="mb-4"></div>

        {/* display tables for all persons */}
        <p className="is-4 title has-text-centered">Person List</p>
        {/* sample table */}

        {/* {items.map((item) => {
          return (
            <ItemTable name={item.name} gender={item.gender} age={item.age} />
          );
        })} */}
        <p>วิศรุต ติ๊บบุ่ง 620610807</p>
      </div>
    </div>
  );
}

export default App;
