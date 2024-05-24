import * as path from 'path';

class Logger {
  static debugMode: boolean = false;

  static setDebugMode(mode: boolean): void {
    Logger.debugMode = mode;
  }

  private static _getStackInfo(): string {
    const stackList = new Error().stack?.split('\n') || [];
    const relevantStackLine = stackList.find(line => !line.includes(__filename) && line.includes('at'));
    const regExp = /at\s+(.*)\s+\((.*?):(\d+):(\d+)\)|at\s+(.*?)(\S+):(\d+):(\d+)/;
    const matchResult = relevantStackLine?.match(regExp);
    if (matchResult) {
      const file = matchResult[2] || matchResult[6];
      const line = matchResult[3] || matchResult[7];
      return `${path.basename(file)}:${line}`;
    }
    return 'No stack info';
  }

  static log(message: string, level: 'info' | 'warning' | 'error' | 'debug' = 'info'): void {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level.toUpperCase()}]: ${message} ${level === 'error' ? this._getStackInfo() : ''}`);
  }

  static info(message: string): void {
    Logger.log(message, 'info');
  }

  static warning(message: string): void {
    Logger.log(message, 'warning');
  }

  static error(message: string): void {
    Logger.log(message, 'error');
  }

  static debug(message: string): void {
    if (Logger.debugMode) {
      Logger.log(message, 'debug');
    }
  }
}

export default Logger;
