export const menuItems = [
  {
    id: '1',
    label: 'Категории',
  },
  {
    id: '2',
    label: 'Продукты',
  },
  {
    id: '3',
    label: 'Акции',
  },
];

export const forms = (state) => {
  return {
    1: '<category-form></category-form>',
    2: `<product-form categories='${JSON.stringify(state.categories)}'></product-form>`,
    3: '<sales-form></sales-form>',
  };
};
