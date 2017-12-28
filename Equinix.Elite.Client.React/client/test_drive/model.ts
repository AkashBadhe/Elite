export type TestCase = {
    title: string;
    description: string;
    expectedOutcome: string;
}

export type Question = {
    question: string;
    type: string;
    options: Array<string>;
}


export type TestDrive = {
    id: number;
    title: string;
    description?: string;
    maxPoints?: number;
    startDate: Date;
    endDate?: Date;
    expectedBusinessValue: string;
    functon: string;
    location: string;
    requiredDevices: Array<string>;
    requiredOs: Array<string>;
    maxTestDrivers: number;
    TestCases: Array<TestCase>;
    Survey: Array<Question>;
    status: string;
};


export type IState = {
    testDrives: TestDrive[],
    loading: boolean
}

