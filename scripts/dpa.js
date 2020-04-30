#!/usr/bin/env node

const HCCrawler = require('headless-chrome-crawler');
const CSVExporter = require('headless-chrome-crawler/exporter/csv');
const myURL = new URL(process.argv[2]);

const FILE = '/tmp/dpa-results-' + myURL.hostname + '.csv';

const exporter = new CSVExporter({
  file: FILE,
  fields: [
    'response.url',
    'response.status',
    'links.length',
    'response.headers.cache-control',
    'response.headers.x-cache',
    'response.headers.x-drupal-cache'
  ]
});

(async() => {
  const crawler = await HCCrawler.launch({
    maxDepth: 5,
    exporter,
    ignoreHTTPSErrors: true,
    skipDuplicates: true,
    allowedDomains: [myURL.hostname]
  });
  await crawler.queue({
    obeyRobotsTxt: false,
    skipDuplicates: true,
    url: myURL.href
  }, console.log("Started! " + Date()));
  await crawler.onIdle();
  await crawler.close(console.log("Yay, done! " + Date() + "\nOutput file in: " + FILE));
})();
