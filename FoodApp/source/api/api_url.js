// import {API_URL, IMAGE_BASE_URL} from '../../env.json';
export default API_CONFIG = {
  // BASE_URL: API_URL,
  BASE_URL: 'https://myorderslip.com',
  // IMAGE_BASE_URL: IMAGE_BASE_URL,

  POST: 1,
  GET: 2,
  PUT: 3,
  DELETE: 4,
  IMAGE_UPLOAD: 5,

  LOGIN: 'api/v1/auth/login',
  GET_ACCCOUNT_INFO: 'api/v1/me',
  GET_COMPANIES: 'api/v1/companies/all',
  CHANGE_COMPANY: 'api/v1/bootstrap?company_id=',
  GET_CATEGORIES: 'api/v1/categories',
  GET_PRODUCTS: 'api/v1/items',
  GET_CATALOGS: 'api/v1/catalogs',
  GET_ORDERS: 'api/v1/estimates',
  GET_CUSTOMERS: 'api/v1/customers',
  GET_TAX_TYPES: 'api/v1/tax-types',
  GET_UNITS: 'api/v1/units',
  GET_EMPLOYEES: 'api/v1/users',
  GET_COMPANY: 'api/v1/company',
  GET_ORDER_NUMBER: 'api/v1/next-number',
  GET_REPORT_CUSTOMER: 'reports/sales/customers/',
  GET_REPORT_ITEM: 'reports/sales/items/',
};
