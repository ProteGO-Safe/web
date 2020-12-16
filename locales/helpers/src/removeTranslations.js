import readTranslation from './readTranslation/index.js';
import { writeTranslation } from './writeTranslation/index.js';

const labelsToRemove = [
  'smile_container_text1',
  'smile_container_text6',
  'smile_container_text7',
  'smile_container_text8',
  'smile_container_text9',
  'smile_container_text4',
  'triage_info_border_text1',
  'triage_info_border_text2',
  'triage_info_border_text3',
  'triage_info_border_text4',
  'triage_info_border_text8',
  'exposure_sick_text1',
  'exposure_sick_text2',
  'smile_no_data_text1',
  'smile_no_data_text2',
  'make_diagnosis_button_text1',
  'home_more_information_text1',
  'home_more_information_text2',
  'home_more_information_text3',
  'exposure_low_text1',
  'make_daily_button_text1',
  'make_daily_button_text2',
  'test_border_box_qualification_description_1',
  'test_border_box_qualification_title',
  'test_border_box_pick_up_description_1',
  'test_border_box_pick_up_title',
  'test_border_box_text_2',
  'test_border_box_text_1',
  'test_border_box_approve_description_9',
  'test_border_box_approve_description_10',
  'test_border_box_approve_description_11',
  'test_border_box_approve_description_8'
];

const groupsToRemove = [
  { prefix: 'call_doctor_text', number: 34 },
  { prefix: 'isolation_ambulance_text', number: 25 },
  { prefix: 'no_risk_text', number: 14 },
  { prefix: 'quarantine_text', number: 50 },
  { prefix: 'self_monitoring_text', number: 17 }
].reduce((array, item) => {
  const { prefix, number } = item;
  [...Array(number).keys()].forEach(value => array.push(`${prefix}${value + 1}`));
  return array;
}, []);

const { json: de } = readTranslation('de');
const { json: en } = readTranslation('en');
const { json: pl } = readTranslation('pl');
const { json: ru } = readTranslation('ru');
const { json: tr } = readTranslation('tr');
const { json: uk } = readTranslation('uk');

[...labelsToRemove, ...groupsToRemove].forEach(label => {
  delete de[label];
  delete en[label];
  delete pl[label];
  delete ru[label];
  delete tr[label];
  delete uk[label];
});

writeTranslation('de', de);
writeTranslation('en', en);
writeTranslation('pl', pl);
writeTranslation('ru', ru);
writeTranslation('tr', tr);
writeTranslation('uk', uk);
