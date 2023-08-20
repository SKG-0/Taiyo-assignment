import { Navigate, Route, Routes } from "react-router-dom";
import Contacts from "../Pages/Contacts";
import AddContacts from "../Components/AddContacts";
import EditContacts from "../Components/EditContacts";
import ChartAndMap from "../Pages/ChartAndMap";
//main routes file
const routes = () => {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<Navigate to="/contacts" />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/contact/add" element={<AddContacts />} />
        <Route path="/contact/edit/:id" element={<EditContacts />} />
        <Route path="/chartandmap" element={<ChartAndMap />} />
      </Routes>
    </div>
  );
};

export default routes;
