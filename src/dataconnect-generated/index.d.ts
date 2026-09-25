import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AuditLog_Key {
  id: UUIDString;
  __typename?: 'AuditLog_Key';
}

export interface CreateAuditLogData {
  auditLog_insert: AuditLog_Key;
}

export interface CreateAuditLogVariables {
  eventType: string;
}

export interface CreateRecordData {
  record_insert: Record_Key;
}

export interface CreateRecordVariables {
  title: string;
  content: string;
  tags?: string[] | null;
  isPublic: boolean;
}

export interface CreateUserDataData {
  user_upsert: User_Key;
  profile_insert: Profile_Key;
}

export interface DeleteRecordData {
  record_delete?: Record_Key | null;
}

export interface DeleteRecordVariables {
  id: UUIDString;
}

export interface GetMyProfileData {
  profile?: {
    bio: string;
    themePreference: string;
  };
}

export interface GetRoleData {
  roles: ({
    roleName: string;
  })[];
}

export interface ListAuditLogsData {
  auditLogs: ({
    eventType: string;
    timestamp: TimestampString;
  })[];
}

export interface ListMyRecordsData {
  records: ({
    title: string;
    content: string;
    createdAt: TimestampString;
  })[];
}

export interface ListPublicRecordsData {
  records: ({
    title: string;
    content: string;
  })[];
}

export interface Profile_Key {
  id: UUIDString;
  __typename?: 'Profile_Key';
}

export interface Record_Key {
  id: UUIDString;
  __typename?: 'Record_Key';
}

export interface Role_Key {
  id: UUIDString;
  __typename?: 'Role_Key';
}

export interface UpdateProfileData {
  profile_update?: Profile_Key | null;
}

export interface UpdateProfileVariables {
  bio: string;
}

export interface User_Key {
  authUid: string;
  __typename?: 'User_Key';
}

interface CreateUserDataRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateUserDataData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateUserDataData, undefined>;
  operationName: string;
}
export const createUserDataRef: CreateUserDataRef;

export function createUserData(): MutationPromise<CreateUserDataData, undefined>;
export function createUserData(dc: DataConnect): MutationPromise<CreateUserDataData, undefined>;

interface CreateRecordRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateRecordVariables): MutationRef<CreateRecordData, CreateRecordVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateRecordVariables): MutationRef<CreateRecordData, CreateRecordVariables>;
  operationName: string;
}
export const createRecordRef: CreateRecordRef;

export function createRecord(vars: CreateRecordVariables): MutationPromise<CreateRecordData, CreateRecordVariables>;
export function createRecord(dc: DataConnect, vars: CreateRecordVariables): MutationPromise<CreateRecordData, CreateRecordVariables>;

interface UpdateProfileRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateProfileVariables): MutationRef<UpdateProfileData, UpdateProfileVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateProfileVariables): MutationRef<UpdateProfileData, UpdateProfileVariables>;
  operationName: string;
}
export const updateProfileRef: UpdateProfileRef;

export function updateProfile(vars: UpdateProfileVariables): MutationPromise<UpdateProfileData, UpdateProfileVariables>;
export function updateProfile(dc: DataConnect, vars: UpdateProfileVariables): MutationPromise<UpdateProfileData, UpdateProfileVariables>;

interface DeleteRecordRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteRecordVariables): MutationRef<DeleteRecordData, DeleteRecordVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteRecordVariables): MutationRef<DeleteRecordData, DeleteRecordVariables>;
  operationName: string;
}
export const deleteRecordRef: DeleteRecordRef;

export function deleteRecord(vars: DeleteRecordVariables): MutationPromise<DeleteRecordData, DeleteRecordVariables>;
export function deleteRecord(dc: DataConnect, vars: DeleteRecordVariables): MutationPromise<DeleteRecordData, DeleteRecordVariables>;

interface CreateAuditLogRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateAuditLogVariables): MutationRef<CreateAuditLogData, CreateAuditLogVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateAuditLogVariables): MutationRef<CreateAuditLogData, CreateAuditLogVariables>;
  operationName: string;
}
export const createAuditLogRef: CreateAuditLogRef;

export function createAuditLog(vars: CreateAuditLogVariables): MutationPromise<CreateAuditLogData, CreateAuditLogVariables>;
export function createAuditLog(dc: DataConnect, vars: CreateAuditLogVariables): MutationPromise<CreateAuditLogData, CreateAuditLogVariables>;

interface GetMyProfileRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyProfileData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMyProfileData, undefined>;
  operationName: string;
}
export const getMyProfileRef: GetMyProfileRef;

export function getMyProfile(options?: ExecuteQueryOptions): QueryPromise<GetMyProfileData, undefined>;
export function getMyProfile(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetMyProfileData, undefined>;

interface ListMyRecordsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyRecordsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMyRecordsData, undefined>;
  operationName: string;
}
export const listMyRecordsRef: ListMyRecordsRef;

export function listMyRecords(options?: ExecuteQueryOptions): QueryPromise<ListMyRecordsData, undefined>;
export function listMyRecords(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyRecordsData, undefined>;

interface ListPublicRecordsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListPublicRecordsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListPublicRecordsData, undefined>;
  operationName: string;
}
export const listPublicRecordsRef: ListPublicRecordsRef;

export function listPublicRecords(options?: ExecuteQueryOptions): QueryPromise<ListPublicRecordsData, undefined>;
export function listPublicRecords(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListPublicRecordsData, undefined>;

interface ListAuditLogsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAuditLogsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListAuditLogsData, undefined>;
  operationName: string;
}
export const listAuditLogsRef: ListAuditLogsRef;

export function listAuditLogs(options?: ExecuteQueryOptions): QueryPromise<ListAuditLogsData, undefined>;
export function listAuditLogs(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListAuditLogsData, undefined>;

interface GetRoleRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetRoleData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetRoleData, undefined>;
  operationName: string;
}
export const getRoleRef: GetRoleRef;

export function getRole(options?: ExecuteQueryOptions): QueryPromise<GetRoleData, undefined>;
export function getRole(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetRoleData, undefined>;

