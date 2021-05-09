import User from "../models/User";

class Auth {
  async test() {
    const newUser = await User.create({
      firstName: "Johnny",
      lastName: "John",
    });
    console.log(newUser.id, newUser.firstName, newUser.lastName);

    const project = await newUser.createProject({
      name: "first!",
    });

    const ourUser = await User.findByPk(1, {
      include: [User.associations.projects],
      rejectOnEmpty: true, // Specifying true here removes `null` from the return type!
    });

    // Note the `!` null assertion since TS can't know if we included
    // the model or not
    console.log(ourUser.projects![0].name);
  }
}

export default new Auth();
