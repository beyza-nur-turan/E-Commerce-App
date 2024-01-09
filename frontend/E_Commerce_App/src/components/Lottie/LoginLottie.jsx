
import Lottie from "react-lottie";
import animationData from "../../../public/img/Lottie/auth1.json"; // Animasyon dosyanızın yolunu düzeltin

const LoginLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default LoginLottie;
