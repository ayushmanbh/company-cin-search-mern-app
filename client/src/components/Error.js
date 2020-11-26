import React from "react";
import { Link } from "react-router-dom";
export default function Error() {
  return (
    <div className="container">
      <h1 className='text-danger'>oops! it's a dead end</h1>
      <Link to="/" className="btn btn-primary">
        back home
        </Link>
    </div>
  );
}
