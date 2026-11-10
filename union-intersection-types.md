# Combining Union and Intersection Types in TypeScript

## Introduction

Union (`|`) and intersection (`&`) types let you build new types from existing ones.
A union means ----> "one of these types" ( we can take anyone among those ),
and,
An intersection means --> "all of these types at once" (we have to take all of them). Using them together makes your types flexible and precise.

And, Types is --> a typescript system using this we can create -- many different kinds of types from the existing types .. We give the example below:

## Body

A union type allows a value to be one of several types:

```typescript
type Status = "loading" | "success" | "error";
```

An intersection type merges several types into one that has all their properties:

```typescript
type User = { id: number; name: string };
type Admin = User & { permissions: string[] }; // when we create a Admin type have to give value all of those
```

Now we can combine both. Imagine an API response that is either a success or a failure, and both share a common base:

```typescript
type BaseResponse = { requestId: number };

type SuccessResponse = BaseResponse & { status: "success"; data: string };
type ErrorResponse = BaseResponse & { status: "error"; message: string };

type ApiResponse = SuccessResponse | ErrorResponse;

function handleResponse(response: ApiResponse): string {
  if (response.status === "success") {
    return `Data: ${response.data}`;
  }
  return `Error: ${response.message}`;
}
```

Here, the intersection (`&`) adds the shared `requestId` to each response type. The union (`|`) says that `ApiResponse` is either a success or an error. Because `status` is a literal type, checking `response.status` narrows the type, so TypeScript knows which properties are available in each branch.

## Conclusion

Use intersections to build bigger types from smaller ones, and unions to describe values that can take different shapes. Together they model real-world data like API responses safely and clearly.
