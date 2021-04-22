import type { Principal } from '@dfinity/agent';
export type CredentialId = Array<
  number
>;
export interface Delegation {
  'pubkey' : PublicKey,
  'targets' : [] | [Array<Principal>],
  'expiration' : Timestamp,
};
export interface DeviceData {
  'alias' : string,
  'pubkey' : DeviceKey,
  'credential_id' : [] | [CredentialId],
};
export type DeviceKey = PublicKey;
export type FrontendHostname = string;
export type GetDelegationResponse = { 'no_such_delegation' : null } |
  { 'signed_delegation' : SignedDelegation };
export type HeaderField = [string, string];
export interface HttpRequest {
  'url' : string,
  'method' : string,
  'body' : Array<number>,
  'headers' : Array<HeaderField>,
};
export interface HttpResponse {
  'body' : Array<number>,
  'headers' : Array<HeaderField>,
  'streaming_strategy' : [] | [StreamingStrategy],
  'status_code' : number,
};
export interface ProofOfWork { 'nonce' : bigint, 'timestamp' : Timestamp };
export interface InternetIdentityInit {
  'assigned_user_number_range' : [bigint, bigint],
};
export interface InternetIdentityStats {
  'users_registered' : bigint,
  'assigned_user_number_range' : [bigint, bigint],
};
export type PublicKey = Array<number>;
export type SessionKey = PublicKey;
export interface SignedDelegation {
  'signature' : Array<number>,
  'delegation' : Delegation,
};
export interface StreamingCallbackHttpResponse {
  'token' : [] | [Token],
  'body' : Array<number>,
};
export type StreamingStrategy = {
    'Callback' : { 'token' : Token, 'callback' : [Principal, string] }
  };
export type Timestamp = bigint;
export type Token = {};
export type UserKey = PublicKey;
export type UserNumber = bigint;
export default interface _SERVICE {
  'add' : (arg_0: UserNumber, arg_1: DeviceData) => Promise<undefined>,
  'get_delegation' : (
      arg_0: UserNumber,
      arg_1: FrontendHostname,
      arg_2: SessionKey,
      arg_3: Timestamp,
    ) => Promise<GetDelegationResponse>,
  'http_request' : (arg_0: HttpRequest) => Promise<HttpResponse>,
  'lookup' : (arg_0: UserNumber) => Promise<Array<DeviceData>>,
  'prepare_delegation' : (
      arg_0: UserNumber,
      arg_1: FrontendHostname,
      arg_2: SessionKey,
    ) => Promise<[UserKey, Timestamp]>,
  'register' : (arg_0: DeviceData) => Promise<UserNumber>,
  'remove' : (arg_0: UserNumber, arg_1: DeviceKey) => Promise<undefined>,
  'stats' : () => Promise<InternetIdentityStats>,
};