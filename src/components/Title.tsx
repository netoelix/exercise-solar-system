type TitleProp = {
  headline: React.ReactNode;
};

function Title({ headline }:TitleProp) {
  return (
    <h2>{headline}</h2>
  );
}

export default Title;
