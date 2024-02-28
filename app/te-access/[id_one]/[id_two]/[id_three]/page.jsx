import React from "react";

const page = ({ params }) => {
  return (
    <>
      <div>{params.id_one}</div>
      <div>{params.id_two}</div>
      <div>{params.id_three}</div>
    </>
  );
};

export default page;
