import test from 'node:test';
import assert from 'node:assert/strict';
import { siteConfig } from '../src/config/site.ts';

test('site metadata includes the public author and project label', () => {
  assert.equal(siteConfig.author, 'Gabriel Henrique');
  assert.equal(siteConfig.siteName, 'Personal Tech Lab');
});

test('site navigation routes are included in the base configuration', () => {
  const routes = ['/', '/about/', '/projects/', '/blog/', '/contact/'];
  assert.deepEqual(routes.includes('/projects/'), true);
  assert.deepEqual(routes.includes('/blog/'), true);
});
