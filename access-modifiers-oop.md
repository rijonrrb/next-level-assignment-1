## Access Modifiers in TypeScript OOP

## Introduction

In TypeScript OOP, access modifiers help us decide where class properties and methods can be used. They make our code easier to understand and prevent unwanted access. TypeScript mainly uses public, private, and protected. We can also use readonly.

## Details

Public: We can access public properties from anywhere. It is the default modifier in TypeScript.

Private: Private properties can only be accessed inside the same class. Other classes and child classes cannot use them directly.

Protected: Protected properties can be used inside the class and its child classes, but not from outside.

Readonly: We can assign a readonly value when declaring it or in the constructor. After that, we cannot reassign it.

## Example

class Employee {
  public readonly id: number;
  protected name: string;
  private baseSalary: number;

  constructor(id: number, name: string, baseSalary: number) {
    this.id = id;
    this.name = name;
    this.baseSalary = baseSalary;
  }

  public getDetails(): string {
    return "Employee: " + this.name + ", Base Salary: " + this.baseSalary;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(id: number, name: string, baseSalary: number, department: string) {
    super(id, name, baseSalary);
    this.department = department;
  }

  public getRoleInfo(): string {
    return "Manager of " + this.department + ": " + this.name;
  }
}

Here, Manager can access `name` because it is protected, but cannot access `baseSalary` directly because it is private. The `department` is also private, so it can only be accessed inside the Manager class. The `id` is public and readonly, so we can access it from outside but cannot change it later.

## Conclusion

Access modifiers are useful when working with classes. They help us control access, keep important data protected, and make code simpler to maintain.
