export const getAllUsers = async () => {
  const res = await fetch(
    `${process.env.APP_URL}/api/admin-routes/user/getallusers`,
    { next: { revalidate: 0 } }
  );
  const resjson = await res.json();
  return resjson;
};

export const getUserByNcode = async (JSONdata) => {
  const res = await fetch(`/api/admin-routes/user/searchuser/searchbyncode`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSONdata,
  });
  const resjson = await res.json();
  return resjson;
};

export const AddNewSize = async (JSONdata) => {
  const res = await fetch(`/api/admin-routes/size/addsize`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSONdata,
  });
  const resjson = await res.json();
  return resjson;
};

export const GetSize = async (JSONdata) => {
  const res = await fetch(`/api/admin-routes/size/getsize`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSONdata,
  });
  const resjson = await res.json();
  return resjson;
};

export const DeleteSize = async (JSONdata) => {
  const res = await fetch(`/api/admin-routes/size/getsize`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSONdata,
  });
  const resjson = await res.json();
  return resjson;
};
