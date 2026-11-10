function multiplyValue(value: number, multiplier: number = 2): number {
  return value * multiplier;
}

function processInput(value: string | number | boolean): string | number {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }

  return value ? "Active" : "Inactive";
}

type Coordinate = readonly [number, number, string];

function formatCoordinate(coordinate: Coordinate): string {
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];
  for (const array of arrays) {
    result.push(...array);
  }
  return result;
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  return courses.filter(
    (sincourse: Course): boolean =>
      sincourse.isPublished && sincourse.students >= minStudents,
  );
}

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item: T): T[K] => item[key]);
}

class Employee {
  protected name: string;
  private baseSalary: number;
  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;
  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

function validateAgeAsync(age: number): Promise<string> {
  return new Promise<string>(
    (
      resolve: (value: string) => void,
      reject: (reason: Error) => void,
    ): void => {
      if (age < 18) {
        reject(new Error("Access Denied: Must be 18 or older"));
        return;
      }

      setTimeout((): void => {
        resolve("Access Granted");
      }, 1000);
    },
  );
}
