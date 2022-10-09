function Light({ status = false }) {
  return (
    <p className="Light">
      This light is {status ? "on" : "off"}!
    </p>
  );
}

export default Light;
