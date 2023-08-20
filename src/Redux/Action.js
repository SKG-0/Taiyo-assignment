import { Get_Data_Success } from "./ActionTypes";
//actions for peroforming all the operations in redux
export const getContacts = (payload) => {
  return {
    type: Get_Data_Success,
    payload,
  };
};

export const AddContact = (data, contact) => (dispatch) => {
  let contacts = [...data, contact];
  dispatch(getContacts(contacts));
};

export const EditContact = (data, contact) => (dispatch) => {
  let contacts = [...data];
  data.forEach((element, i) => {
    if (contact.id == element.id) {
      contacts[i] = contact;
    }
  });
  dispatch(getContacts(contacts));
};

export const DeleteContact = (data, contact) => (dispatch) => {
  let contacts = data?.filter((element, i) => {
    return contact.id != element.id;
  });
  dispatch(getContacts(contacts));
};
