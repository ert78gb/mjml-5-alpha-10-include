import mjml2html from 'mjml'
import path from 'node:path';
import { readFile } from 'node:fs/promises';

import { TEMPLATE_ROOT_FOLDER } from '../constants.js'

export default async function getHtmlEmailContent (templateName) {
  // read the template file first because we preprocess it with handlebars before we convert it html email
  const templateFilePath = path.join(TEMPLATE_ROOT_FOLDER, `${templateName}.mjml`);
  const fileContent = await readFile(templateFilePath, { encoding: 'utf8' });

  // the handlebars logic is here

  return mjml2html(fileContent, {
    filePath: templateFilePath, // if we don't set it then alpha.8 can't resolve the includes
    ignoreIncludes: false,
    minify: false,
  })
}
