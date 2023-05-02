export const menuItems = [
  {
    id: '1',
    label: 'Категории',
  },
  {
    id: '2',
    label: 'Продукты',
  },
];

export const forms = (state) => {
  return {
    1: '<category-form></category-form>',
    2: `<product-form categories='${JSON.stringify(state.categories)}'></product-form>`,
  };
};
