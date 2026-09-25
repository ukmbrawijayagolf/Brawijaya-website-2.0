import { CreateUserDataData, CreateRecordData, CreateRecordVariables, UpdateProfileData, UpdateProfileVariables, DeleteRecordData, DeleteRecordVariables, CreateAuditLogData, CreateAuditLogVariables, GetMyProfileData, ListMyRecordsData, ListPublicRecordsData, ListAuditLogsData, GetRoleData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateUserData(options?: useDataConnectMutationOptions<CreateUserDataData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserDataData, undefined>;
export function useCreateUserData(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserDataData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserDataData, undefined>;

export function useCreateRecord(options?: useDataConnectMutationOptions<CreateRecordData, FirebaseError, CreateRecordVariables>): UseDataConnectMutationResult<CreateRecordData, CreateRecordVariables>;
export function useCreateRecord(dc: DataConnect, options?: useDataConnectMutationOptions<CreateRecordData, FirebaseError, CreateRecordVariables>): UseDataConnectMutationResult<CreateRecordData, CreateRecordVariables>;

export function useUpdateProfile(options?: useDataConnectMutationOptions<UpdateProfileData, FirebaseError, UpdateProfileVariables>): UseDataConnectMutationResult<UpdateProfileData, UpdateProfileVariables>;
export function useUpdateProfile(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateProfileData, FirebaseError, UpdateProfileVariables>): UseDataConnectMutationResult<UpdateProfileData, UpdateProfileVariables>;

export function useDeleteRecord(options?: useDataConnectMutationOptions<DeleteRecordData, FirebaseError, DeleteRecordVariables>): UseDataConnectMutationResult<DeleteRecordData, DeleteRecordVariables>;
export function useDeleteRecord(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteRecordData, FirebaseError, DeleteRecordVariables>): UseDataConnectMutationResult<DeleteRecordData, DeleteRecordVariables>;

export function useCreateAuditLog(options?: useDataConnectMutationOptions<CreateAuditLogData, FirebaseError, CreateAuditLogVariables>): UseDataConnectMutationResult<CreateAuditLogData, CreateAuditLogVariables>;
export function useCreateAuditLog(dc: DataConnect, options?: useDataConnectMutationOptions<CreateAuditLogData, FirebaseError, CreateAuditLogVariables>): UseDataConnectMutationResult<CreateAuditLogData, CreateAuditLogVariables>;

export function useGetMyProfile(options?: useDataConnectQueryOptions<GetMyProfileData>): UseDataConnectQueryResult<GetMyProfileData, undefined>;
export function useGetMyProfile(dc: DataConnect, options?: useDataConnectQueryOptions<GetMyProfileData>): UseDataConnectQueryResult<GetMyProfileData, undefined>;

export function useListMyRecords(options?: useDataConnectQueryOptions<ListMyRecordsData>): UseDataConnectQueryResult<ListMyRecordsData, undefined>;
export function useListMyRecords(dc: DataConnect, options?: useDataConnectQueryOptions<ListMyRecordsData>): UseDataConnectQueryResult<ListMyRecordsData, undefined>;

export function useListPublicRecords(options?: useDataConnectQueryOptions<ListPublicRecordsData>): UseDataConnectQueryResult<ListPublicRecordsData, undefined>;
export function useListPublicRecords(dc: DataConnect, options?: useDataConnectQueryOptions<ListPublicRecordsData>): UseDataConnectQueryResult<ListPublicRecordsData, undefined>;

export function useListAuditLogs(options?: useDataConnectQueryOptions<ListAuditLogsData>): UseDataConnectQueryResult<ListAuditLogsData, undefined>;
export function useListAuditLogs(dc: DataConnect, options?: useDataConnectQueryOptions<ListAuditLogsData>): UseDataConnectQueryResult<ListAuditLogsData, undefined>;

export function useGetRole(options?: useDataConnectQueryOptions<GetRoleData>): UseDataConnectQueryResult<GetRoleData, undefined>;
export function useGetRole(dc: DataConnect, options?: useDataConnectQueryOptions<GetRoleData>): UseDataConnectQueryResult<GetRoleData, undefined>;
