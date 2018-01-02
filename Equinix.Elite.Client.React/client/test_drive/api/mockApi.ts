import Promise from "ts-promise";
import delay from './delay';
import { TestDrive } from '../model';

const data = [
  {
    id: 1,
    title: "Test Drive 1",
    description: "Test Drive Description",
    maxPoints: 100,
    startDate: "2017-12-27",
    endDate: "2017-12-27",
    expectedBusinessValue: "Expected Business Values 1",
    functon: ["Management", "Development"],
    location: ["India", "USA"],
    requiredDevices: ["Device1", "Device2"],
    requiredOs: ["OS1", "OS2"],
    maxTestDrivers: 5000,
    testCases: [{
      title: "Test Case 1",
      description: "Test Case Description",
      expectedOutcome: "Test Case expected values.",
      isInEditMode: false,
      testCaseType: "Choice"
    },
    {
      title: "Test Case 2",
      description: "Test Case Description",
      expectedOutcome: "Test Case expected values.",
      isInEditMode: false,
      testCaseType: "Choice"
    },
    {
      title: "Test Case 3",
      description: "Test Case Description",
      expectedOutcome: "Test Case expected values.",
      isInEditMode: false,
      testCaseType: "Choice"
    }
    ],
    questions: []
  },
  {
    id: 2,
    title: "Test Drive 2",
    description: "Test Drive Description",
    maxPoints: 100,
    startDate: "2017-12-27",
    endDate: "2017-12-27",
    expectedBusinessValue: "Expected Business Values 1",
    functon: ["Management", "Development"],
    location: ["India", "USA"],
    requiredDevices: ["Device1", "Device2"],
    requiredOs: ["OS1", "OS2"],
    maxTestDrivers: 5000,
    testCases: [],
    questions: []
  },
  {
    id: 3,
    title: "Test Drive 3",
    description: "Test Drive Description",
    maxPoints: 100,
    startDate: "2017-12-27",
    endDate: "2017-12-27",
    expectedBusinessValue: "Expected Business Values 1",
    functon: ["Management", "Development"],
    location: ["India", "USA"],
    requiredDevices: ["Device1"],
    requiredOs: ["OS1", "OS2"],
    maxTestDrivers: 5000,
    testCases: [],
    questions: []
  },
  {
    id: 4,
    title: "Test Drive 4",
    description: "Test Drive Description",
    maxPoints: 100,
    startDate: "2017-12-27",
    endDate: "2017-12-27",
    expectedBusinessValue: "Expected Business Values 1",
    functon: ["Management", "Development"],
    location: ["India", "USA"],
    requiredDevices: ["Device1", "Device2"],
    requiredOs: ["OS1", "OS2"],
    maxTestDrivers: 5000,
    testCases: [],
    questions: []
  },
];

class TestDriveApi {
  static saveTestDrives(testDrive: TestDrive) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ status: 'OK', testDrive });
      }, delay);
    });
  }

  static submitTestDrive(testDrive: TestDrive) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ status: 'OK', testDrive });
      }, delay);
    });
  }


  static getTestDrives() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, delay);
    });
  }
}

export default TestDriveApi;
