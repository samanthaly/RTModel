/**
 * create by liteng on 2020-09-27
 */
'use strict';

interface Reference { // copy from miaowirte
  id?: string;
  authors: Array<{ name: string; organization?: string }>;
  title?: string;
  refType?: string;
  carrierType?: string;
  journal?: string;
  year: string | number;
  volume?: string | number;
  issue?: string | number;
  newspaperName?: string;
  startPage?: string | number;
  endPage?: string | number;
  publisherPlace?: string;
  publisher?: string;
  translations?: Array<{ name?: string }>;
  edition?: number;
  publishDate?: string | number;
  referenceDate?: string | number;
  url?: string;
  articleAuthors?: Array<{ name: string }>;
  articleTitle?: string;
  grantUnit?: string;
  otherTitle?: string;
  country?: string;
  patentID?: string;
}

export default Reference;