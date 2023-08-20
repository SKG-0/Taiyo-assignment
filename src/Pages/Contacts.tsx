import { useSelector, useDispatch } from "react-redux";
import { DeleteContact } from "../Redux/Action";
import { useNavigate } from "react-router-dom";

const Contacts = () => {
  const contacts = useSelector((store: any) => store.contacts);
  const navigate = useNavigate();

  const dispatch: any = useDispatch();
  //adding contact
  const handleAddContact = () => {
    navigate("/contact/add");
  };
  //edit contact
  const handleEditContact = (contact: any) => {
    navigate(`/contact/edit/${contact.id}`);
  };
  //delete contact
  const handleDeleteContact = (contact: object) => {
    dispatch(DeleteContact(contacts, contact));
  };

  return (
    <div className="w-full m-auto text-center">
      <div>
        <button
          className="bg-gray-700 text-white font-bold py-2 px-4 rounded mt-10 w-1/5 create-contact-btn"
          onClick={handleAddContact}
        >
          Create Contact
        </button>
      </div>
      <div>
        {contacts.length > 0 ? (
          <div className="grid grid-cols-3 justify-between mt-10 gap-50 contact-card-container">
            {/* displaying all contacts  */}
            {contacts?.map((contact: any) => {
              return (
                <div className="bg-white shadow-2xl rounded p-4 flex flex-col mx-5 my-5">
                  <div className="mb-2">
                    <span className="text-gray-700 font-bold">First Name:</span>
                    <span className="ml-1 text-gray-800">
                      {contact.firstName}
                    </span>
                  </div>
                  <div className="mb-2">
                    <span className="text-gray-700 font-bold">Last Name:</span>
                    <span className="ml-1 text-gray-800">
                      {contact.lastName}
                    </span>
                  </div>
                  <div className="mb-4">
                    <span className="text-gray-700 font-bold">Status:</span>
                    <span className="ml-1 text-gray-800">{contact.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <button
                      onClick={() => handleEditContact(contact)}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteContact(contact)}
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          // if no contacts added yet then show this message
          <div className="text-center flex items-center justify-center mt-20">
            <h1 className="text-2xl font-bold text-gray-800 not-found-text">
              No contacts found, please create one
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contacts;
