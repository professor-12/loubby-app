"use client";
import React, {
    createContext,
    FC,
    PropsWithChildren,
    useContext,
    useReducer,
    Dispatch,
} from "react";
interface State {}

type Action = { type: "updateform"; payload: string; identifier: number };

const Store = createContext<
    { state: State; dispatch: Dispatch<Action> } | undefined
>(undefined);

const initialState: State = {
    stepOne: {},
    stepTwo: {},
    stepThree: {},
    stepFour: {},
    stepFive: {},
    stepsix: {},
    stepseven: {},
};

const reducer = (state: State | any, action: Action): State => {
    const key = action.identifier as any;
    switch (action.type) {
        case "updateform":
            return {
                ...state,
                [key]: { ...(state![key] as any as any) },
            };
        default:
            return state;
    }
};

const FormDataProvider: FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
    );
};

export default FormDataProvider;

export const useFormData = () => {
    const context = useContext(Store);
    if (context === undefined) {
        throw new Error("useFormData must be used within a FormDataProvider");
    }
    return context;
};

// {
//     "jobTitle": "Registrar and Secretary to Council",
//     "jobDescription": "{\"blocks\":[{\"key\":\"fd8sl\",\"text\":\"OBAFEMI AWOLOWO UNIVERSITY, ILE-IFE, NIGERIA\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"61ghr\",\"text\":\"2023 ADMISSION SCREENING EXERCISE\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"3mbfn\",\"text\":\"(FOR UTME AND DIRECT ENTRY CANDIDATES)\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"blm2l\",\"text\":\"Candidates who made Obafemi Awolowo University, Ile-Ife, their first choice in the 2023 UTME and scored 200 and above, and those who applied for Direct Entry (DE) are hereby informed that Registration for the 2023 Post-Unified Tertiary Matriculation Examination (PUTME) screening exercise will commence on Monday, 14th August and end on Monday, 11th September, 2023.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"mdgt\",\"text\":\"Candidates are required to go through the following processes:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"e6q0g\",\"text\":\"Step 1: Visit admissions.oauife.edu.ng\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"365jd\",\"text\":\"Step 2: Log on to the site with your Registration Number as Username and your Surname as \\tPassword.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"dkd64\",\"text\":\"Step 3: Fill the biodata form and click continue.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"9gi1\",\"text\":\"Step 4: Obtain an RRR (Remita Retrieval Reference) from this site only, and use it to make \\tpayment online or at any commercial bank.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"ct642\",\"text\":\"Step 5: Once payment is accepted, the system logs out and you can now login again.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"4g9r\",\"text\":\"The screening exercise will be conducted online.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"fi47q\",\"text\":\"Applicants that provide false information, or upload incorrect credentials will automatically be disqualified.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"art60\",\"text\":\"Candidates are required to check their screening schedule on the OAU admissions Portal from Tuesday 12th September to Saturday 23rd September, 2023.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"5vphm\",\"text\":\"Candidates will also be required to participate in the Post-UTME screening on their allotted dates and time from 25th September to 28th September, 2023.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"dmufq\",\"text\":\"Applicants should note that the PUTME-Screening fee is two thousand naira (N2,000.00) only, (Excluding Portal Access Charges).\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"4gqbk\",\"text\":\"All enquiries should be forwarded to enquiry@oauife.edu.ng.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"aq18o\",\"text\":\"SIGNED\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"25nv9\",\"text\":\"Kamardeen Adetunji BAKARE\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"5caln\",\"text\":\"Registrar and Secretary to Council\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
//     "jobDescEditorState": {
//         "_immutable": {
//             "allowUndo": true,
//             "currentContent": {
//                 "entityMap": {},
//                 "blockMap": {
//                     "aosln": {
//                         "key": "aosln",
//                         "type": "unstyled",
//                         "text": "",
//                         "characterList": [],
//                         "depth": 0,
//                         "data": {}
//                     }
//                 },
//                 "selectionBefore": {
//                     "anchorKey": "aosln",
//                     "anchorOffset": 0,
//                     "focusKey": "aosln",
//                     "focusOffset": 0,
//                     "isBackward": false,
//                     "hasFocus": false
//                 },
//                 "selectionAfter": {
//                     "anchorKey": "aosln",
//                     "anchorOffset": 0,
//                     "focusKey": "aosln",
//                     "focusOffset": 0,
//                     "isBackward": false,
//                     "hasFocus": false
//                 }
//             },
//             "decorator": null,
//             "directionMap": {
//                 "aosln": "LTR"
//             },
//             "forceSelection": false,
//             "inCompositionMode": false,
//             "inlineStyleOverride": null,
//             "lastChangeType": null,
//             "nativelyRenderedContent": null,
//             "redoStack": [],
//             "selection": {
//                 "anchorKey": "aosln",
//                 "anchorOffset": 0,
//                 "focusKey": "aosln",
//                 "focusOffset": 0,
//                 "isBackward": false,
//                 "hasFocus": false
//             },
//             "treeMap": {
//                 "aosln": [
//                     {
//                         "start": 0,
//                         "end": 0,
//                         "decoratorKey": null,
//                         "leaves": [
//                             {
//                                 "start": 0,
//                                 "end": 0
//                             }
//                         ]
//                     }
//                 ]
//             },
//             "undoStack": []
//         }
//     },
//     "jobType": "Full Time",
//     "jobCategory": "Administrative and Office Support",
//     "jobLocation": [
//         "Nigeria"
//     ],
//     "jobSalary": "$1000 - 2000",
//     "rateCurrency": "",
//     "jobSalaryMin": "",
//     "jobSalaryMax": "",
//     "salaryCurrency": "USD",
//     "jobRate": "Monthly",
//     "applicationDeadline": "2024-10-29",
//     "numberOfPositions": 1,
//     "openToRemote": false,
//     "approval": {
//         "dueDate": "2024-07-29"
//     },
//     "approvers": [],
//     "perks": {
//         "bonusTarget": false,
//         "dentalInsurance": false,
//         "disabilityInsurance": false,
//         "fourZeroOneK": false,
//         "medicalInsurance": false,
//         "stockOptions": false,
//         "visionInsurance": false
//     },
//     "applicationForm": {
//         "applicationData": [
//             {
//                 "label": "First Name",
//                 "type": "Short text",
//                 "required": true,
//                 "enabled": true,
//                 "id": "e7811b02-553d-4d6c-b3e1-3a4f3368291f"
//             },
//             {
//                 "label": "Last Name",
//                 "type": "Short text",
//                 "required": true,
//                 "enabled": true,
//                 "id": "d79c2ccf-a88a-4a2d-8eb1-0a65287c981b"
//             },
//             {
//                 "label": "Headline",
//                 "type": "Short text",
//                 "required": true,
//                 "enabled": true,
//                 "id": "28ddf0f2-ed31-414b-bcf1-6ec63462604c"
//             },
//             {
//                 "label": "Email Address",
//                 "type": "Short text",
//                 "required": true,
//                 "enabled": true,
//                 "id": "2fdcbaca-bb5f-4f5c-981b-4b2b85786c39"
//             },
//             {
//                 "label": "Phone Number",
//                 "type": "Number",
//                 "required": true,
//                 "enabled": true,
//                 "id": "921455ff-16af-4ed5-b20b-67da2f664b3d"
//             },
//             {
//                 "label": "Location",
//                 "type": "Address",
//                 "required": true,
//                 "enabled": true,
//                 "id": "06627253-3e46-4cd2-8e3e-9c04f7c34105"
//             }
//         ],
//         "isCustom": false,
//         "saveTemplate": false,
//         "templateName": "",
//         "mustBeLoggedIn": false
//     },
//     "scorecard": {
//         "scorecardData": [
//             {
//                 "id": "d1fa965c-302e-4b3a-bba1-6b1ccfb48f90",
//                 "name": "Communication Skills",
//                 "values": [
//                     "How easily is the candidate able to articulate complex ideas?",
//                     "How well is the candidate able to understand and respond to complex questions?",
//                     "Did the candidate ask clarifying and quality questions when necessary?"
//                 ]
//             },
//             {
//                 "id": "d70c113e-8d04-4381-9e91-d2a37cbfc3d7",
//                 "name": "Relevant Experience",
//                 "values": [
//                     "How relevant is the candidate’s past experience to the role?",
//                     "Has the candidate done projects in the past that are related to the role?",
//                     "How in-depth is the candidate’s technical know-how?"
//                 ]
//             },
//             {
//                 "id": "1c13c9f4-6077-47d3-8441-e7508443d8d7",
//                 "name": "Culture Fit",
//                 "values": [
//                     "Is the candidate open to learning new things (with proven track record)?",
//                     "How well does the candidate know about the company?",
//                     "Would you be excited to have this candidate on your team?"
//                 ]
//             }
//         ],
//         "enableScorecard": true,
//         "templateName": "",
//         "saveTemplate": false
//     },
//     "reference": {
//         "referenceData": [
//             {
//                 "label": "Email Address",
//                 "type": "Short text",
//                 "required": true,
//                 "enabled": true,
//                 "id": "a6198775-1dab-4d8c-af81-74102a6c20de"
//             },
//             {
//                 "label": "Full Name",
//                 "type": "Short text",
//                 "required": true,
//                 "enabled": true,
//                 "id": "45eed68c-c903-449e-8d4a-1c0b2faa5c63"
//             },
//             {
//                 "label": "Job Title",
//                 "type": "Short text",
//                 "required": false,
//                 "enabled": true,
//                 "id": "09f515b7-0cb9-408f-b7a4-5cccf63cddaa"
//             }
//         ],
//         "enableReference": true,
//         "numberOfRef": "",
//         "saveTemplate": false,
//         "templateName": "",
//         "referenceMessage": "Hello {{Full Name}}, Hope you're doing great. {{Candidate Name}} is applying for a role at {{Company Name}} and he picked you as a referral. How was your previous experience working with him. It would be great if you could say a few thing. Thanks"
//     },
//     "otherPerks": "",
//     "isPerkPublic": true,
//     "averageTimeToHire": "2 weeks",
//     "numberOfInterviews": 1,
//     "interviewStages": [
//         {
//             "id": "c84bbb45-7d2e-4d7b-8bb3-5b8a9acb54ec",
//             "order": 0,
//             "selectedStageName": "phone_interview",
//             "selectedType": "calendar",
//             "selectedTypeValue": "",
//             "aiInterviewDuration": 30,
//             "additionalPrompt": "",
//             "type": {
//                 "id": "phone_interview",
//                 "name": "Phone Interview",
//                 "subs": [
//                     {
//                         "id": "calendar",
//                         "text": "Calendar",
//                         "emailMessage": "the phone interview stage which would require a scheduled time for the call"
//                     }
//                 ]
//             }
//         },
//         {
//             "id": "4fb39f50-d759-4e6e-8429-573cb4fe0922",
//             "order": 1,
//             "selectedStageName": "first_round",
//             "selectedType": "live_video",
//             "selectedTypeValue": "",
//             "aiInterviewDuration": 30,
//             "additionalPrompt": "",
//             "type": {
//                 "id": "first_round",
//                 "name": "First Round",
//                 "subs": [
//                     {
//                         "id": "live_video",
//                         "text": "Live Video",
//                         "emailMessage": "the first round, this stage would require a live video in order to move to the next stage"
//                     },
//                     {
//                         "id": "one_way_video",
//                         "text": "One Way Video",
//                         "emailMessage": "the first round, this stage which would require you to perform a one way video which would be used to move you to the next stage"
//                     },
//                     {
//                         "id": "calendar",
//                         "text": "Calendar",
//                         "emailMessage": "the first round, this stage which would require you to create a scheduled time to move to the next stage"
//                     },
//                     {
//                         "id": "ai_interview",
//                         "text": "AI Interview",
//                         "emailMessage": "the first round, this stage which would require a live interview with an AI which would be used to move you to the next stage"
//                     }
//                 ]
//             }
//         },
//         {
//             "id": "0333c5e8-b63c-46f1-9fc1-340eae8f6b8c",
//             "order": 2,
//             "selectedStageName": "hiring_manager",
//             "selectedType": "live_video",
//             "selectedTypeValue": "",
//             "aiInterviewDuration": 30,
//             "additionalPrompt": "",
//             "type": {
//                 "id": "hiring_manager",
//                 "name": "Hiring Manager",
//                 "subs": [
//                     {
//                         "id": "live_video",
//                         "text": "Live Video",
//                         "emailMessage": "The hiring manager stage, this stage would require a live video with the hiring manager"
//                     },
//                     {
//                         "id": "one_way_video",
//                         "text": "One Way Video",
//                         "emailMessage": "The hiring manager stage, this stage which would require you to perform a one way video with hiring manager"
//                     },
//                     {
//                         "id": "calendar",
//                         "text": "Calendar",
//                         "emailMessage": "The hiring manager stage, this stage which would require you to create a scheduled time with hiring manager"
//                     }
//                 ]
//             }
//         }
//     ],
//     "prepMaterials": "",
//     "prepFiles": [],
//     "collaborators": [],
//     "additionalInformation": "",
//     "jobSkills": [
//         "Administrative Skills",
//         "Regulatory Compliance",
//         "Communication Skills",
//         "Organizational Skills",
//         "Attention to Detail"
//     ],
//     "experienceLevel": [
//         "seniorLevel"
//     ]
// }
