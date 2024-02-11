import { IProjects } from "../../src/interfaces/IProjects";
import {
  collection,
  DocumentData,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase-config/firebaseConfig";
import { useState } from "react";

export const useFetchData = () => {
  const [projects, setProjects] = useState<IProjects[]>([]);

  const fetchProjects = async () => {
    try {
      const projectsCollection = collection(db, "projects");
      const projectsSnapshot = await query(
        projectsCollection,
        where("stack", "array-contains", "all"),
        orderBy("createdAt", "desc")
      );

      const snapShot = await getDocs(projectsSnapshot);

      const projectsData = snapShot.docs.map((doc: DocumentData) => ({
        id: doc.id,
        ...doc.data(),
      })) as IProjects[];
      setProjects(projectsData);
    } catch (error) {
      console.error("Erro ao buscar projetos:", error);
    }
  };
  return { fetchProjects, projects };
};
