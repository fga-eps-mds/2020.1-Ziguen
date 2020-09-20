import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ 
      where: { email: req.body.email } 
    });

    if (userExists) {
      return res.status(400).json({ error: 'Usuario já Cadastrado' });
    }

    const { id, name, email } = await User.create(req.body);

    return res.json({
      id,
      email,
    });
  }
}

export default new UserController(); 