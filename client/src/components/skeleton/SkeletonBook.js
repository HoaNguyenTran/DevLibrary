import React from "react";

import SkeletonElement from "./SkeletonElement";

const SkeletonBook = () => {
  return (
    <div className="skeleton-wrapper">
      <SkeletonElement type="img" />
      <SkeletonElement type="title" />
      <SkeletonElement type="text" />
      <SkeletonElement type="text" />
      <div className="shimmer">
      <div className="shimmer__inner"></div>
    </div>
    </div>
  );
};

export default SkeletonBook;
