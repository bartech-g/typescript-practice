// string, number, boolean, null, undefined
const myName: string = "Geroge";
//
const myNameFromAPI: string | null = null;

// Arrays
let items: string[] = ["test", "another", "third"];
let items2: (string | number)[] = [1, "test", "another", "third", 232];

// Objects

interface IAccount {
  name: string;
  balance: number;
  status?: string | boolean;
  deposit?: () => void;
}

const account: IAccount = {
  name: "Geroge",
  balance: 555,
};

let accounts: IAccount[];

// Classes
class InvestmentAccount implements IAccount {
  constructor(public name, public balance) {}
  private withdraw() {}
}
