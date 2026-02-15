import { useEffect, useState } from "react";

function Home() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function Fetchmovies() {
      try {
        const req = await fetch(
          "https://www.omdbapi.com/?i=tt3896198&apikey=48fb35ec",
        );
        const res = await req.json();
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
    Fetchmovies();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex">
        <img
          src="https://www.cartoonbrew.com/wp-content/uploads/2021/03/bigfoot_family-580x326.jpg"
          alt=""
          className="absolute h-130 w-full"
        />
        <div className="relative top-70 left-10 text-white">
          <h1 className="text-3xl font-bold">BIGFOOT: Adventure of bigfoot</h1>
          <p>
            <i className="ri-movie-2-line "></i> | 2024 | Adventure, Action,
            Comedy
          </p>
          <p className="w-150 py-2">Follow up to Son of Bigfoot: Father uses his new fame to fight against an Alaska oil company but when he disappears the son, the mother, a raccoon and a bear head North to rescue him.</p>
          <div className="m-4 flex gap-5">
          <button className="bg-orange-400 rounded-lg p-3 text-xl text-white font-semibold uppercase"><i className="ri-play-fill "></i> Watch Now</button>
          <button className=" bg-white/20 px-5 rounded-lg py-3 text-xl text-white font-semibold uppercase"><i className="ri-add-fill w-5 h-5"></i> My List</button>

          </div>
        </div>
      </div>
      <div className="mt-80 flex flex-col gap-7">
        <div className="px-7 grid">
          <h3 className="text-2xl text-black font-bold">Popular Series</h3>
          <div className="h-65 w-45 my-3 bg-[#1E1F22] rounded-lg">
            <i className="ri-play-circle-fill absolute text-6xl pl-13 cursor-pointer py-22 opacity-0 hover:opacity-100 h-65 w-45 text-green-400"></i>
            <img
              src="https://www.calandbob.com/wp-content/uploads/2020/05/bigfoot-family-poster-27x40-768x1138.jpg"
              alt=""
              className="w-45 h-58 rounded-t-lg"
            />
            <p className="whitespace-nowrap text-sm text-[#949596] px-1 ">
              BIGFOOT: Adventure of bi...
            </p>
          </div>
        </div>
        <div className="px-7 grid">
          <h3 className="text-2xl text-black font-bold">HollyWoods</h3>
          <div className="h-65 w-45 my-3 bg-[#1E1F22] rounded-lg">
            <i className="ri-play-circle-fill absolute text-6xl pl-13 cursor-pointer py-22 opacity-0 hover:opacity-100 h-65 w-45 text-green-400"></i>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQShq8qQJ3sNmSxmkukL-sZPMgRwGA5QIWgCQ&s"
              alt=""
              className="w-45 h-58 rounded-t-lg"
            />
            <p className="whitespace-nowrap text-sm text-[#949596] px-1 ">
              BIGFOOT: Adventure of bi...
            </p>
          </div>
        </div>
        <div className="px-7 grid">
          <h3 className="text-2xl text-black font-bold">BollyWood</h3>

          <div className="h-65 w-45 my-3 bg-[#1E1F22] rounded-lg">
            <i className="ri-play-circle-fill absolute text-6xl pl-13 cursor-pointer py-22 opacity-0 hover:opacity-100 h-65 w-45 text-green-400"></i>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQShq8qQJ3sNmSxmkukL-sZPMgRwGA5QIWgCQ&s"
              alt=""
              className="w-45 h-58 rounded-t-lg"
            />
            <p className="whitespace-nowrap text-sm text-[#949596] px-1 ">
              BIGFOOT: Adventure of bi...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
