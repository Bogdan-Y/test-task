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
  getId(): number;
  setId(value: number): ClientProfileResponse;

  getPhotos(): string;
  setPhotos(value: string): ClientProfileResponse;

  getName(): string;
  setName(value: string): ClientProfileResponse;

  getAge(): number;
  setAge(value: number): ClientProfileResponse;

  getDescription(): string;
  setDescription(value: string): ClientProfileResponse;

  getHeight(): string;
  setHeight(value: string): ClientProfileResponse;

  getWeight(): string;
  setWeight(value: string): ClientProfileResponse;

  getBodytype(): string;
  setBodytype(value: string): ClientProfileResponse;

  getHaircolor(): string;
  setHaircolor(value: string): ClientProfileResponse;

  getEducation(): string;
  setEducation(value: string): ClientProfileResponse;

  getWork(): string;
  setWork(value: string): ClientProfileResponse;

  getLocation(): string;
  setLocation(value: string): ClientProfileResponse;

  getIsonline(): boolean;
  setIsonline(value: boolean): ClientProfileResponse;

  getIsverified(): boolean;
  setIsverified(value: boolean): ClientProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ClientProfileResponse): ClientProfileResponse.AsObject;
  static serializeBinaryToWriter(message: ClientProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientProfileResponse;
  static deserializeBinaryFromReader(message: ClientProfileResponse, reader: jspb.BinaryReader): ClientProfileResponse;
}

export namespace ClientProfileResponse {
  export type AsObject = {
    id: number,
    photos: string,
    name: string,
    age: number,
    description: string,
    height: string,
    weight: string,
    bodytype: string,
    haircolor: string,
    education: string,
    work: string,
    location: string,
    isonline: boolean,
    isverified: boolean,
  }
}

