import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex w-screen h-screen justify-center items-center ${pacifico.className}`}
    >
      <div className="text-6xl items-center justify-center text-center">
        <div className="text-9xl">{`Viha's`}</div>
        <div className="mt-2">Birthday</div>
        <div className="mt-4">Loading...</div>
      </div>
    </main>
  );
}
