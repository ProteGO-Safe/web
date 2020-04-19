export const FIELD_AGE = 'age';
export const FIELD_SEX = 'sex';
export const FIELD_NAME = 'name';
export const FIELD_PHONE = 'phone';
export const FIELD_TERM1 = 'term1';

export const FIELD_IS_CHRONIC_SICK = 'is_chronic_sick';
export const VALUE_IS_CHRONIC_SICK_YES = 'yes';
export const VALUE_IS_CHRONIC_SICK_NO = 'no';

const FIELD_CHRONIC_SICK_1 = 'nadciśnienie tętnicze';
const FIELD_CHRONIC_SICK_1_PH =
  'jak długo? podać w latach z dokładnością do 0.25 roku';
const FIELD_CHRONIC_SICK_2 = 'przewlekłe choroby układu oddechowego';
const FIELD_CHRONIC_SICK_2_PH = 'proszę wpisać jakie';
const FIELD_CHRONIC_SICK_3 =
  'choroby układu krążenia - choroba niedokrwienna serca';
const FIELD_CHRONIC_SICK_4 = 'choroby układu krążenia - wady zastawkowe serca';
const FIELD_CHRONIC_SICK_5 = 'choroby układu krążenia - niewydolność serca';
const FIELD_CHRONIC_SICK_6 = 'choroby układu krążenia - inne';
const FIELD_CHRONIC_SICK_6_PH = 'proszę wpisać jakie';
const FIELD_CHRONIC_SICK_7 = 'cukrzyca - insulinozależna';
const FIELD_CHRONIC_SICK_8 = 'cukrzyca - insulinoniezależna';
const FIELD_CHRONIC_SICK_9 = 'choroby układu immunologicznego';
const FIELD_CHRONIC_SICK_9_PH = 'proszę wpisać jakie';
const FIELD_CHRONIC_SICK_10 =
  'stosowanie leków obniżających odporność (immunosupresyjnych)';
const FIELD_CHRONIC_SICK_10_PH = 'proszę wpisać jakie';
const FIELD_CHRONIC_SICK_11 = 'choroby onkologiczne';
const FIELD_CHRONIC_SICK_11_PH =
  'proszę wpisać jakie podać w latach z dokładnością do 0.25 roku';
const FIELD_CHRONIC_SICK_12 = 'nietolerancje / alergie / nadwrażliwość na leki';
const FIELD_CHRONIC_SICK_12_PH =
  'proszę wpisać jakie podać w latach z dokładnością do <=1 , <3, <5, <10 <15 lub więcej niż 15 >lat';
const FIELD_CHRONIC_SICK_13 = 'nietolerancje / alergie - pokarmowe';
const FIELD_CHRONIC_SICK_13_PH = 'proszę wpisać jakie';
const FIELD_CHRONIC_SICK_14 = 'nietolerancje / alergie - oddechowe';
const FIELD_CHRONIC_SICK_14_PH = 'proszę wpisać jakie';
const FIELD_CHRONIC_SICK_15 = 'nietolerancje / alergie - inne';
const FIELD_CHRONIC_SICK_15_PH = 'proszę wpisać jakie';
const FIELD_CHRONIC_SICK_1_DESC = 'chronic_sick_1_desc';
const FIELD_CHRONIC_SICK_2_DESC = 'chronic_sick_2_desc';
const FIELD_CHRONIC_SICK_3_DESC = 'chronic_sick_3_desc';
const FIELD_CHRONIC_SICK_4_DESC = 'chronic_sick_4_desc';
const FIELD_CHRONIC_SICK_5_DESC = 'chronic_sick_5_desc';
const FIELD_CHRONIC_SICK_6_DESC = 'chronic_sick_6_desc';
const FIELD_CHRONIC_SICK_7_DESC = 'chronic_sick_7_desc';
const FIELD_CHRONIC_SICK_8_DESC = 'chronic_sick_8_desc';
const FIELD_CHRONIC_SICK_9_DESC = 'chronic_sick_9_desc';
const FIELD_CHRONIC_SICK_10_DESC = 'chronic_sick_10_desc';
const FIELD_CHRONIC_SICK_11_DESC = 'chronic_sick_11_desc';
const FIELD_CHRONIC_SICK_12_DESC = 'chronic_sick_12_desc';
const FIELD_CHRONIC_SICK_13_DESC = 'chronic_sick_13_desc';
const FIELD_CHRONIC_SICK_14_DESC = 'chronic_sick_14_desc';
const FIELD_CHRONIC_SICK_15_DESC = 'chronic_sick_15_desc';

