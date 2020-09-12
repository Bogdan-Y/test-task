/* eslint-disable */
import * as jspb from 'google-protobuf'



export class ClientProfileRequest extends jspb.Message {
  getId(): number;
  setId(value: number): ClientProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ClientProfileRequest): ClientProfileRequest.AsObject;
  static serializeBinaryToWriter(message: ClientProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientProfileRequest;
  static deserializeBinaryFromReader(message: ClientProfileRequest, reader: jspb.BinaryReader): ClientProfileRequest;
}

export namespace ClientProfileRequest {
  export type AsObject = {
    id: number,
  }
}

export class ClientProfileResponse extends jspb.Message {
  getName(): string;
  setName(value: string): ClientProfileResponse;

  getAge(): number;
  setAge(value: number): ClientProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ClientProfileResponse): ClientProfileResponse.AsObject;
  static serializeBinaryToWriter(message: ClientProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientProfileResponse;
  static deserializeBinaryFromReader(message: ClientProfileResponse, reader: jspb.BinaryReader): ClientProfileResponse;
}

export namespace ClientProfileResponse {
  export type AsObject = {
    name: string,
    age: number,
  }
}

