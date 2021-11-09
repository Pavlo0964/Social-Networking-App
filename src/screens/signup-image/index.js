import SignupImage from "./signup-image.screen";
import { connect } from "react-redux";
import { RegistrationCreators } from "@redux/actions";

function mapStateToProps(state) {
  return {
    picture: state.registration.picture,
  };
}

const mapDispatchToProps = {
  setPicture: RegistrationCreators.setPicture,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupImage);
