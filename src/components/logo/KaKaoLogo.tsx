import { ReactComponent as Kakaologo } from "../../assets/kakaologo.svg";

type Props = {
  className: string;
};

const KaKaoLogo = (props: Props) => (
  <button className={`bg-yellow-300 w-8 h-8 rounded-full ${props.className}`}>
    <Kakaologo className="m-auto" />
  </button>
);

export default KaKaoLogo;
