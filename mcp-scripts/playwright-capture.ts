/**
 * Playwright MCP Capture Script
 * 
 * This script captures screenshots and DOM snapshots of the TourRadar UI clone
 * for verification and comparison purposes.
 * 
 * Usage: npx tsx mcp-scripts/playwright-capture.ts
 */

import { chromium, Browser, Page } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const OUTPUT_DIR = path.join(__dirname, '../screenshots');

interface PageCapture {
  url: string;
  name: string;
  fullPage: boolean;
}

const pagesToCapture: PageCapture[] = [
  { url: '/', name: 'homepage', fullPage: true },
  { url: '/category/asia', name: 'category-asia', fullPage: true },
  { url: '/category/adventure-tours', name: 'category-adventure', fullPage: true },
  { url: '/tour/1', name: 'tour-detail-india', fullPage: true },
  { url: '/tour/2', name: 'tour-detail-peru', fullPage: true },
  { url: '/about', name: 'about', fullPage: true },
  { url: '/contact', name: 'contact', fullPage: true },
  { url: '/terms', name: 'terms', fullPage: false },
  { url: '/privacy', name: 'privacy', fullPage: false },
];

async function captureScreenshots() {
  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log('🚀 Starting Playwright screenshot capture...\n');

  const browser: Browser = await chromium.launch({
    headless: true,
  });

  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
  });

  const page: Page = await context.newPage();

  for (const capture of pagesToCapture) {
    try {
      console.log(`📸 Capturing: ${capture.name}`);
      console.log(`   URL: ${BASE_URL}${capture.url}`);

      await page.goto(`${BASE_URL}${capture.url}`, {
        waitUntil: 'networkidle',
        timeout: 30000,
      });

      // Wait a bit for animations to complete
      await page.waitForTimeout(1000);

      // Take screenshot
      const screenshotPath = path.join(OUTPUT_DIR, `${capture.name}.png`);
      await page.screenshot({
        path: screenshotPath,
        fullPage: capture.fullPage,
      });

      console.log(`   ✅ Screenshot saved: ${screenshotPath}\n`);

      // Capture DOM snapshot
      const html = await page.content();
      const htmlPath = path.join(OUTPUT_DIR, `${capture.name}.html`);
      fs.writeFileSync(htmlPath, html);

      console.log(`   ✅ HTML saved: ${htmlPath}\n`);
    } catch (error) {
      console.error(`   ❌ Error capturing ${capture.name}:`, error);
    }
  }

  await browser.close();
  console.log('✨ Screenshot capture complete!');
}

async function captureMobileScreenshots() {
  console.log('\n📱 Starting mobile screenshot capture...\n');

  const browser: Browser = await chromium.launch({
    headless: true,
  });

  const context = await browser.newContext({
    viewport: { width: 375, height: 667 }, // iPhone SE
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_0 like Mac OS X) AppleWebKit/605.1.15',
  });

  const page: Page = await context.newPage();

  for (const capture of pagesToCapture.slice(0, 4)) {
    try {
      console.log(`📱 Capturing mobile: ${capture.name}`);

      await page.goto(`${BASE_URL}${capture.url}`, {
        waitUntil: 'networkidle',
        timeout: 30000,
      });

      await page.waitForTimeout(1000);

      const screenshotPath = path.join(OUTPUT_DIR, `${capture.name}-mobile.png`);
      await page.screenshot({
        path: screenshotPath,
        fullPage: true,
      });

      console.log(`   ✅ Mobile screenshot saved: ${screenshotPath}\n`);
    } catch (error) {
      console.error(`   ❌ Error capturing mobile ${capture.name}:`, error);
    }
  }

  await browser.close();
  console.log('✨ Mobile screenshot capture complete!');
}

async function generateReport() {
  console.log('\n📊 Generating screenshot report...\n');

  const screenshots = fs.readdirSync(OUTPUT_DIR).filter(file => file.endsWith('.png'));

  let html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TourRadar UI Clone - Screenshot Report</title>
  <style>
    body {
      font-family: system-ui, -apple-system, sans-serif;
      max-width: 1400px;
      margin: 0 auto;
      padding: 20px;
      background: #f5f5f5;
    }
    h1 {
      color: #FF6B35;
      text-align: center;
    }
    .screenshot-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
      gap: 20px;
      margin-top: 30px;
    }
    .screenshot-item {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .screenshot-item img {
      width: 100%;
      height: auto;
      display: block;
    }
    .screenshot-item h3 {
      padding: 15px;
      margin: 0;
      background: #004E89;
      color: white;
    }
  </style>
</head>
<body>
  <h1>TourRadar UI Clone - Screenshot Report</h1>
  <p style="text-align: center; color: #666;">Generated: ${new Date().toLocaleString()}</p>
  
  <div class="screenshot-grid">
`;

  screenshots.forEach(screenshot => {
    const name = screenshot.replace('.png', '').replace(/-/g, ' ');
    html += `
    <div class="screenshot-item">
      <h3>${name}</h3>
      <img src="${screenshot}" alt="${name}">
    </div>
`;
  });

  html += `
  </div>
</body>
</html>
`;

  const reportPath = path.join(OUTPUT_DIR, 'report.html');
  fs.writeFileSync(reportPath, html);

  console.log(`✅ Report generated: ${reportPath}`);
}

async function main() {
  try {
    await captureScreenshots();
    await captureMobileScreenshots();
    await generateReport();
    
    console.log('\n✨ All done! Check the screenshots directory for results.');
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

main();
