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

const siteInfo_put = defineEventHandler(async (event) => {
  try {
    const siteInfo = await readBody(event);
    const configPath = join(process.cwd(), "public/config/site-content.json");
    const configContent = await readFile(configPath, "utf-8");
    const config = JSON.parse(configContent);
    config.site = {
      ...config.site,
      ...siteInfo
    };
    await writeFile(configPath, JSON.stringify(config, null, 2), "utf-8");
    return {
      success: true,
      message: "Site information updated successfully"
    };
  } catch (error) {
    console.error("Error updating site info:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to update site information"
    });
  }
});

export { siteInfo_put as default };
//# sourceMappingURL=site-info.put.mjs.map
