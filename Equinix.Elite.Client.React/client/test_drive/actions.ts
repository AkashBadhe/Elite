import { createAction } from 'redux-actions';

import { TestDrive, TestCase, Question } from './model';
import TestDriveApi from './api/mockApi';

import {
  ADD_TestDrive,
  DELETE_TestDrive,
  EDIT_TestDrive,
  SAVE_TestDrive,
  SUBMIT_TestDrive,
  ADD_TestCase,
  DELETE_TestCase,
  EDIT_TestCase,
  SAVE_TestCase,
  SUBMIT_TestCase,
  ADDQuestion,
  DELETEQuestion,
  EDITQuestion,
  SAVEQuestion,
  SUBMITQuestion
} from './constants/ActionTypes';

//  const addTestDrive = createAction<TestDrive, TestDrive>(
//   ADD_TestDrive,
//   (testDrive: TestDrive) => {
//     return testDrive;
//   }
//  );
//  const deleteTestDrive = createAction<TestDrive, TestDrive>();
//  const editTestDrive = createAction<TestDrive, TestDrive>();
const saveTestDrive = createAction<any, TestDrive>(
  SAVE_TestDrive,
  (testDrive: TestDrive) => TestDriveApi.saveTestDrives(testDrive)
);

const submitTestDrive = createAction<any, TestDrive>(
  SUBMIT_TestDrive,
  (testDrive: TestDrive) => TestDriveApi.submitTestDrive(testDrive)
);

const editTestDrive = createAction<TestDrive, TestDrive>(
  EDIT_TestDrive,
  (testDrive: TestDrive) => {
    return testDrive;
  }
);

const updateTestDrive = createAction<TestDrive, any, TestDrive>(
  EDIT_TestDrive,
  (e: any, testDrive: TestDrive) => {
    if (e.target.type && e.target.type.toLowerCase() === "select-multiple") {
      let list = e.target.selectedOptions;
      let selectedItems = [];
      for(let i =0; i< list.length; i++){
        selectedItems.push(list[i].value);
      }

      testDrive[e.target.name] = selectedItems;
    } else {
      testDrive[e.target.name] = e.target.value;
    }
    return testDrive;
  }
);
// {
//   if (e.target.type && e.target.type.toLowerCase() === "select-multiple") {
//       this.props.testDrive[e.target.name].push(e.target.value)
//   } else {
//       this.props.testDrive[e.target.name] = e.target.value;
//   }
// }

const deleteTestDrive = createAction<number, number>(
  DELETE_TestDrive,
  (id: number) => {
    return -1;
  }
);


//  const addTestCase = createAction<TestDrive, TestDrive>();
//  const deleteestCase = createAction<TestDrive, TestDrive>();
//  const editTestCase = createAction<TestDrive, TestDrive>();
//  const saveTestCase = createAction<TestDrive, TestDrive>();
//  const submitTestCase = createAction<TestDrive, TestDrive>();
//  const addQuestion = createAction<TestDrive, TestDrive>();
//  const deleteQuestion = createAction<TestDrive, TestDrive>();
//  const editQuestion = createAction<TestDrive, TestDrive>();
//  const saveQuestion = createAction<TestDrive, TestDrive>();
//  const submitQuestion = createAction<TestDrive, TestDrive>();

export {
  //addTestDrive,
  deleteTestDrive,
  editTestDrive,
  saveTestDrive,
  submitTestDrive,
  updateTestDrive
  // addTestCase,
  // deleteestCase,
  // editTestCase,
  // saveTestCase,
  // submitTestCase,
  // addQuestion,
  // deleteQuestion,
  // editQuestion,
  // saveQuestion,
  // submitQuestion
}
