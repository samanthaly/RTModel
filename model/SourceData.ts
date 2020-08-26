/**
 * create by liteng on 2020-07-03
 */
'use strict';
import {Image} from './Image';

interface NameType {
  chineseName?: string;
  englishName?: string;
}

enum DecorateType {
  bold = 'bold',
  italic = 'italic',
  superscript = 'superscript',
  subscript = 'subscript',
  underline = 'underline'
}
enum ReferenceType {
  citation = 'citation',
  table = 'table',
  image = 'image',
  formula = 'formula',
  appendix = 'appendix',
}
enum ListType {
  bullet = 'bullet',
  ordered = 'ordered'
}
interface Decorate {
  pos: number;
  length: number;
  type: Array<DecorateType>;
}
interface Paragraph {
  paragraph: string;
  text?: string;
  refs: Array<{pos: number; id: string; type: ReferenceType}>;
  decorates: Array<Decorate>;
  footnotes: Array<{pos: number; id: string}>;
  comment?: string;
}
interface Quote {
  text: string;
  refs: Array<{pos: number; id: string; type: ReferenceType}>;
  decorates: Array<Decorate>;
  footnotes: Array<{pos: number; id: string}>;
}
interface ListItem {
  text: string;
  type: ListType;
  refs: Array<{pos: number; id: string; type: ReferenceType}>;
  decorates: Array<Decorate>;
  footnotes: Array<{pos: number; id: string}>;
  formulas?: Array<{pos: number; id: string}>;
}

interface TableContent {
  header : Array<string>;
  body: Array<Array<string>>;

}

enum TableType {
  simpleTable = 'simpleTable',
  complexTable = 'complexTable' //only have a picture of the table
}

interface Table {
  id: string;
  caption: string;
  source: string;
  fileName: string;
  imgFileName?: string;
  data?: TableContent;
  type?: TableType
}
interface Section {
  preParagraphs: Array<Paragraph | {quote: Quote, comment?: string} | {list: ListItem, comment?: string} | {image: Image, comment?: string}>;
  sections: Partial<Section>[];
  decorates?: Array<Decorate>;
  comment?: string;
  name?: string;
}

interface Content {
  preParagraphs: Array<Section>;
  chapters: Array<Section>;
}

interface SourceData {
  title: {
    chineseName?: string;
    englishName?: string;
    decorates?: {chinese: Array<Decorate>; english: Array<Decorate>};
  };
  createdAt: number;
  lastModified: number;
  author: NameType;
  school: {department: NameType; major: NameType; classGroup: NameType; studentID: string};
  mentor: {name: NameType; schoolTitle: string};
  abstract: {
    chinese: {paragraphs: Array<Paragraph>};
    english: {paragraphs: Array<Paragraph>};
    keywords: Array<NameType>;
  },
  acknowledgement: Array<string>;
  content: Content;
  image: Array<Image>
}

export default SourceData;
export {
  Content,
  Section,
  Decorate,
  Paragraph,
  DecorateType,
  Quote,
  ListItem,
  ListType,
  Table,
  TableContent,
  TableType
};