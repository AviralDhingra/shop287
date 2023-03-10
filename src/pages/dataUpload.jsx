import React, { useEffect, useState } from "react";

// import Styles from "./Projects.module.scss";

import { onValue, ref } from "firebase/database";
import { db } from "../../utils/firebase";

import Project from "../../components/Project/Project";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const query = ref(db, "projects");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        Object.values(data).map((project) => {
          setProjects((projects) => [...projects, project]);
        });
      }
    });
  }, []);

  return (
    <div>
      {projects.map((project, index) => (
        <Project {...project} key={index} />
      ))}
    </div>
  );
}

export default Projects;
