import search from '../index';
import FaqList01Source from './faq_01_source.json';
import FaqList01Destination from './faq_01_destination.json';
import FaqList02Source from './faq_02_source.json';
import FaqList02Destination from './faq_02_destination.json';
import FaqList03Source from './faq_03_source.json';
import FaqList03Destination from './faq_03_destination.json';
import FaqList04Source from './faq_04_source.json';
import FaqList04Destination from './faq_04_destination.json';
import FaqList05Source from './faq_05_source.json';
import FaqList05Destination from './faq_05_destination.json';
import FaqList06Source from './faq_06_source.json';
import FaqList06Destination from './faq_06_destination.json';

describe('faq searcher', () => {
  it('should search on faq_01', () => {
    const { elements } = FaqList01Source;
    const { elements: elementsToCheck } = FaqList01Destination;

    const searchedElements = search('asd', elements);
    expect(searchedElements).toEqual(elementsToCheck);
  });

  it('should search on faq_02', () => {
    const { elements } = FaqList02Source;
    const { elements: elementsToCheck } = FaqList02Destination;

    const searchedElements = search('title 1', elements);
    expect(searchedElements).toEqual(elementsToCheck);
  });

  it('should search on faq_03', () => {
    const { elements } = FaqList03Source;
    const { elements: elementsToCheck } = FaqList03Destination;

    const searchedElements = search('text 1', elements);
    expect(searchedElements).toEqual(elementsToCheck);
  });

  it('should search on faq_04', () => {
    const { elements } = FaqList04Source;
    const { elements: elementsToCheck } = FaqList04Destination;

    const searchedElements = search('searched', elements);
    expect(searchedElements).toEqual(elementsToCheck);
  });

  it('should search on faq_05', () => {
    const { elements } = FaqList05Source;
    const { elements: elementsToCheck } = FaqList05Destination;

    const searchedElements = search('searched', elements);
    expect(searchedElements).toEqual(elementsToCheck);
  });

  it('should search on faq_06', () => {
    const { elements } = FaqList06Source;
    const { elements: elementsToCheck } = FaqList06Destination;

    const searchedElements = search('searched', elements);
    expect(searchedElements).toEqual(elementsToCheck);
  });
});
