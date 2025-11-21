export default {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          cleanupIDs: false,
          prefixIds: false,
          prefixClassNames: false,
        },
      },
    },
    'removeDimensions',
    'removeDoctype',
    'removeComments',
    'removeMetadata',
    'removeDesc',
    'removeUnusedNS',
    'removeEmptyContainers',
    'removeEmptyAttrs',
    'removeEmptyText',
    'removeHiddenElems',
    'removeUselessStrokeAndFill',
    'removeUnknownsAndDefaults',
    'removeUselessDefs',
    'removeRasterImages',
    'removeEditorsNSData',
  ],
};
