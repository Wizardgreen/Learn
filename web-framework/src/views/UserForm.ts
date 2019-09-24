import { View } from "./View";
import { User, UserProps } from "../models/User";

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-random-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
      "click:.save-model": this.onSaveClick
    };
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector("input");
    if (input) {
      const name = input.value;
      if (name) {
        this.model.set({ name });
      }
    }
  };

  onSaveClick = (): void => {
    this.model.save();
  };

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  public template(): string {
    return `
      <div>
        <input placeholder="${this.model.get("name")}"/>
        <button class="set-name">Update Name</button>
        <button class="set-random-age">Set Random Age</button>
        <button class="save-model">Save User</button>
      </div>
    `;
  }
}
