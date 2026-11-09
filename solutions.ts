function multiplyValue(value: number, multiplier?: number): number {
    if (!multiplier && multiplier != 0) {
        multiplier = 2;
  }
  return value * multiplier;
}

function processInput(value: string | number | boolean): string | number {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else { 
    if(value) {
      return "Active" ;
    } else {
      return "Inactive";
    }
  }
}

function formatCoordinate(coordinate: readonly [number, number, string]): string {
  const [latitude, longitude, locationName] = coordinate;
  return "Location: " + locationName + " (" + latitude + ", " + longitude + ")";
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const combined: T[] = [];

  for (const array of arrays) {
    combined.push(...array);
  }

  return combined;
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  const popularCourses: Course[] = [];

  for (const course of courses) {
    if (course.isPublished && course.students >= minStudents) {
      popularCourses.push(course);
    }
  }

  return popularCourses;
}

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  const values: T[K][] = [];

  for (const item of items) {
    values.push(item[key]);
  }

  return values;
}

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return "Employee: " + this.name + ", Base Salary: " + this.baseSalary;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return "Manager of " + this.department + ": " + this.name;
  }
}

async function validateAgeAsync(age: number): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
      return;
    }

    setTimeout(() => resolve("Access Granted"), 1000);
  });
}