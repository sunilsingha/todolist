// const proxy = require('http-proxy-middleware');
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://openweathermap.org/",
      changeOrigin: true,
      secure: false,
    })
  );
  app.use(
    "/assets",
    createProxyMiddleware({
      target: "https://s3.eu-central-1.amazonaws.com/sapcms-cms/",
      changeOrigin: true,
    })
  );
  app.listen(3000);
};
//Current : 'https://s3.eu-central-1.amazonaws.com/hyro-stagingsap-cms-kjfypq'
// http://localhost:3000/
// https://cms.ixsuite.app/ --production
// https://ie-cms-test.cfapps.eu10.hana.ondemand.com --test
// https://s3.eu-central-1.amazonaws.com/sapcms-cms/assets/
// https://s3-eu-central-1.amazonaws.com/hcp-b93216f5-9e15-4bb5-876d-c615075e99d2

// https://stagingsap.pxsuite.app/ --current
// https://s3.eu-central-1.amazonaws.com/hyro-stagingsap-cms-kjfypq -- current

// https://s3.eu-central-1.amazonaws.com/sapcms-cms -- production
// https://cms.ixsuite.app/ --prduction
