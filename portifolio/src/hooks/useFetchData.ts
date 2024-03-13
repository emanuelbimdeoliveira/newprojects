import { IProjects } from "../../src/interfaces/IProjects";
import {
  collection,
  DocumentData,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase-config/firebaseConfig";
import { useState } from "react";

export const useFetchData = () => {
  const [projects, setProjects] = useState<IProjects[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchProjects = async (
    limitOfLoanding: number | undefined,
    filter?: string
  ) => {
    setLoading(true);
    try {
      const projectsCollection = collection(db, "projects");
      const projectsSnapshot = await query(
        projectsCollection,
        where("stack", "array-contains", filter || "all"),
        orderBy("createdAt", "desc"),
        limit(limitOfLoanding!)
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
    setLoading(false);
  };
  return { fetchProjects, projects, loading };
};
