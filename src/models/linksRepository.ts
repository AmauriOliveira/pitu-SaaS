/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-plusplus */
import linkModel, { IlinkModel } from './linkModel';
import { Link } from './link';

function findByCode(code: string): any {
  return linkModel.findOne<IlinkModel>({ where: { code } });
}

function add(link: Link): any {
  return linkModel.create<IlinkModel>(link);
}

async function hit(code: string): Promise<any> {
  const link = await findByCode(code);

  if (!link) {
    return null;
  }

  link.hits!++;

  await link.save();

  return link;
}

export default {
  findByCode,
  add,
  hit,
};
