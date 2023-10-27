export const InlineStyle = () => {
  const containerStyle = {
    border: "2px solid blue",
    borderRadius: "5px",
    color: "red"
  };
  const titleStyle = {};
  const buttonStyle = {};
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- InlineStyle -</p>
      <button style={buttonStyle}>インラインスタイル</button>
    </div>
  );
};
