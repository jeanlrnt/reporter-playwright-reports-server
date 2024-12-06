import type { FullConfig, FullResult, Reporter, Suite } from '@playwright/test/reporter';
type ReporterOptions = {
    url: string;
    reportPath: string;
    token?: string;
    resultDetails?: {
        [key: string]: string;
    };
    triggerReportGeneration?: boolean;
    dryRun?: boolean;
};
declare class ReporterPlaywrightReportsServer implements Reporter {
    rpOptions: ReporterOptions;
    pwConfig: FullConfig | undefined;
    blobPath: string | undefined;
    blobName: string | undefined;
    constructor(options: ReporterOptions);
    onBegin(config: FullConfig, suite: Suite): void;
    onEnd(result: FullResult): Promise<void>;
}
export default ReporterPlaywrightReportsServer;
