export interface Reporter {
    message: string;
    report: () => void;
}
