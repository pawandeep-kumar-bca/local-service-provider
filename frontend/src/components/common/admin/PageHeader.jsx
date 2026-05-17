
import React from "react";

const PageHeader = ({
  title,
  subtitle,
  button,
}) => {
  return (
    <div className="flex items-center justify-between mb-5">
      <div>
        <h1 className="text-2xl font-bold text-black/80">
          {title}
        </h1>

        <p className="text-sm text-muted mt-1">
          {subtitle}
        </p>
      </div>

      {button && <div>{button}</div>}
    </div>
  );
};

export default PageHeader;