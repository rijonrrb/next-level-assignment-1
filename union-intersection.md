## Combining Union and Intersection Types

## Introduction

In TypeScript, Union and Intersection types help us combine multiple types. But both work differently. Union `|` means a value can be any one of the given types, while Intersection `&` means a value must follow all the combined types.

## Details

Union: We use Union when a variable can have different types, like string, number, or boolean.

Intersection: We use Intersection when we want to combine multiple types into one.

## Example

type Employee = {
  name: string;
  baseSalary: number;
};

type Manager = Employee & {
  department: string;
};

type Developer = Employee & {
  programmingLanguage: string;
};

type Staff = Manager | Developer;

const staff: Staff = {
  name: "Rakib",
  baseSalary: 50000,
  department: "IT"
};

Here, we used both Union and Intersection types together. Manager and Developer use Intersection `&` because they need Employee properties along with their own properties. Then, Staff uses Union `|` because a staff member can be either a Manager or a Developer. This way, we can reuse the same Employee properties without writing them again.

## Conclusion

Union is useful when we need different type options, while Intersection is useful when we need to combine types. Both help us write flexible and organized TypeScript code.
