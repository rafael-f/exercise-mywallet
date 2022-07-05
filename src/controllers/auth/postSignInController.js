import authService from "../../services/authService.js"

async function postSignInController(req, res) {
  const { email, password } = req.body;
    
    const token = authService.postSignIn(email,password);

    res.send(token);
}
export default postSignInController