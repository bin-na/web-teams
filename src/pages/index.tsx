import React from 'react';
import type { NextPage } from 'next';
import { Layout } from 'components/layout';
import { Team } from 'components/team/team';
import { User } from 'components/team/interface';
import { getUsers } from 'components/team/fetcher';

const TeamPage: NextPage = () => {
  const [users, setUsers] = React.useState<User[]>([]);

  React.useEffect(() => {
    (async () => {
      const res = await getUsers();
      setUsers(res ?? []);
    })();
  }, []);

  return (
    <Layout title="WEB Teams">
      <Team users={users} />
    </Layout>
  );
};

export default TeamPage;
