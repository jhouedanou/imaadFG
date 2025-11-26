import { d as defineEventHandler, c as createError } from '../../../nitro/nitro.mjs';
import { readFile } from 'fs/promises';
import { join } from 'path';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue-router';
import '@iconify/utils';
import 'consola';
import 'better-sqlite3';
import 'node:url';
import 'ipx';

const content_get = defineEventHandler(async (event) => {
  try {
    const configPath = join(process.cwd(), "public/config/site-content.json");
    const configContent = await readFile(configPath, "utf-8");
    const config = JSON.parse(configContent);
    return {
      success: true,
      data: config
    };
  } catch (error) {
    console.error("Error reading site content:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to read site content"
    });
  }
});

export { content_get as default };
//# sourceMappingURL=content.get.mjs.map
