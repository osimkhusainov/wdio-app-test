import report from '@wdio/allure-reporter';
import fs from 'fs';

export const addLog = (log) => {
  report.addStep(`STEP: ${log}`);
  console.log(`STEP: ${log}`);
};

export const parseJsonFile = (datapath) => {
  let data = fs.readFileSync(datapath, 'utf-8');
  return JSON.parse(data);
};

export const deleteDirectory = (path) => {
  if (fs.existsSync(path)) {
    fs.rmSync(path, { recursive: true });
    addLog(`Directory Deleted: ${path}`);
  }
};
