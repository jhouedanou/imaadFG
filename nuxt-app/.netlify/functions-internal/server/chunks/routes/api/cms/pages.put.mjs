import { d as defineEventHandler, r as readBody, c as createError } from '../../../nitro/nitro.mjs';
import { readFile, writeFile } from 'fs/promises';
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

const pages_put = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { pageName, data } = body;
    if (!pageName || !data) {
      throw createError({
        statusCode: 400,
        statusMessage: "Missing required fields"
      });
    }
    const configPath = join(process.cwd(), "public/config/site-content.json");
    const configContent = await readFile(configPath, "utf-8");
    const config = JSON.parse(configContent);
    if (!config.pages) {
      config.pages = {};
    }
    config.pages[pageName] = {
      ...config.pages[pageName],
      ...data
    };
    await writeFile(configPath, JSON.stringify(config, null, 2), "utf-8");
    return {
      success: true,
      message: `Page "${pageName}" updated successfully`
    };
  } catch (error) {
    console.error("Error updating page:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to update page content"
    });
  }
});

export { pages_put as default };
//# sourceMappingURL=pages.put.mjs.map
