export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- StyledJsx -</p>
        <button className="button">スタイルドJSX</button>
      </div>
      <style jsx="true">{`
        .container {
          border: 2px solid blue;
          border-radius: 5px;
          color: red;
        }
        .title {
          color: purple;
        }

        .button {
          background-color: pink;
        }

        .button:hover {
          background-color: green;
        }
      `}</style>
    </>
  );
};
