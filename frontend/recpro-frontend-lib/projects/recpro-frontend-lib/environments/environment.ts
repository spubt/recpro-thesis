export const environment = {
  production: false,
  baseUrl: 'http://localhost:8080',
  apiUrl: '/api',
  keycloak: {
    // Keycloak url
    issuer: 'http://localhost:8888',
    // Realm
    realm: 'recpro',
    clientId: 'frontend'
  },
};
