import SignupFirstName from "./signup-first-name.screen";
import { connect } from "react-redux";
import { RegistrationCreators } from "@redux/actions";

function mapStateToProps(state) {
  return {
    firstName: state.registration.firstName,
  };
}

const mapDispatchToProps = {
  setFirstName: RegistrationCreators.setFirstName,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupFirstName);
