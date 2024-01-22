import VendorList from '@/Features/vendors-list';

import styles from '@/styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.home}>
      <VendorList />
    </div>
  );
}
