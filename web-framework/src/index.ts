import { User } from "./models/User";

const user = new User({ name: "Greene", age: 26 });

user.on("change", () => console.log(123));
user.on("change", () => console.log(321));

user.on("save", () => console.log("save was trigger"));

user.trigger("change");
user.trigger("save");
