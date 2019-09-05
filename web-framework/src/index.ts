import { User } from "./models/User";

const user = new User({});

user.set({ name: "Greene", age: 26 });

user.save();
