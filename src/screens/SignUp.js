import styled from "styled-components";
import AuthLayout from "../components/auth/AuthLayout";
import PageTitle from "../components/PageTitle";
import FormBox from "../components/auth/FormBox";
import { FatLink } from "../components/shared";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "../components/auth/Input";
import Button from "../components/auth/Button";
import BottomBox from "../components/auth/BottomBox";
import routes from "../routes";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Subtitle = styled(FatLink)`
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`;

function SingUp() {
  return (
    <AuthLayout>
      <PageTitle title="Sign up" />
      <FormBox>
        <HeaderContainer>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
          <Subtitle>
            {" "}
            Sign up to see photos and videos from your friends.{" "}
          </Subtitle>
        </HeaderContainer>
      </FormBox>
      <BottomBox cta="Have an account?" linkText="Log in" link={routes.home} />
      <form>
        <Input type="text" placeholder="Name" />
        <Input type="text" placeholder="Email" />
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button type="submit" value="Sign up" />
      </form>
    </AuthLayout>
  );
}
export default SingUp;
