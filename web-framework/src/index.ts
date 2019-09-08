import { User } from "./models/User";

const user = User.buildUser({ id: 1 });

user.on("change", (): void => {
  console.log("trigger change!");
  console.log(user);
});

user.on("save", () => {
  console.log("trigger save!");
  console.log(user);
});
