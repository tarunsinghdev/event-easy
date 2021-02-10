# Explanation

### Hot Module Replacement

Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways:

- Retain application state which is lost during a full reload.
- Save valuable development time by only updating what's changed.
- Instantly update the browser when modifications are made to CSS/JS in the source code, which is almost comparable to changing styles directly in the browser's dev tools

```
if(module.hot){
    module.hot.accepts('path/to/App', () => {
        ReactDOM.render(<App />, document.getElementById('root'));
    })
}
```

### Redux Setup For State Management

Import Provider from 'react-redux'. This provides a connection between react and redux.<br/>
We need to pass our created store to the provider.
To create our store we need to import createStore from 'redux' and pass it in out root reducer which is the combination(combine using yet another function combineReducer imported from 'redux' again) of the all the reducers we have created.

```
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

```

### User returned from Firebase

```
{
  type: 'SIGN_IN_USER',
  payload: {
    uid: 'k5afYEVFyYcL8nv1lq0Ryn9AiKT2',
    displayName: 'David',
    photoURL: null,
    email: 'david@test.com',
    emailVerified: false,
    phoneNumber: null,
    isAnonymous: false,
    tenantId: null,
    providerData: [
      {
        uid: 'david@test.com',
        displayName: 'David',
        photoURL: null,
        email: 'david@test.com',
        phoneNumber: null,
        providerId: 'password'
      }
    ],
    apiKey: 'AIzaSyD_0ds8RSfuE1Pv65j2mzCoj5sFJVpx3JE',
    appName: '[DEFAULT]',
    authDomain: 'events-easy.firebaseapp.com',
    stsTokenManager: {
      apiKey: 'AIzaSyD_0ds8RSfuE1Pv65j2mzCoj5sFJVpx3JE',
      refreshToken: 'AOvuKvQ7dyfJ_QjCZrMV8jEezQUMAg62Cvm68JlJsNBZBT_YhbcFXT5-tWIRjz71a8vANdeUvGPBhRZcECu-ez_4d9QjYYXlGmPi28k66rBfNPMxOcjXH5BIQc4zny8JOSxv25jvKMmXoMvG4QnIMH05XyWfzRMzUlUadrT_A2lhfhA5DTif14gzRFw6HSnMywMnphBV9HBY-cvVCFhPV5pYDAr9wxS43w',
      accessToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjJjMmVkODQ5YThkZTI3ZTI0NjFlNGJjM2VmMDZhYzdhYjc4OGQyMmIiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGF2aWQiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZXZlbnRzLWVhc3kiLCJhdWQiOiJldmVudHMtZWFzeSIsImF1dGhfdGltZSI6MTYxMjg3Mjc5NSwidXNlcl9pZCI6Ims1YWZZRVZGeVljTDhudjFscTBSeW45QWlLVDIiLCJzdWIiOiJrNWFmWUVWRnlZY0w4bnYxbHEwUnluOUFpS1QyIiwiaWF0IjoxNjEyODcyNzk1LCJleHAiOjE2MTI4NzYzOTUsImVtYWlsIjoiZGF2aWRAdGVzdC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGF2aWRAdGVzdC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.hPbNl4jMhQYKjROQ2UrZIIiJtjgRtCMVTTrusFJTmtVfsGu2MD_3r_czCU0BY3jAtH8WYPivNob3o7vj7wtrZcZ2eltYYhNTkhhvzwNGOwYvWKpCKnnD64DnEvjUXfjCFyOCi7o412paV0BwAaEzVjYGH4hPtSsTMUyXLbiSdnxapW2WGFolvolwLI2-ir-jUfeoTtBEr4FCKQDUswGzjYfTD6bP_haU5_1n-NcsiH83qjHtPjNRbS5InzTJSR8JImEO7oRKoaTPETXU58YnlMJTIb5hb5QVfsTpC45auYHuRJeYDKW-n3nYqRHl57eNs5Zgl0AX-psvIxXkJLbEfg',
      expirationTime: 1612876395635
    },
    redirectEventId: null,
    lastLoginAt: '1612872795266',
    createdAt: '1612792449408',
    multiFactor: {
      enrolledFactors: []
    }
  }
}
```
