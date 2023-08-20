import { Link } from "react-router-dom";
//sidebar for navigating accross contacts and maps,chart
const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-1/4 flex flex-col flex-start min-h-screen sidebar">
      <div className="py-8">
        <Link
          to="/contacts"
          className="block px-4 py-2 text-white hover:bg-gray-700 my-20 text-center"
        >
          Contacts
        </Link>
        <Link
          to="/chartandmap"
          className="block px-4 py-2 text-white hover:bg-gray-700 my-20 text-center"
        >
          Chart & Map
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
