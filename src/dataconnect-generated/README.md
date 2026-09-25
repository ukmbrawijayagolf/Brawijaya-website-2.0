# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetMyProfile*](#getmyprofile)
  - [*ListMyRecords*](#listmyrecords)
  - [*ListPublicRecords*](#listpublicrecords)
  - [*ListAuditLogs*](#listauditlogs)
  - [*GetRole*](#getrole)
- [**Mutations**](#mutations)
  - [*CreateUserData*](#createuserdata)
  - [*CreateRecord*](#createrecord)
  - [*UpdateProfile*](#updateprofile)
  - [*DeleteRecord*](#deleterecord)
  - [*CreateAuditLog*](#createauditlog)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetMyProfile
You can execute the `GetMyProfile` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMyProfile(options?: ExecuteQueryOptions): QueryPromise<GetMyProfileData, undefined>;

interface GetMyProfileRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyProfileData, undefined>;
}
export const getMyProfileRef: GetMyProfileRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMyProfile(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetMyProfileData, undefined>;

interface GetMyProfileRef {
  ...
  (dc: DataConnect): QueryRef<GetMyProfileData, undefined>;
}
export const getMyProfileRef: GetMyProfileRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMyProfileRef:
```typescript
const name = getMyProfileRef.operationName;
console.log(name);
```

### Variables
The `GetMyProfile` query has no variables.
### Return Type
Recall that executing the `GetMyProfile` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMyProfileData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetMyProfileData {
  profile?: {
    bio: string;
    themePreference: string;
  };
}
```
### Using `GetMyProfile`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMyProfile } from '@dataconnect/generated';


// Call the `getMyProfile()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMyProfile();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMyProfile(dataConnect);

console.log(data.profile);

// Or, you can use the `Promise` API.
getMyProfile().then((response) => {
  const data = response.data;
  console.log(data.profile);
});
```

### Using `GetMyProfile`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMyProfileRef } from '@dataconnect/generated';


// Call the `getMyProfileRef()` function to get a reference to the query.
const ref = getMyProfileRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMyProfileRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.profile);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.profile);
});
```

## ListMyRecords
You can execute the `ListMyRecords` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMyRecords(options?: ExecuteQueryOptions): QueryPromise<ListMyRecordsData, undefined>;

interface ListMyRecordsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyRecordsData, undefined>;
}
export const listMyRecordsRef: ListMyRecordsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMyRecords(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyRecordsData, undefined>;

interface ListMyRecordsRef {
  ...
  (dc: DataConnect): QueryRef<ListMyRecordsData, undefined>;
}
export const listMyRecordsRef: ListMyRecordsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMyRecordsRef:
```typescript
const name = listMyRecordsRef.operationName;
console.log(name);
```

### Variables
The `ListMyRecords` query has no variables.
### Return Type
Recall that executing the `ListMyRecords` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMyRecordsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListMyRecordsData {
  records: ({
    title: string;
    content: string;
    createdAt: TimestampString;
  })[];
}
```
### Using `ListMyRecords`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMyRecords } from '@dataconnect/generated';


// Call the `listMyRecords()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMyRecords();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMyRecords(dataConnect);

console.log(data.records);

// Or, you can use the `Promise` API.
listMyRecords().then((response) => {
  const data = response.data;
  console.log(data.records);
});
```

### Using `ListMyRecords`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMyRecordsRef } from '@dataconnect/generated';


// Call the `listMyRecordsRef()` function to get a reference to the query.
const ref = listMyRecordsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMyRecordsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.records);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.records);
});
```

## ListPublicRecords
You can execute the `ListPublicRecords` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listPublicRecords(options?: ExecuteQueryOptions): QueryPromise<ListPublicRecordsData, undefined>;

interface ListPublicRecordsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListPublicRecordsData, undefined>;
}
export const listPublicRecordsRef: ListPublicRecordsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listPublicRecords(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListPublicRecordsData, undefined>;

interface ListPublicRecordsRef {
  ...
  (dc: DataConnect): QueryRef<ListPublicRecordsData, undefined>;
}
export const listPublicRecordsRef: ListPublicRecordsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listPublicRecordsRef:
```typescript
const name = listPublicRecordsRef.operationName;
console.log(name);
```

### Variables
The `ListPublicRecords` query has no variables.
### Return Type
Recall that executing the `ListPublicRecords` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListPublicRecordsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListPublicRecordsData {
  records: ({
    title: string;
    content: string;
  })[];
}
```
### Using `ListPublicRecords`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listPublicRecords } from '@dataconnect/generated';


// Call the `listPublicRecords()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listPublicRecords();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listPublicRecords(dataConnect);

console.log(data.records);

// Or, you can use the `Promise` API.
listPublicRecords().then((response) => {
  const data = response.data;
  console.log(data.records);
});
```

### Using `ListPublicRecords`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listPublicRecordsRef } from '@dataconnect/generated';


// Call the `listPublicRecordsRef()` function to get a reference to the query.
const ref = listPublicRecordsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listPublicRecordsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.records);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.records);
});
```

## ListAuditLogs
You can execute the `ListAuditLogs` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listAuditLogs(options?: ExecuteQueryOptions): QueryPromise<ListAuditLogsData, undefined>;

interface ListAuditLogsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAuditLogsData, undefined>;
}
export const listAuditLogsRef: ListAuditLogsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listAuditLogs(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListAuditLogsData, undefined>;

interface ListAuditLogsRef {
  ...
  (dc: DataConnect): QueryRef<ListAuditLogsData, undefined>;
}
export const listAuditLogsRef: ListAuditLogsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listAuditLogsRef:
```typescript
const name = listAuditLogsRef.operationName;
console.log(name);
```

### Variables
The `ListAuditLogs` query has no variables.
### Return Type
Recall that executing the `ListAuditLogs` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListAuditLogsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListAuditLogsData {
  auditLogs: ({
    eventType: string;
    timestamp: TimestampString;
  })[];
}
```
### Using `ListAuditLogs`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listAuditLogs } from '@dataconnect/generated';


// Call the `listAuditLogs()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listAuditLogs();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listAuditLogs(dataConnect);

console.log(data.auditLogs);

// Or, you can use the `Promise` API.
listAuditLogs().then((response) => {
  const data = response.data;
  console.log(data.auditLogs);
});
```

### Using `ListAuditLogs`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listAuditLogsRef } from '@dataconnect/generated';


// Call the `listAuditLogsRef()` function to get a reference to the query.
const ref = listAuditLogsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listAuditLogsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.auditLogs);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.auditLogs);
});
```

## GetRole
You can execute the `GetRole` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getRole(options?: ExecuteQueryOptions): QueryPromise<GetRoleData, undefined>;

interface GetRoleRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetRoleData, undefined>;
}
export const getRoleRef: GetRoleRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getRole(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetRoleData, undefined>;

interface GetRoleRef {
  ...
  (dc: DataConnect): QueryRef<GetRoleData, undefined>;
}
export const getRoleRef: GetRoleRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getRoleRef:
```typescript
const name = getRoleRef.operationName;
console.log(name);
```

### Variables
The `GetRole` query has no variables.
### Return Type
Recall that executing the `GetRole` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetRoleData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetRoleData {
  roles: ({
    roleName: string;
  })[];
}
```
### Using `GetRole`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getRole } from '@dataconnect/generated';


// Call the `getRole()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getRole();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getRole(dataConnect);

console.log(data.roles);

// Or, you can use the `Promise` API.
getRole().then((response) => {
  const data = response.data;
  console.log(data.roles);
});
```

### Using `GetRole`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getRoleRef } from '@dataconnect/generated';


// Call the `getRoleRef()` function to get a reference to the query.
const ref = getRoleRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getRoleRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.roles);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.roles);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateUserData
You can execute the `CreateUserData` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createUserData(): MutationPromise<CreateUserDataData, undefined>;

interface CreateUserDataRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateUserDataData, undefined>;
}
export const createUserDataRef: CreateUserDataRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createUserData(dc: DataConnect): MutationPromise<CreateUserDataData, undefined>;

interface CreateUserDataRef {
  ...
  (dc: DataConnect): MutationRef<CreateUserDataData, undefined>;
}
export const createUserDataRef: CreateUserDataRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createUserDataRef:
```typescript
const name = createUserDataRef.operationName;
console.log(name);
```

### Variables
The `CreateUserData` mutation has no variables.
### Return Type
Recall that executing the `CreateUserData` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateUserDataData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateUserDataData {
  user_upsert: User_Key;
  profile_insert: Profile_Key;
}
```
### Using `CreateUserData`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createUserData } from '@dataconnect/generated';


// Call the `createUserData()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createUserData();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createUserData(dataConnect);

console.log(data.user_upsert);
console.log(data.profile_insert);

// Or, you can use the `Promise` API.
createUserData().then((response) => {
  const data = response.data;
  console.log(data.user_upsert);
  console.log(data.profile_insert);
});
```

### Using `CreateUserData`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createUserDataRef } from '@dataconnect/generated';


// Call the `createUserDataRef()` function to get a reference to the mutation.
const ref = createUserDataRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createUserDataRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_upsert);
console.log(data.profile_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_upsert);
  console.log(data.profile_insert);
});
```

## CreateRecord
You can execute the `CreateRecord` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createRecord(vars: CreateRecordVariables): MutationPromise<CreateRecordData, CreateRecordVariables>;

interface CreateRecordRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateRecordVariables): MutationRef<CreateRecordData, CreateRecordVariables>;
}
export const createRecordRef: CreateRecordRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createRecord(dc: DataConnect, vars: CreateRecordVariables): MutationPromise<CreateRecordData, CreateRecordVariables>;

interface CreateRecordRef {
  ...
  (dc: DataConnect, vars: CreateRecordVariables): MutationRef<CreateRecordData, CreateRecordVariables>;
}
export const createRecordRef: CreateRecordRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createRecordRef:
```typescript
const name = createRecordRef.operationName;
console.log(name);
```

### Variables
The `CreateRecord` mutation requires an argument of type `CreateRecordVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateRecordVariables {
  title: string;
  content: string;
  tags?: string[] | null;
  isPublic: boolean;
}
```
### Return Type
Recall that executing the `CreateRecord` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateRecordData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateRecordData {
  record_insert: Record_Key;
}
```
### Using `CreateRecord`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createRecord, CreateRecordVariables } from '@dataconnect/generated';

// The `CreateRecord` mutation requires an argument of type `CreateRecordVariables`:
const createRecordVars: CreateRecordVariables = {
  title: ..., 
  content: ..., 
  tags: ..., // optional
  isPublic: ..., 
};

// Call the `createRecord()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createRecord(createRecordVars);
// Variables can be defined inline as well.
const { data } = await createRecord({ title: ..., content: ..., tags: ..., isPublic: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createRecord(dataConnect, createRecordVars);

console.log(data.record_insert);

// Or, you can use the `Promise` API.
createRecord(createRecordVars).then((response) => {
  const data = response.data;
  console.log(data.record_insert);
});
```

### Using `CreateRecord`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createRecordRef, CreateRecordVariables } from '@dataconnect/generated';

// The `CreateRecord` mutation requires an argument of type `CreateRecordVariables`:
const createRecordVars: CreateRecordVariables = {
  title: ..., 
  content: ..., 
  tags: ..., // optional
  isPublic: ..., 
};

// Call the `createRecordRef()` function to get a reference to the mutation.
const ref = createRecordRef(createRecordVars);
// Variables can be defined inline as well.
const ref = createRecordRef({ title: ..., content: ..., tags: ..., isPublic: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createRecordRef(dataConnect, createRecordVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.record_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.record_insert);
});
```

## UpdateProfile
You can execute the `UpdateProfile` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateProfile(vars: UpdateProfileVariables): MutationPromise<UpdateProfileData, UpdateProfileVariables>;

interface UpdateProfileRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateProfileVariables): MutationRef<UpdateProfileData, UpdateProfileVariables>;
}
export const updateProfileRef: UpdateProfileRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateProfile(dc: DataConnect, vars: UpdateProfileVariables): MutationPromise<UpdateProfileData, UpdateProfileVariables>;

interface UpdateProfileRef {
  ...
  (dc: DataConnect, vars: UpdateProfileVariables): MutationRef<UpdateProfileData, UpdateProfileVariables>;
}
export const updateProfileRef: UpdateProfileRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateProfileRef:
```typescript
const name = updateProfileRef.operationName;
console.log(name);
```

### Variables
The `UpdateProfile` mutation requires an argument of type `UpdateProfileVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateProfileVariables {
  bio: string;
}
```
### Return Type
Recall that executing the `UpdateProfile` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateProfileData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateProfileData {
  profile_update?: Profile_Key | null;
}
```
### Using `UpdateProfile`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateProfile, UpdateProfileVariables } from '@dataconnect/generated';

// The `UpdateProfile` mutation requires an argument of type `UpdateProfileVariables`:
const updateProfileVars: UpdateProfileVariables = {
  bio: ..., 
};

// Call the `updateProfile()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateProfile(updateProfileVars);
// Variables can be defined inline as well.
const { data } = await updateProfile({ bio: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateProfile(dataConnect, updateProfileVars);

console.log(data.profile_update);

// Or, you can use the `Promise` API.
updateProfile(updateProfileVars).then((response) => {
  const data = response.data;
  console.log(data.profile_update);
});
```

### Using `UpdateProfile`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateProfileRef, UpdateProfileVariables } from '@dataconnect/generated';

// The `UpdateProfile` mutation requires an argument of type `UpdateProfileVariables`:
const updateProfileVars: UpdateProfileVariables = {
  bio: ..., 
};

// Call the `updateProfileRef()` function to get a reference to the mutation.
const ref = updateProfileRef(updateProfileVars);
// Variables can be defined inline as well.
const ref = updateProfileRef({ bio: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateProfileRef(dataConnect, updateProfileVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.profile_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.profile_update);
});
```

## DeleteRecord
You can execute the `DeleteRecord` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteRecord(vars: DeleteRecordVariables): MutationPromise<DeleteRecordData, DeleteRecordVariables>;

interface DeleteRecordRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteRecordVariables): MutationRef<DeleteRecordData, DeleteRecordVariables>;
}
export const deleteRecordRef: DeleteRecordRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteRecord(dc: DataConnect, vars: DeleteRecordVariables): MutationPromise<DeleteRecordData, DeleteRecordVariables>;

interface DeleteRecordRef {
  ...
  (dc: DataConnect, vars: DeleteRecordVariables): MutationRef<DeleteRecordData, DeleteRecordVariables>;
}
export const deleteRecordRef: DeleteRecordRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteRecordRef:
```typescript
const name = deleteRecordRef.operationName;
console.log(name);
```

### Variables
The `DeleteRecord` mutation requires an argument of type `DeleteRecordVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteRecordVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteRecord` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteRecordData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteRecordData {
  record_delete?: Record_Key | null;
}
```
### Using `DeleteRecord`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteRecord, DeleteRecordVariables } from '@dataconnect/generated';

// The `DeleteRecord` mutation requires an argument of type `DeleteRecordVariables`:
const deleteRecordVars: DeleteRecordVariables = {
  id: ..., 
};

// Call the `deleteRecord()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteRecord(deleteRecordVars);
// Variables can be defined inline as well.
const { data } = await deleteRecord({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteRecord(dataConnect, deleteRecordVars);

console.log(data.record_delete);

// Or, you can use the `Promise` API.
deleteRecord(deleteRecordVars).then((response) => {
  const data = response.data;
  console.log(data.record_delete);
});
```

### Using `DeleteRecord`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteRecordRef, DeleteRecordVariables } from '@dataconnect/generated';

// The `DeleteRecord` mutation requires an argument of type `DeleteRecordVariables`:
const deleteRecordVars: DeleteRecordVariables = {
  id: ..., 
};

// Call the `deleteRecordRef()` function to get a reference to the mutation.
const ref = deleteRecordRef(deleteRecordVars);
// Variables can be defined inline as well.
const ref = deleteRecordRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteRecordRef(dataConnect, deleteRecordVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.record_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.record_delete);
});
```

## CreateAuditLog
You can execute the `CreateAuditLog` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createAuditLog(vars: CreateAuditLogVariables): MutationPromise<CreateAuditLogData, CreateAuditLogVariables>;

interface CreateAuditLogRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateAuditLogVariables): MutationRef<CreateAuditLogData, CreateAuditLogVariables>;
}
export const createAuditLogRef: CreateAuditLogRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createAuditLog(dc: DataConnect, vars: CreateAuditLogVariables): MutationPromise<CreateAuditLogData, CreateAuditLogVariables>;

interface CreateAuditLogRef {
  ...
  (dc: DataConnect, vars: CreateAuditLogVariables): MutationRef<CreateAuditLogData, CreateAuditLogVariables>;
}
export const createAuditLogRef: CreateAuditLogRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createAuditLogRef:
```typescript
const name = createAuditLogRef.operationName;
console.log(name);
```

### Variables
The `CreateAuditLog` mutation requires an argument of type `CreateAuditLogVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateAuditLogVariables {
  eventType: string;
}
```
### Return Type
Recall that executing the `CreateAuditLog` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateAuditLogData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateAuditLogData {
  auditLog_insert: AuditLog_Key;
}
```
### Using `CreateAuditLog`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createAuditLog, CreateAuditLogVariables } from '@dataconnect/generated';

// The `CreateAuditLog` mutation requires an argument of type `CreateAuditLogVariables`:
const createAuditLogVars: CreateAuditLogVariables = {
  eventType: ..., 
};

// Call the `createAuditLog()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createAuditLog(createAuditLogVars);
// Variables can be defined inline as well.
const { data } = await createAuditLog({ eventType: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createAuditLog(dataConnect, createAuditLogVars);

console.log(data.auditLog_insert);

// Or, you can use the `Promise` API.
createAuditLog(createAuditLogVars).then((response) => {
  const data = response.data;
  console.log(data.auditLog_insert);
});
```

### Using `CreateAuditLog`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createAuditLogRef, CreateAuditLogVariables } from '@dataconnect/generated';

// The `CreateAuditLog` mutation requires an argument of type `CreateAuditLogVariables`:
const createAuditLogVars: CreateAuditLogVariables = {
  eventType: ..., 
};

// Call the `createAuditLogRef()` function to get a reference to the mutation.
const ref = createAuditLogRef(createAuditLogVars);
// Variables can be defined inline as well.
const ref = createAuditLogRef({ eventType: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createAuditLogRef(dataConnect, createAuditLogVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.auditLog_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.auditLog_insert);
});
```

