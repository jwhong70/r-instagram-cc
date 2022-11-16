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
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $firstName: String!
    $lastName: String
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      ok
      error
    }
  }
`;

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
  const {
    register,
    handleSubmit,
    formState: { isValid },
    getValues,
  } = useForm({ mode: "onChange" });
  const onValid = (data) => {
    if (loading) {
      return;
    }
    createAccount({ variables: { ...data } });
  };
  const navigate = useNavigate();
  const onCompleted = (data) => {
    const { username, password } = getValues();
    const {
      createAccount: { ok },
    } = data;
    if (!ok) {
      return;
    }
    navigate(routes.home, {
      state: { message: "Account created. Please log in.", username, password },
    });
  };
  const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
    onCompleted,
  });
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
      <form onSubmit={handleSubmit(onValid)}>
        <Input
          {...register("firstName", { required: "First Name is required." })}
          type="text"
          placeholder="First Name"
        />
        <Input {...register("lastName")} type="text" placeholder="Last Name" />
        <Input
          {...register("email", { required: "Email is required." })}
          type="text"
          placeholder="Email"
        />
        <Input
          {...register("username", { required: "Username is required." })}
          type="text"
          placeholder="Username"
        />
        <Input
          {...register("password", { required: "Password is required." })}
          type="password"
          placeholder="Password"
        />
        <Button
          type="submit"
          value={loading ? "Loading..." : "Sign up"}
          disabled={!isValid || loading}
        />
      </form>
    </AuthLayout>
  );
}
export default SingUp;
