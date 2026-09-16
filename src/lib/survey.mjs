import { siteName } from './site.mjs';

export const surveyTitle = `${siteName} for Robot Learning and Control: A Survey`;
export const surveyYear = 2026;
export const surveyArxivId = '2609.16074';
export const surveyArxivUrl = `https://arxiv.org/abs/${surveyArxivId}`;

// Author order, affiliations, and contribution marks from the repository README:
// https://github.com/RCL-Robotics/Awesome-World-Action-Model (retrieved 2026-09-12).
export const surveyAuthors = [
  { name: 'Zuxing Lu', mark: '1,*' },
  { name: 'Hongjia Zhai', mark: '1,*' },
  { name: 'Guanzhi Wang', mark: '2' },
  { name: 'Huajian Zeng', mark: '1' },
  { name: 'Jiaqi Yang', mark: '1' },
  { name: 'Jingyu Liu', mark: '1' },
  { name: 'Lei Cheng', mark: '1' },
  { name: 'Yuantai Zhang', mark: '1' },
  { name: 'Yuheng Qiu', mark: '3' },
  { name: 'Zezhou Cheng', mark: '4' },
  { name: 'Ivan Laptev', mark: '1' },
  { name: 'Danfei Xu', mark: '5' },
  { name: 'Benjamin Riviere', mark: '6' },
  { name: 'Giuseppe Loianno', mark: '7' },
  { name: 'Eric Xing', mark: '1' },
  { name: 'Xingxing Zuo', mark: '1,†' },
];
export const surveyAffiliations = [
  'MBZUAI',
  'Caltech',
  'Amazon FAR',
  'University of Virginia',
  'Georgia Tech',
  'New York University',
  'UC Berkeley',
];

const authorLines = surveyAuthors.reduce((lines, author, index) => {
  if (index % 4 === 0) lines.push(author.name);
  else lines[lines.length - 1] += ` and ${author.name}`;
  return lines;
}, []);

export const surveyBibtex = `@misc{lu2026worldactionmodels,
  title         = {{${surveyTitle}}},
  author        = {${authorLines.join(' and\n                   ')}},
  year          = {${surveyYear}},
  eprint        = {${surveyArxivId}},
  archivePrefix = {arXiv},
  primaryClass  = {cs.RO},
  url           = {${surveyArxivUrl}}
}`;
