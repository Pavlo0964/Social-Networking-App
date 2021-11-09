import SignupGenderSelect from "./signup-gender-select.screen";
import { connect } from "react-redux";
import { RegistrationCreators } from "@redux/actions";

function mapStateToProps(state) {
  return {
    gender: state.registration.gender,
  };
}

const mapDispatchToProps = {
  setGender: RegistrationCreators.setGender,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupGenderSelect);
