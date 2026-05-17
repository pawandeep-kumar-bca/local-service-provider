
import React from "react";

const UserInfo = ({
  image,
  name,
  id,
}) => {
  return (
    <div className="flex items-center gap-3">
      <img
        src={image}
        alt="profile"
        className="
          w-12 h-12 min-w-12
          rounded-full
          object-cover
          ring-2 ring-primary/10
        "
      />

      <div>
        <h1 className="text-base font-bold text-black/90">
          {name}
        </h1>

        <p className="text-sm text-muted">
          {id}
        </p>
      </div>
    </div>
  );
};

export default UserInfo;