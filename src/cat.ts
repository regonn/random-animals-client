import Client from "./client";

class Cat extends Client {
  constructor() {
    super("https://aws.random.cat/meow");
  }
}

export default Cat;
