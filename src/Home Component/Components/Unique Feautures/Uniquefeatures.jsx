import React from "react";
import UnqiueFeaturesfirst from "./UnqiueFeaturesfirst";
import Uniquefeaturessecond from "./Uniquefeaturessecond";
import UniqueTopImage from "./UniqueTopImage";

const Uniquefeatures = () => {
  return (
    <div>
      <UniqueTopImage />
      <div
        style={{
          backgroundImage:
            'url("https://az-files.codingninjas.com/dark-hero-section-only-lines-33050.svg")',
        }}
      >
        <UnqiueFeaturesfirst />
        <Uniquefeaturessecond />
      </div>
    </div>
  );
};

export default Uniquefeatures;
