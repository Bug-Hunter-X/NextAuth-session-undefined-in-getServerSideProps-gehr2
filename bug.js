```javascript
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export default async function Home() {
  const session = await unstable_getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}
```