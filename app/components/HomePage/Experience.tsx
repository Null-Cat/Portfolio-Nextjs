import Squares from "../ReactBits/Squares";

const Experience = () => {
  return (
    <div style={{ height: "100vh" }}>
      <div className="relative h-full w-full">
        <Squares
          speed={0.5}
          squareSize={50}
          direction="diagonal"
          borderColor="#333"
          hoverFillColor="#222"
        />
      </div>
    </div>
  );
};

export default Experience;
