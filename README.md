# reporter-playwright-reports-server

Playwright reporter that uploads results to Playwright Reports Server - https://github.com/CyborgTests/playwright-reports-server

## Install

`npm i -D @cyborgtests/reporter-playwright-reports-server`

Then, in playwright.config file:
```js
  reporter: [
    // blob reporter is required, produced zip would be uploaded
    ['blob', { outputFile: 'test-results/blob.zip' }],
    [
      '@cyborgtests/reporter-playwright-reports-server',
      {
        /** 
         * Your server url 
         * @see https://github.com/CyborgTests/playwright-reports-server
         */
        url: 'https://your server instance.com',
        // Set token if your server instance has authentication enabled
        token: '1234'
        reportPath: 'test-results/blob.zip',
        // Any custom metadata to attach to this blob (strings)
        resultDetails: {
          branch: process.env.CI_COMMIT_BRANCH,
          foo: 'bar',
          bar: 'baz'
        },
        // Automatically trigger HTML report generation for this single uploaded blob. Set false if you want to merge sharded results
        triggerReportGeneration: true
      },
    ],
  ],
```

Then run your tests, if you see `[ReporterPlaywrightReportsServer] 🎭 HTML Report is available at: ...` - your blob results were successfully sent to server!

