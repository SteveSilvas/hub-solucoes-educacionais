import Historia from "./Screens/Historia";
import HomePage from "./Screens/HomePage";
import Solucoes from "./Screens/Solucoes";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HomePage/>
      <Solucoes/>
      <Historia/>
    </main>
  );
}
