import crypto from 'crypto';

import { Link } from '../models/link';
import linksRepository from '../models/linksRepository';

function generateCode(): string {
  const fileHash = crypto.randomBytes(5).toString('hex');

  return fileHash;
}

async function postLink(reqLink: Link): Promise<Link> {
  const link = reqLink;

  link.code = generateCode();
  link.hits = 0;

  const result = await linksRepository.add(link);

  link.id = result.id;

  return link;
}

async function getLink(code: string): Promise<Link | null> {
  const link = await linksRepository.findByCode(code);

  return link;
}

async function hitLink(code: string): Promise<Link> {
  const link = await linksRepository.hit(code);

  return link;
}

export default {
  postLink,
  getLink,
  hitLink,
};
