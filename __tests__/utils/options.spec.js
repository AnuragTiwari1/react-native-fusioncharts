import fusonChartsOptions from '../../src/utils/options';

/* global describe it expect */
describe('It', () => {
  it('should return all FusionCharts supported chart options', () => {
    expect(fusonChartsOptions).toEqual([
      'type',
      'dataFormat',
      'dataSource',
      'events',
      'link',
      'showDataLoadingMessage',
      'showChartLoadingMessage',
      'baseChartMessageFont',
      'baseChartMessageFontSize',
      'baseChartMessageColor',
      'dataLoadStartMessage',
      'dataLoadErrorMessage',
      'dataInvalidMessage',
      'dataEmptyMessage',
      'typeNotSupportedMessage',
      'loadMessage',
      'renderErrorMessage',
      'containerBackgroundColor',
      'containerBackgroundOpacity',
      'containerClassName',
      'baseChartMessageImageHAlign',
      'baseChartMessageImageVAlign',
      'baseChartMessageImageAlpha',
      'baseChartMessageImageScale',
      'typeNotSupportedMessageImageHAalign',
      'typeNotSupportedMessageImageVAlign',
      'typeNotSupportedMessageImageAlpha',
      'typeNotSupportedMessageImageScale',
      'dataLoadErrorMessageImageHAlign',
      'dataLoadErrorMessageImageVAlign',
      'dataLoadErrorMessageImageAlpha',
      'dataLoadErrorMessageImageScale',
      'dataLoadStartMessageImageHAlign',
      'dataLoadStartMessageImageVAlign',
      'dataLoadStartMessageImageAlpha',
      'dataLoadStartMessageImageScale',
      'dataInvalidMessageImageHAlign',
      'dataInvalidMessageImageVAlign',
      'dataInvalidMessageImageAlpha',
      'dataInvalidMessageImageScale',
      'dataEmptyMessageImageHAlign',
      'dataEmptyMessageImageVAlign',
      'dataEmptyMessageImageAlpha',
      'dataEmptyMessageImageScale',
      'renderErrorMessageImageHAlign',
      'renderErrorMessageImageVAlign',
      'renderErrorMessageImageAlpha',
      'renderErrorMessageImageScale',
      'loadMessageImageHAlign',
      'loadMessageImageVAlign',
      'loadMessageImageAlpha',
      'loadMessageImageScale',
    ]);
  });
});
