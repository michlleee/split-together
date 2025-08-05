import Bill from "./components/Bill";

function App() {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <h1>Split Together</h1>
        <Bill />
      </div>
    </>
  );
}

export default App;
