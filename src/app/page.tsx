import Nav from '../components/nav';

export default function Home() {
  return (
    <>
      <Nav />
      <main className="p-6">
        <h1 className="text-3xl font-bold">Bem-vindo!</h1>
        <p>Este é o início do seu portfólio.</p>
      </main>
    </>
  );
}