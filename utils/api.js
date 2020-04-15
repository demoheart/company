// 测试环境走网关路径(dev)
const base_dev = "https://iot-api-boss-dev.chehejia.com";
// 测试环境走网关路径(test)
const base_test = "https://iot-api-boss-test.chehejia.com";
// ontest环境
const base_ontest = 'https://iot-api-boss-ontest.chehejia.com';
// 外网ontest
const base_ontest_public = 'https://bcs-api-boss-public-ontest.chehejia.com'
// 生产环境走网关路径
const base_prod = "https://api-boss-public.chehejia.com";

const base_url = base_test;

const api = {
  login: `${base_url}/aisp-amp-api/v1-0/auth/login`, //登录
  getStoreList: `${base_url}/chj-service-tur/api/tur-employee-sent/find-store-include-sent`, // 获取销售所属店铺列表
  getCustomerForPhone: `${base_url}/chj-service-tur/api/tur-customer/get-customer-phone`, // 通过电话获取线索列表
  getCustomerForName: `${base_url}/chj-service-tur/api/tur-customer/get-customer-name`, // 通过姓名获取线索列表
}

export default api