import { Client, Databases } from "appwrite";

const URL = import.meta.env.VITE_APPWRITE_URL ?? "";
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID ?? "";
const DB_ID = import.meta.env.VITE_APPWIRTE_DATABASE_ID ?? "";
const ARTICLES_COL = import.meta.env.VITE_APPWIRTE_ARTICLES ?? "";

const client = new Client();
client
  .setEndpoint(URL)
  .setProject(PROJECT_ID);
export const databases = new Databases(client);

export const getArticles = async () => {
  const response = await databases.listDocuments(DB_ID, ARTICLES_COL);
  return response.documents;
}