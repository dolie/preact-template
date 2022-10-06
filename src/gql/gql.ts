/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query Characters($filter: FilterCharacter, $page: Int){\n    characters(filter: $filter, page: $page){\n      info {\n        count,\n        pages\n      },\n      results {\n        id\n        name,\n        species,\n        status,\n        image\n      }\n    }\n  }\n": types.CharactersDocument,
};

export function graphql(source: "\n  query Characters($filter: FilterCharacter, $page: Int){\n    characters(filter: $filter, page: $page){\n      info {\n        count,\n        pages\n      },\n      results {\n        id\n        name,\n        species,\n        status,\n        image\n      }\n    }\n  }\n"): (typeof documents)["\n  query Characters($filter: FilterCharacter, $page: Int){\n    characters(filter: $filter, page: $page){\n      info {\n        count,\n        pages\n      },\n      results {\n        id\n        name,\n        species,\n        status,\n        image\n      }\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;