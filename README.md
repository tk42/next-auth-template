# next-auth-template
Asmaller example of [next-auth-example](https://github.com/nextauthjs/next-auth-example)

One of the simplest Next.js (AppRouter) + NextAuth.js template with Tailwind CSS and TypeScript.

## Session Management
### Client Side
`SessionProvider` from `next-auth/react` is used to manage the session on the client side. It provides a `useSession` (from `next-auth/react` also) hook to access the session object.

### Middlware (server side)
`middleware` protects the routes that need authentication. It is used to check if the user is authenticated or not. If the user is not authenticated, it will redirect the user to the login page. All you need to do is to set `callbacks` with `auth` middleware.

### React Server Component (RSC, server side)
To get session data, all you need to do is to `const session = await auth()` and you will get the session object if `session?.user` is not null.

## Deploy
[Preparing for Production](https://authjs.dev/getting-started/deployment)

### Auth0
You should set the callback url on dev as follows:
```
http://localhost:3000/auth/callback/auth0
```

