import patternIMG from "@assets/pattern.png";

export const Home = () => {
  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${patternIMG})`,
        backgroundRepeat: "repeat",
        backgroundSize: "64px",
        maskImage:
          "radial-gradient(circle at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 60%)",
        WebkitMaskImage:
          "radial-gradient(circle at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 60%)",
      }}
    >
      Hero de testeo!!!
    </div>
  );
};
