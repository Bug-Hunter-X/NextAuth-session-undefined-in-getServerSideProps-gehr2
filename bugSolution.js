```javascript
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export default async function Home({ session }) {
  //session will be available here
  console.log(session);
  return (
    <div>
      <h1>Home Page</h1>
      {session && <p>User: {session.user.email}</p>}
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);

  return {
    props: {
      session,
    },
  };
}
```