export const chronicSickValues = [
  {
    field: FIELD_CHRONIC_SICK_1,
    description: FIELD_CHRONIC_SICK_1_DESC,
    placeholder: FIELD_CHRONIC_SICK_1_PH
  },
  {
    field: FIELD_CHRONIC_SICK_2,
    description: FIELD_CHRONIC_SICK_2_DESC,
    placeholder: FIELD_CHRONIC_SICK_2_PH
  },
  { field: FIELD_CHRONIC_SICK_3, description: FIELD_CHRONIC_SICK_3_DESC },
  { field: FIELD_CHRONIC_SICK_4, description: FIELD_CHRONIC_SICK_4_DESC },
  { field: FIELD_CHRONIC_SICK_5, description: FIELD_CHRONIC_SICK_5_DESC },
  {
    field: FIELD_CHRONIC_SICK_6,
    description: FIELD_CHRONIC_SICK_6_DESC,
    placeholder: FIELD_CHRONIC_SICK_6_PH
  },
  { field: FIELD_CHRONIC_SICK_7, description: FIELD_CHRONIC_SICK_7_DESC },
  { field: FIELD_CHRONIC_SICK_8, description: FIELD_CHRONIC_SICK_8_DESC },
  {
    field: FIELD_CHRONIC_SICK_9,
    description: FIELD_CHRONIC_SICK_9_DESC,
    placeholder: FIELD_CHRONIC_SICK_9_PH
  },
  {
    field: FIELD_CHRONIC_SICK_10,
    description: FIELD_CHRONIC_SICK_10_DESC,
    placeholder: FIELD_CHRONIC_SICK_10_PH
  },
  {
    field: FIELD_CHRONIC_SICK_11,
    description: FIELD_CHRONIC_SICK_11_DESC,
    placeholder: FIELD_CHRONIC_SICK_11_PH
  },
  {
    field: FIELD_CHRONIC_SICK_12,
    description: FIELD_CHRONIC_SICK_12_DESC,
    placeholder: FIELD_CHRONIC_SICK_12_PH
  },
  {
    field: FIELD_CHRONIC_SICK_13,
    description: FIELD_CHRONIC_SICK_13_DESC,
    placeholder: FIELD_CHRONIC_SICK_13_PH
  },
  {
    field: FIELD_CHRONIC_SICK_14,
    description: FIELD_CHRONIC_SICK_14_DESC,
    placeholder: FIELD_CHRONIC_SICK_14_PH
  },
  {
    field: FIELD_CHRONIC_SICK_15,
    description: FIELD_CHRONIC_SICK_15_DESC,
    placeholder: FIELD_CHRONIC_SICK_15_PH
  }
];

export const FIELD_BLOOD_GROUP = 'bloodGroup';

export const VALUE_MAN = 'male';
export const VALUE_WOMAN = 'female';

export const FIELD_CHOICE_ID = 'choice_id';
export const FIELD_ITEM_ID = 'item_id';

export const VALUE_PRESENT = 'present';
export const VALUE_ABSENT = 'absent';

export const ANDROID = 'Android';
export const IOS = 'iOS';

export const FIELD_TEMPERATURE = 'temperature';
export const FIELD_RUNNY_NOSE = 'runnyNose';
export const FIELD_COUGH = 'cough';
export const FIELD_CHILLS = 'chills';
export const FIELD_MUSCLE_PAIN = 'musclePain';
export const FIELD_CONTACTS = 'contacts';
export const FIELD_SMOKE = 'smoke';
export const FIELD_SMOKE_NUMBER = 'smokeNumber';

export const VALUE_SYMPTOM_LEVEL_1 = 'level 1';
export const VALUE_SYMPTOM_LEVEL_2 = 'level 2';
export const VALUE_SYMPTOM_LEVEL_3 = 'level 3';
export const VALUE_SYMPTOM_LEVEL_4 = 'level 4';

export const VALUE_BLOOD_GROUP_ABPLUS = 'AB+';
export const VALUE_BLOOD_GROUP_ABMINUS = 'AB-';
export const VALUE_BLOOD_GROUP_APLUS = 'A+';
export const VALUE_BLOOD_GROUP_AMINUS = 'A-';
export const VALUE_BLOOD_GROUP_BPLUS = 'B+';
export const VALUE_BLOOD_GROUP_BMINUS = 'B-';
export const VALUE_BLOOD_GROUP_0PLUS = '0+';
export const VALUE_BLOOD_GROUP_0MINUS = '0-';
export const VALUE_BLOOD_GROUP_UNDEFINED = 'nie wiem';
export const VALUE_SMOKE_YES = 'tak';
export const VALUE_SMOKE_NO = 'nie';
export const VALUE_SMOKE_NUMBER_1 = '1-5 sztuk';
export const VALUE_SMOKE_NUMBER_2 = '6-10 sztuk';
export const VALUE_SMOKE_NUMBER_3 = '11-20 sztuk';
export const VALUE_SMOKE_NUMBER_4 = '20-40 sztuk';
export const VALUE_SMOKE_NUMBER_5 = 'ponad 40';

export const STEP_EXPLAINER = 'explainer';

export const LOGO_COLOR_BLACK = 'black';
export const LOGO_COLOR_WHITE = 'white';
