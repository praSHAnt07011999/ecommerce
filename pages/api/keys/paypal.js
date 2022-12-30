import { getSession } from 'next-auth/react';

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).send('signin required');
  }
  res.send(process.env.REACT_APP_PAYPAL_CLIENT_ID || 'sb');
};
export default handler;
