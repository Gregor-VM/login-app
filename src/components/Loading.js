import React from "react";

function Loading({ center }) {
  if (center) {
    return (
      <div className="w-100 text-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default Loading;
