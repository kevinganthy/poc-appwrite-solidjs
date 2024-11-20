import { createResource, For } from "solid-js";
import { getArticles } from "./utils/appwrite.ts"

function App() {
  const [articles] = createResource(getArticles);

  return (
    <main>
      <h1>Articles</h1>
      <ul>
        <For each={articles()}>{(article) => <li>{article.title}</li>}</For>
      </ul>
    </main>
  );
}

export default App;