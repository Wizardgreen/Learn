import { View } from "./View";

export class UserForm extends View {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-random-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick
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

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  public template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>User name: ${this.model.get("name")}</div>
        <div>User age: ${this.model.get("age")}</div>
        <input />
        <button class="set-name">Update Name</button>
        <button class="set-random-age">Set Random Age</button>
      </div>
    `;
  }
}
