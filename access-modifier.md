# Access Modifiers in TypeScript OOP

## Introduction

There are mainly 3 types of access modifier. Public, Private and Protected..

Public : that can be accessed from anywhere, inside the same class also from another class.

Private : That can be directly access only from this own class where this property created.
But if we want to access this from outside any class --then we have to create set & get function.. Those function get the variable and we call those method from outside another class..

Protected : that is more like Protected but if we use class inheritance then any child class can access directly this parents any property..

and `readonly` --this is modifier like, if we set anything to this readonly then that can't be modify in future..

Let's see an example how public, protected, private, readonly those working in development..

```typescript
class Employee {
  public title: string;
  protected name: string;
  private baseSalary: number;
  readonly id: number;

  constructor(title: string, name: string, baseSalary: number, id: number) {
    this.title = title;
    this.name = name;
    this.baseSalary = baseSalary;
    this.id = id;
  }
}

class Manager extends Employee {
  // --- inherit here
  getName(): string {
    return this.name; // allowed: protected
    // return this.baseSalary; // error: private -- this can't be accessable here, as baseSalary is Private property
  }
}
// Above,  Manager is a child class so it can access  it's parents class those property whose are either public or protected but not private..

const manager = new Manager("Lead", "Alice", 50000, 1);
manager.title = "Senior Lead"; // allowed: public
// manager.name = "Bob";       // error: protected -- (without inherited can't access directly )
// manager.id = 2;             // error: readonly
```

// here, we can't directly access any property whose are belongs to private or protected ..
