# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useCreateUserData, useCreateRecord, useUpdateProfile, useDeleteRecord, useCreateAuditLog, useGetMyProfile, useListMyRecords, useListPublicRecords, useListAuditLogs, useGetRole } from '@dataconnect/generated/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useCreateUserData();

const { data, isPending, isSuccess, isError, error } = useCreateRecord(createRecordVars);

const { data, isPending, isSuccess, isError, error } = useUpdateProfile(updateProfileVars);

const { data, isPending, isSuccess, isError, error } = useDeleteRecord(deleteRecordVars);

const { data, isPending, isSuccess, isError, error } = useCreateAuditLog(createAuditLogVars);

const { data, isPending, isSuccess, isError, error } = useGetMyProfile();

const { data, isPending, isSuccess, isError, error } = useListMyRecords();

const { data, isPending, isSuccess, isError, error } = useListPublicRecords();

const { data, isPending, isSuccess, isError, error } = useListAuditLogs();

const { data, isPending, isSuccess, isError, error } = useGetRole();

```

Here's an example from a different generated SDK:

```ts
import { useListAllMovies } from '@dataconnect/generated/react';

function MyComponent() {
  const { isLoading, data, error } = useListAllMovies();
  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div> An Error Occurred: {error} </div>
  }
}

// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyComponent from './my-component';

function App() {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
    <MyComponent />
  </QueryClientProvider>
}
```



## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createUserData, createRecord, updateProfile, deleteRecord, createAuditLog, getMyProfile, listMyRecords, listPublicRecords, listAuditLogs, getRole } from '@dataconnect/generated';


// Operation CreateUserData: 
const { data } = await CreateUserData(dataConnect);

// Operation CreateRecord:  For variables, look at type CreateRecordVars in ../index.d.ts
const { data } = await CreateRecord(dataConnect, createRecordVars);

// Operation UpdateProfile:  For variables, look at type UpdateProfileVars in ../index.d.ts
const { data } = await UpdateProfile(dataConnect, updateProfileVars);

// Operation DeleteRecord:  For variables, look at type DeleteRecordVars in ../index.d.ts
const { data } = await DeleteRecord(dataConnect, deleteRecordVars);

// Operation CreateAuditLog:  For variables, look at type CreateAuditLogVars in ../index.d.ts
const { data } = await CreateAuditLog(dataConnect, createAuditLogVars);

// Operation GetMyProfile: 
const { data } = await GetMyProfile(dataConnect);

// Operation ListMyRecords: 
const { data } = await ListMyRecords(dataConnect);

// Operation ListPublicRecords: 
const { data } = await ListPublicRecords(dataConnect);

// Operation ListAuditLogs: 
const { data } = await ListAuditLogs(dataConnect);

// Operation GetRole: 
const { data } = await GetRole(dataConnect);


```