import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddContact } from "../Redux/Action";
import { useNavigate } from "react-router-dom";

const AddContacts = () => {
  const contacts = useSelector((store: any) => store.contacts);
  const [data, setData] = useState<any>({});
  const navigate = useNavigate();
  useEffect(() => {
    if (contacts) {
      setData({
        id: contacts.length + 1,
        firstName: "",
        lastName: "",
        status: "",
      });
    }
  }, [contacts]);

  const dispatch: any = useDispatch();
  //handling the inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  //add contact function
  const handleCreateContact = () => {
    dispatch(AddContact(contacts, data));
    navigate("/");
  };
  return (
    //form for adding contact
    <div className="flex items-center justify-center h-screen">
      <form className="bg-white shadow-md rounded px-8 py-6 w-1/2 contact-form">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter your first name"
            name="firstName"
            onChange={handleChange}
            value={data.firstName}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter your last name"
            name="lastName"
            onChange={handleChange}
            value={data.lastName}
          />
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center mr-10">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-blue-500"
              name="status"
              value="Active"
              onChange={handleChange}
            />
            <span className="ml-2">Active</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-red-500"
              name="status"
              value="Inactive"
              onChange={handleChange}
            />
            <span className="ml-2">Inactive</span>
          </label>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleCreateContact}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddContacts;
