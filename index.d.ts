import type { FullConfig, Reporter } from '@playwright/test/reporter';
type ReporterOptions = {
    enabled?: boolean;
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
    onBegin(): void;
    onEnd(): Promise<void>;
}
export default ReporterPlaywrightReportsServer;
