import React  from "react"
  

export const Card = ({ src, children }) => {
  return (
    <>
    <div className="card">
      {src ? <img src={src} className="card-img-top" alt="..." /> : undefined}
      <div className="card-body">{children}</div>
    </div>
    </>
  );
};