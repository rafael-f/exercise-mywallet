import authService from "../../services/authService";

function postSignUpController(req, res) {
      const { name, email, password } = req.body;

      authService.postSignUp(name,email,password);
      
      req.sendStatus(201)
  };

  export default postSignUpController;