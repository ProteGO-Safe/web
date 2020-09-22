import { prepareLanguagesCustomLabels } from '../language.helpers';

describe('language', () => {
  it('should prepare languages custom labels', () => {
    const customLabels = {
      EN: 'English (EN)',
      PL: 'Polski (PL)',
      UK: 'Польська мова (UK)'
    };

    const preparedCustomLabels = prepareLanguagesCustomLabels(customLabels);
    expect(preparedCustomLabels).toEqual({
      GB: 'English (EN)',
      PL: 'Polski (PL)',
      UA: 'Польська мова (UK)'
    });
  });
});
