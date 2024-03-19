import Header from "../components/Header";
export const metadata = {
  title: "About",
  description: "An interdisciplinary engineer currently pursuing BS degree at VinUniversity",
}
export default function About() {
  return (
    <div className="">
      <div>
        <Header title="About" />
      </div>
      <div>
        <p>
          Hi! I am Hieu. Currently I am a sophomore pursuing a BS degree in Computer Science at VinUniversity. My interest is currently surrounding software engineer and AI, specifically recommender system.
          <br /> But beside all the professional titles, I am a whirlwind of innovation and charm, a mind for problem-solving and a heart for creative solutions. I always wish to make my mark on the world, one brilliant idea at a time.
          Hobby-wise, I love sports, especially basketball, as well as Jazz, Christopher Nolan movies, billiards. The list goes on…
        </p>
      </div>
    </div>
  );
}