import React from 'react';
import type { NextPage } from 'next';
import { Layout } from 'components/layout';
import { Team } from 'components/team/team';
import { User } from 'components/team/interface';
import { getUsers } from 'components/team/fetcher';
import '@fortawesome/fontawesome-free/css/all.min.css';

const TeamPage: NextPage = () => {
  const [users, setUsers] = React.useState<User[]>([]);

  React.useEffect(() => {
    (async () => {
      const res = await getUsers();
      setUsers(res ?? []);
    })();
  }, []);

  return (
    <div className="bg">
      <Layout title="WEB Teams">
        <h1 className="hi-team text-center">Meet The Team</h1>
        <Team users={users} />
      </Layout>
    </div>
  );
};

export default TeamPage;
