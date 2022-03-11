import React from 'react';
import type { NextPage } from 'next';
import { Layout } from 'components/layout';
import { Team } from 'components/team/team';
import { User } from 'components/team/interface';
import { getUsers } from 'components/team/fetcher';
import styles from './index.module.scss';
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
      <div className={styles.bg}>
        <Team users={users} />
      </div>
    </Layout>
  );
};

export default TeamPage;
