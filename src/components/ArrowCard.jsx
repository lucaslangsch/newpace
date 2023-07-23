function Arrow(props) {
  const { className, style } = props;
  return (
    <div
      className={ className }
      style={ { ...style, display: 'none' } }
    />
  );
}

export default Arrow;
