/**
 * Guards the registry against the one failure that actually hurts: a card whose
 * link is dead when a merchant taps it. Runs as `prebuild`, so a bad entry fails
 * the build instead of the pitch.
 */

import assert from "node:assert/strict";
import { existsSync, statSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { isLive, STOREFRONTS } from "../data/storefronts.ts";

const PUBLIC_DIR = join(fileURLToPath(import.meta.url), "..", "..", "public");
const SLUG_PATTERN = /^[a-z0-9]+(-[a-z0-9]+)*$/;

/** Maps a public-root URL path like "/thumbs/popbar.webp" to its file on disk. */
function resolveInPublic(urlPath: string): string {
  return join(PUBLIC_DIR, urlPath);
}

test("slugs are url-safe and unique", () => {
  const seen = new Set<string>();
  for (const s of STOREFRONTS) {
    assert.match(s.slug, SLUG_PATTERN, `slug "${s.slug}" is not url-safe`);
    assert.ok(!seen.has(s.slug), `slug "${s.slug}" is used twice`);
    seen.add(s.slug);
  }
});

test("every card has something to open", () => {
  for (const s of STOREFRONTS) {
    assert.ok(
      s.liveUrl !== null || s.prototypePath !== null,
      `"${s.slug}" has neither liveUrl nor prototypePath, so its card is a dead end`,
    );
  }
});

test("every prototype resolves to an index.html that exists", () => {
  for (const s of STOREFRONTS) {
    if (s.prototypePath === null) continue;

    // Extensionless, no trailing slash — the only form Vercel serves. Appending
    // /index.html here mirrors how Vercel and the dev rewrite both resolve it.
    assert.equal(
      s.prototypePath,
      `/prototypes/${s.slug}`,
      `"${s.slug}" prototypePath must be /prototypes/${s.slug} (no extension, no trailing slash)`,
    );

    const file = resolveInPublic(`${s.prototypePath}/index.html`);
    assert.ok(
      existsSync(file),
      `"${s.slug}" prototype is missing: ${file} — rename the handoff entry file to index.html`,
    );
    assert.ok(statSync(file).isFile(), `not a file: ${file}`);
  }
});

test("every thumbnail exists", () => {
  for (const s of STOREFRONTS) {
    const file = resolveInPublic(s.thumbnail);
    assert.ok(existsSync(file), `missing thumbnail for "${s.slug}": ${file}`);
    assert.ok(statSync(file).isFile(), `thumbnail is not a file: ${file}`);
  }
});

test("live urls are absolute https urls", () => {
  for (const s of STOREFRONTS) {
    if (s.liveUrl === null) continue;
    const url = new URL(s.liveUrl);
    assert.equal(
      url.protocol,
      "https:",
      `"${s.slug}" liveUrl must be https, got ${url.protocol}`,
    );
  }
});

test("status is derived from liveUrl", () => {
  for (const s of STOREFRONTS) {
    assert.equal(isLive(s), s.liveUrl !== null);
  }
});
