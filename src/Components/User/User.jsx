import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const { userid } = useParams();

  return (
    <div className="m-5 bg-gray-600 p-5 text-white font-bold">
      User:
      <span className="underline mx-4 text-lg">{userid}</span>
    </div>
  );
}

export default User;
