import { ReactComponent as Kakaologo } from "../../assets/kakaologo.svg";
import Button from "./Button";

type Props = {
  className: string;
};

const KaKaoLogo = (props: Props) => (
  <Button onClick={() => {}} className={`bg-yellow-300 w-8 h-8 rounded-full ${props.className}`}>
    <Kakaologo className="m-auto" />
  </Button>
);

export default KaKaoLogo;
