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
  const [projects2, setProjects2] = useState<IProjects[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchProjects = async (
    limitOfLoanding: number | undefined,
    filter?: string
  ) => {
    setLoading(true);
    try {
      if (filter) {
      const projectsCollection = collection(db, "projects");
        const projectsSnapshot = await query(
          projectsCollection,
          where("stack", "array-contains", filter),
          orderBy("createdAt", "desc"),
          limit(limitOfLoanding!)
        );

        const snapShot = await getDocs(projectsSnapshot);

        const projectsData = snapShot.docs.map((doc: DocumentData) => ({
          id: doc.id,
          ...doc.data(),
        })) as IProjects[];
        setProjects(projectsData);
      } else {
        const projectsCollection = collection(db, "projects");

        let projectsSnapshot = await query(
          projectsCollection,
          where("stack", "array-contains", "wordpress"),
          orderBy("createdAt", "desc"),
          limit(limitOfLoanding!)
        );

        let snapShot = await getDocs(projectsSnapshot);

        let projectsData = snapShot.docs.map((doc: DocumentData) => ({
          id: doc.id,
          ...doc.data(),
        })) as IProjects[];
        setProjects(projectsData);

        projectsSnapshot = await query(
          projectsCollection,
          where("stack", "array-contains", "css"),
          orderBy("createdAt", "desc"),
          limit(limitOfLoanding!)
        );

        snapShot = await getDocs(projectsSnapshot);

        projectsData = snapShot.docs.map((doc: DocumentData) => ({
          id: doc.id,
          ...doc.data(),
        })) as IProjects[];
        setProjects2(projectsData);  
      }
    } catch (error) {
      console.error("Erro ao buscar projetos:", error);
    }
    setLoading(false);
  };
  return { fetchProjects, projects, projects2, loading };
};
