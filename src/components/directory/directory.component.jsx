import React, { useState, useEffect } from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";
import directoryData from "./directory.data";

const Directory = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    setSections(directoryData);
    return () => {
      setSections([]);
    };
  }, []);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
